# Routing

`react` does not deal with routing

## react-router

help us add routing to our app:

- /
- /login?hello=world&foo=bar
- /user

routing also help us to deliver data from one page to the next

1. query params
2. path params `/login/<some-var>/<another-var>` - 
3. fragment: `/login#hello` - used to direct to a location in some page

```
axios.post(...)
```

POST

`some-rul`

BODY

```
{
	password: '1111'
}
```








We will use `react-router` library, for routing in our react application.

## Install react router

```bash
> npm install react-router-dom
> npm install @types/react-router-dom -D
> npm install @types/react -D
```

## Router

Javascript object.  
incharge of changing the url and tracking the current url that we are in.  

### BrowserRouter

is the most common router.  
Regular url with folder /login/user

### HashRouter

url that start with hash: `/#/login/user`

## condition display component if url match

`<Route>`

`<Switch>`

renders a component if a condition of the url is met




## what routing is used in the web

## react-router-dom

## simple routing

## navigation

