# CS1210 Practical Git Lesson

Welcome to Practical Git! Today we're going to practice working using git and GitHub the way they're used in the real world. My instructions will assume you're using the command line (using an app like **Terminal** or **iTerm**). You can also use a git GUI like SourceTree or GitHub Desktop, though you may have to search the Internet for instructions on how to use those.

Instructions that involve a command-line tool will look like this:

```sh
$ git-command --argument
the output
```

### Setup

Before we start the tutorial, please make sure you've done the following things:

1. [Create a GitHub account](https://github.com/join)
2. [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (open a command line window and type `git`, if you see a list of available commands you already have git installed)
3. [Set up your account locally](https://help.github.com/articles/set-up-git/)

### Answering a Question

We'll walk through this in class, you do not need to do this before class.

#### 1. Fork the Repository

For this exercise, you're going to do something called "forking" a repository. On co-op you'll be a member of a repository and you'll work off of something called a "branch," but for open-source projects this will be the actual workflow. A fork is a copy of the repository that you own and can work on freely without affecting the original code.

On the top right corner of the page there should be a button that says "Fork," you can click that and you're done!

#### 2. Clone the Repository

Cloning a repository is the process of downloading the code to your machine. This creates a local copy that is linked to the version hosted on GitHub. To do this, in a directory dedicated to code you can run:

```
$ git clone https://github.com/MY_USERNAME/practical-git.git
Cloning into 'practical-git'...
remote: Counting objects: 19, done.
remote: Total 19 (delta 0), reused 0 (delta 0), pack-reused 19
Unpacking objects: 100% (19/19), done.
```
*NOTE:* If you used SSH keys to set up git instead of HTTPS that url will become `git@github.com:MY_USERNAME/practical-git.git`.

#### 3. Make your changes!

Once you've got the code on your machine, you'll see a few language-specific folders. Each folder contains the same questions, so just choose your favorite language and open that folder in your IDE/Editor of choice!

Go ahead and code out the solution to the problem, maybe even write some tests to prove it works :)

#### 4. Put your changes back on GitHub

Now we're going to create what's called a "commit." A commit is a small chunk of code that represents a complete piece of work. Normally you'd commit any time you reach a stopping point, but for simplicity's sake we'll just commit once you're done writing code.

An important part of a commit is the "commit message," you need to write a descriptive message telling everyone else what code is in your commit. A bad message would be something like `some changes`, a good message would be something like `implemented and wrote tests for python palindrome problem`.

To create a new commit, we need to tell git which files we want to add, create the commit itself, and then "push" it up to GitHub:

```sh
$ git add .  # adds all files in the current directory. you could put an
             # individual file path if you only want to commit a specific file
$ git commit -m "YOUR MESSAGE HERE"
[master 12345678] YOUR MESSAGE HERE
 2 files changed, 58 insertions(+)
$ git push origin master
Counting objects: 4, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 826 bytes | 826.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:MY_USERNAME/practical-git
   8a5b2fd..29d9916  master -> master
```
