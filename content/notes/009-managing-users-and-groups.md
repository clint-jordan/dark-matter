---
title: "Managing Users and Groups"
tags: [linux, rhcsa]
published: 2025-11-01T07:30:25+00:00
feature: false
draft: false
---

## User Properties
User properties are managed in /etc/passwd and /etc/shadow
- Name: name of the account
- Password: authentication secret, may be disabled
- UID: a unique identifier for users
- GID: ID of the primary group
- GECOS: additional non-mandatory information about the user
- Home directory: environment where users create personal files
- Shell: the program that will be started after successful authentication

## Create and Manage Users
- useradd: add a user
- usermod: modify a user
- userdel: delete a user
- passwd: change a user password

### Defining defaults

- Write default settings to /etc/login.defs
- Files in /etc/skel are copied to the user home directory upon creation.
- RHEL 10 uses Pluggable Authentication Modules (PAM) which is used to define
  more advanced default settings (not RHCSA topic). See `authselect`.

### Limit user access
Lock user account, anna
```bash 
usermod -L anna
```

Unlock user account, anna
```bash 
usermod -U anna
```

Set expiration date for user account, bill
```bash
usermod -e 2032-01-01 bill
```

Set shell to `/sbin/nologin` for a user, application, that is not intended to
login at all
```bash
usermod -s /sbin/nologin application
```

### Managing group access

- For filesystem permission purposes, each user must be a member of at least one group
- Primary group membership is managed through /etc/passwd
- The user primary group becomes group-owner if a user creates a file
- Secondary group membership is managed through /etc/group
- Temporarily set primary group membership using `newgrp`
- Use `id` to see which groups a user is a member of

## Creating and Managing Groups

- groupadd: add a group
- groupmod: modify a group
- groupdel: delete a group


Create a new group, support
```bash
groupadd support
```

Add user, linda, to group, support. Without `-a` (append) the current list of
groups would be overwritten.
```bash
usermod -aG support linda
```

Find all members of a group, support
```bash
grep support /etc/group
```

### Managing password properties

Set password age properties for user, linda
```bash
chage linda
```

## Lab Exercise
- Ensure that new users are required to reset their passwords every 90 days
- Ensure that all new users get an empty file, newfile, created in their home directory
- Create users anna, anouk, linda, and lisa
- Set the passwords for anna and anouk, but disable the passwords for linda and lisa
- Create the groups profs and students. Make anna and anouk members of profs.
  Make linda and lisa members of students.

