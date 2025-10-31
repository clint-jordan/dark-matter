---
title: "Understanding the Bash Shell"
tags: [linux, rhcsa]
published: 2025-10-31T10:56:07+00:00
feature: false
draft: true
---

## Redirection and Piping 

Redirect STDOUT to file
```bash
command > file
```

Redirect STDOUT to file and append
```bash
command >> file
```

Redirect STDERR
```bash
command 2> error.log
```

Redirect STDERR to `/dev/null`
```bash
command 2> /dev/null
```

Redirect STDOUT and STDERR to separate files
```bash
command > output.log 2> error.log
```

Pipe STDOUT of one command to STDIN of another
```bash
command | another-command
```

## Shell History

Print history

```bash
history
```

Repeat a command from history

```bash
!<line-number>
```

Commit session history
```bash
history -w
```

Remove a specific command from history

```bash
history -d <line number>
```

Clear history

```bash
history -c
```

Search backward in history
`Ctrl + r`

Search with partial matches

```bash
echo '"\e[A: history-search-backward"' >> ~/.inputrc
echo '"\e[B: history-search-forward"' >> ~/.inputrc
```

## Terminal Keyboard Shortcuts

Go to beginning of line 
`Ctrl-a`

Go to end of line 
`Ctrl-e`

Clear current line
`Ctrl-u`

Clear terminal window
`Ctrl-l`

## Shell Expansion

### Globbing

All characters `*`
```bash
ls *
```

Single character `?`
```bash
ls foo-?.txt
```

Ranges
```bash
ls [a-z]*
```
- [a-z] = all lowercase characters of the alphabet
- [A-Z] = all uppercase characters of the alphabet
- [a-zA-Z] = all characters of the alphabet, irrespective of their case
- [j-p] = lowercase characters j, k, l, m, n, o or p
- [a-z3-6] = lowercase characters or the numbers 3, 4, 5 or 6

### Brace expansion
```bash
touch file{1..9}
```

## Tuning Bash Environment
- Global profile configurations in `/etc/profile` and `/etc/profile.d`
- User specific profile configurations in `~/.bash_profile`
- Global bash configurations in `/etc/bashrc`
- User specific bash configurations in `~/.bashrc`

The difference between these is `profile` configurations are sourced by login
shells and `bashrc` configurations are sourced by shells opened after logging
in.  Configurations in `bashrc` should be specific to the interactive shell
environment like aliases, functions, prompt, etc. Configurations that should be
available to all process started during a login session should be in `profile`.