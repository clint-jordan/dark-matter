---
title: "Initial VM Setup for RHCSA"
slug: "rhcsa-init"
tags: [linux, rhcsa]
published: 2025-10-29T14:12:42+00:00
updated: 2025-10-31T16:24:27+00:00
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

## Set vim mode
```bash
echo "set editing-mode vi" >> ~/.inputrc
echo "set -o vi" >> ~/.inputrc
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

## Enable NOPASSWD for wheel group

Create file in `/etc/sudoers.d`
```bash
echo '%wheel ALL=(ALL:ALL) NOPASSWD: ALL' > /etc/sudoers.d/wheel
```

Ensure sudoers can be parsed
```bash
visudo -cf /etc/sudoers
```

Change permissions of wheel file
```bash
chmod 0440 /etc/sudoers.d/wheel
```

Logout or Reboot
