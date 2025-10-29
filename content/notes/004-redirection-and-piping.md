---
title: "Redirection and Piping"
description: ""
longDescription: ""
cardImage: ""
tags: [linux, rhcsa]
published: 2025-10-29T14:37:34+00:00
# updated: 
feature: false
draft: false
---

## Redirect STDOUT to file
```bash
command > file
```

## Redirect STDOUT to file and append
```bash
command >> file
```

## Redirect STDERR
```bash
command 2> error.log
```

## Redirect STDERR to `/dev/null`
```bash
command 2> /dev/null
```

## Redirect STDOUT and STDERR to separate files
```bash
command > output.log 2> error.log
```

## Pipe STDOUT of one command to STDIN of another
```bash
command | another-command
```