# Redux

`useState` private state of component

```
localStorage.setItem('user', JSON.stringify(user));
```

Header

if changing the localstorage header will not call render

header will rerender

- setState
App - setState

```
history.push('/?user=...')
```
         App - const [user, setUser] = useState()

Login			Header


Redux = {user: null}

login = { user: {firstName ....}}

## What is Redux

A Predictable State Container for JS Apps  

This library manage the global data of our app

## State

s0 ---> s1 ----> s5

how certain data looks like in a certain time

s0

```
{
	user: null
}
```

s1

```
{
	user: {firstName: 'P'}
}
```

## Store

Store is the object that holds the state.  
The state is private.  


redux state

```
{
	amountMoney: 0
}
```

### store.dispatch

Will perform a change in the state.

```
store.dispatch(action)
```

## Action

action describes a change we want to perform in the state

```typescript
{
	type: string, // id of the action
	payload: any // additional data needed to change the state
}
```

## Reducer

reducer in programming language.  
usually you place in a `reduce`

aggregation on an array.

Takes an array an run a calculation on every array element while keeping the last calculation

```
reducer: (accumalator, current) => some calculation
```

### Reducer in redux

```
const reducer = function(currentStateOfRedux, action) {
	needs to return the next state
}
```

```
[
	action1 = {type: 'user logs in', payload: any},
	action2 = {type: 'user clicked a button', payload: any},
	action3 = {type: 'logout', payload: any},
] => currentStateState
```

### Redux bank account

`Amount` => display the bank amount

`Deposit` => increase the bank amout

s0

```
{
	bank: {
		amount: 0
	}
}
```

s1

```
{
	bank: {
		amount: 10
	}
}
```

## Install redux

```bash
> npm install redux @reduxjs/toolkit react-redux
```


## Simplify redux

					Action
react components -------------> Store

components  <------------------ Store

There are times when Actions should be born not from UI.  

manage change in redux state that is not from the UI:

- [redux sage](https://redux-saga.js.org/)
- [redux epics](https://redux-observable.js.org/docs/basics/Epics.html)

## Bank application

Redux:

s0
```javascript
{
	bank: {
		amount: 0
	}		
}
```

s1
```javascript
{
	bank: {
		amount: 10
	}		
}
```

s2
```javascript
{
	bank: {
		amount: 20
	},
	auth: {
		
	},
	dashboard: {
		
	}		
}
```

## Install redux

```bash
> npm install redux react-redux @reduxjs/toolkit
```

```
{
	auth: {
		user: null
	}
}
```

## Connect redux to my react application

1. create the store using the `configureStore` function

2. connect the store to react

## Redux developer tools

Adds a new tab to the chrome developer tools `Redux`.  
Allows you to examine what the redux store contains

[Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)