# Exercise Redux

## Redux State

Your redux state should look like this.  

`S0`

```javascript
{
	auth: {
		user: null
	}
}
```

After the user logs in the redux state should look like this.  

`S1`

```javascript
{
	auth: {
		user: {
			id: 35,
			firstName: 'Yariv',
			lastName: 'Katz',
			token: '...'
		}
	}
}
```

the user is set to what the server returns.

## Read from state

The header should read from the redux state, and display:

`Hello Guest` if the `user` is `null`  

`Hello Yariv` if the `user` is logged in.