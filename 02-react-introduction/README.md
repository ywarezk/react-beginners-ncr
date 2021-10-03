# React introduction

hello world

## ReactElement

this is a javascript object.  
React can tranform that javascript object to a ui

## React.createElement

```javascript
React.createElement(
	type, // what do i need to draw, string, Function
	props, // TBD
	children // 
) : ReactElement
```






















Creating a playground with only react in it, to create a simple website while covering react basics.

## React.createElement and ReactElement

The function that is used the most in react library is `createElement`.  
Using this function we can create a `ReactElement` object which React can translate to an item on the screen.

## react-dom

`react-dom` can transform `ReactElement` to `DOM`

## Hello World

Create a website displaying hello world

## FunctionComponent

`createElement` can also get a component

## JSX

there is another way we can call the `createElement` function

## VirtualDOM

With React you do not interact with the DOM directly rather you are building and updating a VirtualDOM