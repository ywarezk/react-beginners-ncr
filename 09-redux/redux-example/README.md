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