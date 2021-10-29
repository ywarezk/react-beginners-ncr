# Exercise Components

- create a `todo` module in the `src` folder.

```
- src
  - app
  - todo
```

- Move the `TodoList` component to that module
- We have a `REST` api to grab tasks from a server connected to a database: `http://nztodo.herokuapp.com/api/tasks/?format=json`
- In the `todo` folder create the file `task.model.ts` with an interface of a single object that the server is returning
- Create an interface
- install `axios` for server requests
- In the `todo` folder create the service `TaskService` which will have methods to interact with the server task api.
- In the `Task` service create the method `getTasks(): Promise<Task[]>`
- This method should send a get request to the following url: `http://nztodo.herokuapp.com/api/tasks/?format=json` and return a Promise with the Tasks from the server
- make the `TodoList` send a request upon componentDidMount to use that service and send a request to the server.
- the tasks returned from the server should be saved in the state
- you should iterate on the state array and print the list of todo items
