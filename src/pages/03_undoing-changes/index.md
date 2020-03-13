---
path: "/03-undoing-changes"
date: "2020-03-11"
title: "Undoing Changes"
---

### Display difference between working directory and last commit

    $ git diff HEAD

### ----------

### Create new commit that undoes all changes made in <commit>

    $ git revert <commit>

### ----------

### Remove <file> from staging area - unstages file without overwriting any changes

    $ git reset <file>

### ----------

### Display which files would be removed from working directory

    $ git clean -n

### ----------

### Remove untracked file(s)

    $ git clean -f

### ----------

### Discard history and change back to the specified commit

    $ git reset --hard <commit>

### ----------

### Remove specified file from remote repo (for example, if commited file before adding it to .gitignore)

    $ git rm --cached <file-name>
