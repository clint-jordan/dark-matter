#!/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'

showHelp() {
    echo "Usage:" 
    echo -e "  $0 [opt] <filename>"
    echo "Options:"
    echo "  -b, --blog    Create a blog post"
    echo "  -n, --note    Create a note"
    echo "  -p, --project Create a project"
    echo "  -h, --help    Show this help message"
    exit 1
}

if [ $# -eq 0 ]; then
    showHelp
elif [ $# -gt 2 ]; then
    echo -e "\033[31mError: Too many arguments\033[0m"
    showHelp
fi

rootDir=$(dirname "$0") 

getPrefix() {
    latest=$(find $contentDir -type f -name "*.md" | xargs -I {} basename {} | sort -r | head -n 1 | cut -d "-" -f 1)
    printf "%03d" $((latest + 1))
}


short=b:,n:,p:,h
long=blog:,note:,project:,help
opts=`getopt \
    --options $short \
    --long $long \
    --name $( basename "$0" ) \
    -- "$@"`
if [ $? != 0 ] ; then echo "Failed parsing options." >&2 ; exit 1 ; fi

eval set -- "$opts"

# printf "%s \n" ${opts[*]}

while (( $# )); do
  case "$1" in
    -b | --blog ) contentType=blog; shift; name=$1; shift ;;
    -n | --note ) contentType=note; shift; name=$1; shift ;;
    -p | --project ) contentType=project; shift; name=$1; shift ;;
    -h | --help ) showHelp; exit 1 ;;
    -- ) break ;;
    * ) break ;;
  esac
done

frontmatter="---
title: \"\"
description: \"\"
slug: \"\"
longDescription: \"\"
cardImage: \"\"
tags: []
published: $(date +"%Y-%m-%dT%H:%M:%S+00:00")
# updated: 
feature: false
draft: true
---"

if [ $contentType = blog ]; then
    echo "--- creating blog post $name ---"
    contentDir=$rootDir/content/blogs
fi

if [ $contentType = note ]; then
    echo "--- creating note $name ---"
    contentDir=$rootDir/content/notes
fi

if [ $contentType = project ]; then
    echo "--- creating project $name ---"
    contentDir=$rootDir/content/projects
    frontmatter=$(echo "$frontmatter" | sed '/^tags:/a\repoUrl: ""' | sed '/^tags:/a\demoUrl: ""')
fi

prefix=$(getPrefix)
f="$contentDir/$prefix-$name.md"
echo "--- file: $f ---"
echo "$frontmatter" > $f
