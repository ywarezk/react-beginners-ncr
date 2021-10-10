# Typescript

Programming language
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

## What is Typescript

- typescript is a programming language
- the file extension of a typescript file: `*.ts`
- almost no one can run typescript
- we need to compile our `ts` files.

       compile with typescript
*.ts ----------------------------> *.js

- microsoft create typescript
- typescript is open source

js is a dynamic language

typescript can help take javascript and add staticness to a dynamic language

- typescript is an *almost* superset of javascript
- typescript is very easy to learn

```
> npm install jquery
> npm install @types/jquery -D
```

## Install typescript

```
> npm init --yes
> npm install typescript -D
```

## tsconfig.json

configuration file for `typescript`

- typescript will know how to compile our JS files

```
> npx tsc --init
```

this command will create a default configuration file `tsconfig.json` for the typescript compiler.

## NPX

Node Package Executer.  

some libraries when you install them ship with extra cli commands.  
npx will search `node_modules/.bin` for those commands.

## Compiling the files in the project

```
> npx tsc -w
```












