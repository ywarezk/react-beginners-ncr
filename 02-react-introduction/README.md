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

## JSX

Javascript as XML

In our javascript/typescript code we can use syntax that is very similar to HTML

```js
<h1>
	<span>
		hello world
	</span>
</h1>
```



We use this syntax to descript how our react components look like.

			Compile JS       		Compiled JS
`hello.js` -------------> Babel -----------------> Browser

babel will transform the following syntax to this:

```js
React.createElement(...)
```

## H.W

go over the `flexbox` css styles:

[mdn flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)




















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