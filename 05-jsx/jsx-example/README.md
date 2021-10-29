# JSX

we use jsx to describe how our components look like.  

```javascript
<h1>
	hello world
</h1>
```

place jsx syntax in this file extension
`*.tsx`

```typescript
React.createElement(...) : ReactElement
```

syntax very similar to HTML but with differences.  
We will go over those differences


## 1. Big small letters

html is not case sensitive, jsx is.

## 2. object props are used

html attributes - class
in JSX most of them are the same - className
jsx attribute the props in DOMElement.

## 3. {}

1. you have to place expression inside the dynamic values {}
2. expression should equal the correct type


categories for code lines

- expression
- statement 

```javascript
if (someCondition) {
	// do something
} else {
	// do something else
}

const hello = someCondition ? 'world' : false
```
In the {} we always place expression - something that returns a value.

{} used for calculate dynamic values

used for props or between tags

props - {} to return expression of the type the prop supposed to get
between tags - {} to return ReactNode

## IF

```typescript
{
	condition ? returnSomething : returnSomethingElse
}

{
	function(){
		if (condition) {
			return returnSomething
		} else {
			return returnSomethingElse;
		}
	}()
}
```

## 4. One parent element

jsx must be wrapped in one parent element







JSX is our paint brush where we can describe how our component looks like.  
In this lesson we will cover ground rules regarding JSX.  
We will compare the difference between JSX and HTML



## Rules

1. Bigger smaller letters
2. properties based on the DOM element properties.
3. Dynamic expression are entered with `{}`
4. if example
5. for example
6. event example