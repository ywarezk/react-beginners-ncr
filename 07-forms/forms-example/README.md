# Handling forms with React

```javascript
<form onSubmit={() => console.log('this will run when submitting the form')}>
	<input type="email" ...>
	
	<TextArea ...>
	
	<button type="submit">Submit the form</button>
</form>
```

- Grab user input
- validate the input
- Display errors if needed

## Formik

library that helps us handle forms

- Grab user input
- validate the input
- Display errors if needed

```
> npm install formik
> npm install @types/react -D
```

### Formik without entering the events yourself

[formik auto link events](https://formik.org/docs/examples/basic)

## H.W

- go over the docs about how to deal with forms:

[React handling forms](https://reactjs.org/docs/forms.html)