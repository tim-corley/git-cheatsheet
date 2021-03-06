---
path: "/01-common-workflow"
date: "2020-03-11"
title: "Common Workflow"
---

### (from master) Create new branch

    $ git checkout -b <branch-name>

### ----------

### View current email address

    $ git config user.email

### ----------

### Update email address

    $ git config user.email <address@email.com>

### ----------

### View current remote repo

    $ git remote -v

### ----------

### View current status

    $ git status

### ----------

### Discard any unwanted files/changes

    $ git checkout -- <file>

### ----------

### Stage changes

    $ git add .

### ----------

### Check status

    $ git status

### ----------

### Commit changes

    $ git commit -m "<descriptive commit message>"

### ----------

### Push changes (to remote repo)

    $ git push origin <branch-name>

### ----------

### Checkout master branch

    $ git checkout master

### ----------

### Make sure local master is up-to-date

    $ git pull origin master

### ----------

### Merge branch (that was just pushed)

    $ git merge <branch-name>

### ==========

# Add Repo (Create new repo via [GitHub](https://github.com/new))

    $ git remote add origin git@personal:tim-corley/[repo-name].git
    $ git push origin master

### ----------

### Change Repo

    $ git remote set-url origin git@personal:tim-corley/[repo-name].git
    $ git push -u origin master
