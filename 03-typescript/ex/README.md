# Exercise Typescript

Before starting to work on this exercise, follow the these steps:

In the folder of the exercise (`ex`) run the following commands in the `terminal`:

```bash
> npm install
> npx tsc -w
```

## Exercise Array.prototype.map

- create an array of strings and fill that array with different words.
- Using `Array.prototype.map` create another array of numbers, which contains the string length of every word in the words array.
- Iterate on the number array and print to the console each item in that array

## Exercise modules

- In this exercise you will have to create 2 files: `a.ts`, `b.ts`
- file `a.ts` exports a function `printObj` which gets an `Object` as an argument.  
That `Object` contains keys of type `string` and value of type `string`  
The `printObj` will iterate on the keys of the `Object` and print to the console all the keys and the values in the `Object`
- file `b.ts` will import the function created in file `a.ts` and call the `printObj` function with some object to print.

## Exercise Promise

In this exercise you will send a request to grab data from a server.  
you will send a simple `GET` request to the url: `https://nztodo.herokuapp.com/api/tasks/?format=json`.  
you will send the request using the library `axios` which you will need to install using the command:

```bash
> npm install axios
```

### Promise

using `Promise.prototype.then` use the `axios.get` to send a request to the server url: `https://nztodo.herokuapp.com/api/tasks/?format=json`, and print the `response.data` you got from the server to the console.

### async-await

using `async-await` create an `async function` and use `await axios.get('...')` to send the request to the server and print the `response.data` to the console.

