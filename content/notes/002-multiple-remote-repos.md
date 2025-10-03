---
title: Remote Repositories with Shared Features
slug: multiple-remote-repos
description: Share features across multiple repositories
longDescription: ""
cardImage: ""
tags: ["git"]
published: 2025-10-02T18:09:22+00:00
# updated: 2025-12-18T02:39:03+00:00
feature: true
draft: false
---


# Why?

While making this website I ran into a situation where I needed to maintain two
separate repositories that shared features, but not content, settings, images, etc.

# How?

Main repo in this case refers to my website and the second repo refers to the
astro theme.

#### Clone the main repo if necessary

```
git clone git@github.com:username/my-awesome-website
```

#### Add the second remote repo

```
git remote add theme git@github.com:username/my-awesome-theme
```

#### Create an awsome feature

```
git checkout -b awsome-feature 
```

#### Push the feature to the second repo

```
git push theme awesome-feature
```

#### Integrate changes in the second repo

```
git pull
git log origin/awesome-feature -n 3
git cherry-pick $commit
```

Where `$commit` is the actual commit number. If you don't need to bother with
manually resolving conflicts, you can choose to accept all incoming changes with
this:

```
git cherry-pick -X theirs $commit
```

Again, where `$commit` is the commit number.
