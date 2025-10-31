---
title: "Using Essential Tools"
tags: [linux, rhcsa]
published: 2025-10-29T17:18:01+00:00
feature: false
draft: false
---

## Search man pages
```bash
man -k <search-string>
```

## Filter for user commands
```bash
man -k <search-string> | grep 1
```

## Filter for admin commands
```bash
man -k <search-string> | grep 8
```