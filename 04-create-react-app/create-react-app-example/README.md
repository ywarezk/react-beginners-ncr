# create-react-app

Playground
- index.html, babel, js, react => login

Do not develop with React in our playground

- starter kit to start our react web application

one command to start a react web applicatio

```bash
> npx create-react-app create-react-app-example --template=typescript
```

## Development server

server where we can our app running in the browser on port 3000

```bash
> npm start
```

## NPX

- goto `node_modules/.bin/<some command>`

```bash
> npx tsc -w
```

npx: `node_modules/.bin/tsc -w`

- if you do not have node_modules

we did this command to start a new react web application

```bash
> npx create-react-app project-name --template=typescript
```

```bash
> npm install -g create-react-app
> execute the command
> npm uninstall -g create-react-app
```

## Install material

```bash
> npm install @mui/material @emotion/react @emotion/styled
```

## Declaration files

There are times when you do import

```typescript
import React from 'react'
```

typescript will complain about the import.  
Cannot find decalaration file of `react`

```bash
> npm install @types/react -D
```

## Popular React libraries

- UI/UX
  - Material Design
  - Ant design
  - React bootstrap
  
- Data
  - Redux
  - Mobx
  - Apollo
  
- Server communication
  - axios
  - Graphql - Apollo
  
- Routing
  - react-router
    - /about
	- /login
	
  
- Framework
  - Next.js
  
- Styling your react web application
  - create `css` files
  - `SASS/SCSS/less` - languages that compile to `CSS`
  - `styled-components`
  
- Testing
  - Jest
  - Mocha
  - Jasmine
  - Cypress
  - Karma

## What files did `cra` create for us

- `/public/index.html` - entry point
- `/src/index.tsx` - Javascript entry point
- `/src/App.tsx` - React root component
- `/src/index.css` - 

## Webpack
			    Build (lint, TSC, SCSS)
- taking our code ----------------> Browser

`
import ...
`

webpack takes the import and compiles them and add them to the application bundle



## Deploy

```bash
> npm run build
```

## Lint

checks your code for rules and best practices

## Chrome Developer tools

- debugging
- styling
- network
- javascript commands
- report

## Best practices for arranging our files - File structure

React docs recommendation for file structure:

[File structure](https://reactjs.org/docs/faq-structure.html#gatsby-focus-wrapper)

group your project by feature or route

/settings/profile
/settings/account
/settings/dashboard

`user`


## EX

- App
  - Header
  - Login
  - Footer