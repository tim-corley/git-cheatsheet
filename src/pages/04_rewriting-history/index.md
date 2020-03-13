---
path: "/04-rewriting-history"
date: "2020-03-11"
title: "Rewriting History"
---

### Display history

    $ git log --oneline
    $ git log --stat
    $ git log --pretty="format:%h %s" --graph
    $ git log --pretty="format:%an %s" --since=5.weeks --graph

### ----------

### Display history (commits, checkouts, resets, marges) of local repo

    $ git reflog

### ----------

### Replace last commit with the staged changes and last commit combined

    $ git commit --amend

### ----------

### Rebase the current branch onto <base> (<base> can be a commit ID, branch name, a tag, or a relative reference to HEAD)

    $ git rebase <base>

### ----------

### Show a log of changes to the local repository’s HEAD. (Add --relative-date flag to show date info or --all to show all refs)

    $ git reflog

### ==========

### Change 'authored by' & 'commited by' fields (works in master & for initial commit)

    $ git rebase -i --root
    $ git -c user.name="Your Name" -c user.email=address@email.com commit --amend --reset-author
    $ git rebsae --continue
