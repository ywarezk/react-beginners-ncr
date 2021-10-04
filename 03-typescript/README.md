# Typescript

First we need to install typescript

## npm - node package manager

we will use npm to install typescript

### Different commands we will use in NPM

#### init npm in the current directory

1.

```bash
> npm init --yes
```

initializes npm in the current directory.  

This command creates the file `package.json`.

If the `package.json` already exists you do not need to run the init command again.

#### package.json

contains information about the package you are creating

#### install packages

```bash
> npm install typescript -D
```

```bash
> npm install react
```

this command will install the package in the `node_modules`.  
When you install a package it place the packages in the node_modules directory.


The `node_modules` is not pushed to TFS repository or to git repository.  

if there is no `node_modules` and there is `package.json`:

```bash
> npm install
```

#### package-lock.json

do not touch this file.  
do push this file to TFS

`package-lock.json` is a snapshot of your `node_modules`.  
With this all team members will have a similar `node_modules`.

#### registry

from where npm is install the packages

```bash
> npm get registry
```

alot of organization works with private npm

```bash
> npm set registry <https://some-url-of-ncr-npm-registry>
```

```bash
> npm login
```












## About Typescript

## tsconfig.json

## Running and debugging

## Variables

## Common types

## modules

## Promises

