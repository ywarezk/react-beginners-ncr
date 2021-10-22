# Exercise Routing

Add routing to your login application.

1. Your app will contain 3 routes

- `/` this will show the login screen
- `/todo` - this will show the todo list screen (the todo and login have seperate pages now)
- All other urls will show a 404 error page

2. When the user successfully logs in, he will be directed to the `/todo`.

3. when the user press the header logo icon, he will be directed to `/` the login screen.

4. The login should not display the user like in the previous exercise, instead in the header you will display: `hello guest` if the user is not logged in, or `hello {user.firstName}` if he is logged in