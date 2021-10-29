# React Components

- component represent a block of ui
- incharge of drawing and updating the ui that the component is responsible for

```typescript

function MyComponent() {
	return (
		<h1>hello world</h1>
	)
}

```

## 1. Hello world

## 2. props

transfer information to a component from a parent

## 3. component can update itself

- Component is a state machine
- component defines it's state using the

```typescript
const [stateVar, setStateVar] = useState(initialValue);
```

- when state is change using the set function the componnt will re-render (the component funciton will be called again)
- order is important do not wrap hooks in if or for
- do not call the set state when react re-renders only on action


4. Install the chrome extension react dev tools

[React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

will add more tabs to the developer tools (F12)







# Topics

## Props

## useState

## useEffect