# Exercise Forms

In this exercise you will add implementation to the login form.  

1. Create a new module called `auth`.

You `src` folder should look like the following:

```
- src
  - app
  - auth
  - todo
```

2. Move the `Login` component to the new module.  
Module creation is something that you should always think about, and when one module becomes too big, and you can group elements under another module, you can add more folders and more modules and improve the splitting of files in your project.

3. create the file `user.model.ts` which holds an `interface` that represents a `User` object that the server returns.  
Place that file in the `auth` folder.  
A `User` object contains the fields: `id, email, firstName, lastName, token`

4. create the file `user.service.ts` which will contain a service class to interact with the `users` api.  
In that class create the method:

```
login(emailAndPassword): Promise<User>
```

In that method you should use `axios` to send a post request with the object `{email: 'email user entered in the form', password: 'password user entered in the form'}`.  

The `post` request should be sent to the following url: `https://academeez-login-ex.herokuapp.com/api/users/login`

5. Install a library called `formik` to help you handle the form in the login component.

```
npm install formik
```

6. Using `formik` grab what the user entered in the login form.
7. Validate user input using a library called `yup` which can connect to `formik`.
8. Material Design can display errors in their `TextField` component.
9. Attach a function to the form submit event using `formik` which will call the function with the values the user entered in the form
10. using the `user.service.ts` you created before send a request to the server with the `email` and `password` the user entered.
11. Create 2 state variables, one to hold an error message (if the login request fails), and one to hold the user you are getting from the server incase the server returns success.
12. If you enter the email: `yariv@nerdeez.com` with the password: `12345678` you should get a success
13. At the bottom of the form display `Hello {user.firstName}` if you get a success or and error if the server returns an error