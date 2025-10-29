---
title: "Initial VM Setup for RHCSA"
description: ""
slug: "rhcsa-init"
longDescription: ""
cardImage: ""
tags: [linux, rhcsa]
published: 2025-10-29T14:12:42+00:00
# updated: 
feature: false
draft: false
---

## Disable screen saver
This is mainly for working with virtual machines in practice. From GNOME:
Settings -> Power -> Power Saving -> Set to Never

## Swap caps and escape
```bash
gsettings set org.gnome.desktop.input-sources xkb-options "['caps:swapescape']"
```

## Set aliases
```bash
echo "alias vi=vim" >> .bashrc
exec $SHELL
```

## Enable reverse search
```bash
echo '"\e[A": history-search-backward' >> .inputrc
echo '"\e[B": history-search-forward' >> .inputrc
exec $SHELL
```
