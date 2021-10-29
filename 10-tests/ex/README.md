# Exercise Testing

In this exercise we will write unit test to check our components.

## Header

Write the following  unit test to test the header functionality

1. when the redux state looks like this:

```
{
	auth: {
		user: null
	}
}
```

an `Hello Guest` is displayed.

2. When the redux state looks like this:

```
{
	auth: {
		user: {
			firstName: 'Yariv',
			lastName: 'Katz',
			id: 1,
			email: 'no@no.no',
			token: 'stam token'
		}
	}
}
```

then the header displays the message `Hello Yariv`.

## TodoList

Write the following test:

By mocking the response from the server returning 3 task items.  
Make sure you are creating 3 list items.

## Login

Write the following tests:

1. Client side validation.  
Make sure that when input an invalid email and a short password, the proper errors are displayed and no request is sent.

2. Success request.  
Submit the form with a valid input, and mock a success server response.  
make sure the redux state is populated and this routing is called.

3. Failed request.  
Submit the form with valid input and mock invalid credentials response from the server.  
Make sure an error is displayed

