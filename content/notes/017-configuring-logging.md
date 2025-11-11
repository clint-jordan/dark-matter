---
title: "Configuring Logging"
tags: [linux, rhcsa]
published: 2025-11-11T09:29:32+00:00
feature: false
draft: true
---

## RHEL 10 logging options

References
- [Fedora Project Docs](https://docs.fedoraproject.org/en-US/fedora/f40/system-administrators-guide/monitoring-and-automation/Viewing_and_Managing_Log_Files/)

Knowledge Check
- Where does the systemd journal receive log messages from?
- By default, are systemd journal logs persistent or non-persistent?
- Where does the rsyslog service write log messages to by default?
- How can you modify where rsyslog writes logs?

<!-- Answers
- systemd-journald receives log messages from:
  - the kernel
  - boot procedures
  - syslog events
  - STDOUT and STDERR from daemons
- The systemd journal is non-persistent by default
- The rsyslog service reads syslog messages and writes them to files in
  `/var/log` or as defined in an output module
- Services may also write to `/var/log` -->

## Using systemd-journald

References
[Fedora Project Docs](https://docs.fedoraproject.org/en-US/quick-docs/viewing-logs/)

Useful commands
```bash
systemctl status name.unit # easy access to the latest log messages
journalctl # prints entire journal (important in red)
journalctl -p err # shows only messages with a priority error and higher
journalctl -f # shows the last 10 lines and follows
journalctl -u name.unit # 
journalctl --since "-1 hour"; journalctl --since today 
journalctl -o verbose # 
journalctl -b # shows current boot log
journalctl -xb # add explanation to boot log messages
journalctl --list-boots # shows all boots that have been logged (persistent journal only)
journalctl -b 3 # shows messages from the third boot log only
```

## Preserving the systemd journal

Knowledge Check
1. Why are systemd logs non persistent by default?
1. Where are the systemd journal settings?
1. How can you make systemd logs persistent?
1. What are the storage options for the systemd journal?
1. How often are log files rotated by default?
1. How much of the filesystem size can be used by logs by default?
1. How much of the filesystem free size can be used by logs by default?

Answers
1. Persistent logs are handled by the rsyslog service
1. /usr/lib/systemd/journal.conf
1. Storage=auto
1. Storage options
   - auto:
   - persistent: stores journals in /var/log/journal
   - volatile: stores journals in the temp /run/log/journal directory
   - none: doesn't use any storage for the journal at all
1. Log files rotated monthly default?
1. How much of the filesystem size can be used by logs by default?
1. How much of the filesystem free size can be used by logs by default?

