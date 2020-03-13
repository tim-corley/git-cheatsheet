---
path: "/05-branches"
date: "2020-03-11"
title: "Branches"
---

### Display all local branched

    $ git branch

### ----------

### Create new branch

    $ git branch <branch-name>

### ----------

### Switch to specified branch

    $ git checkout <branch-name>

### ----------

### SCreate new branch and switch to it

    $ git checkout -b <branch-name>

### ----------

### Combine specified branch’s history into the current branch

    $ git merge <branch-name>

### ----------

### Display list of all local branches that have been merged

    $ git branch --merged | egrep -v "(^\*|master|dev)"

### ----------

### Delete all local branch that have been merged

    $ git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d

### ----------

### Delete specified local branch (only works if branch has been merged)

    $ git branch -d <branch-name>

### ----------

### Delete specified local branch

    $ git branch -D <branch-name>

### ----------

### Delete specified remote branch

    $ git push <remote-name> --delete <branch-name>

### Combine several commits on a branch to a single commit on new branch

    $ git checkout master
    $ git checkout -b <new-branch-name>
    $ git merge --squash <branch-with-many-commits>
