# Testing

- unit test

## create-react-app

```
npx create-react-app ...
```

the project is created with test environment.

Test file is a file that ends with `*.test.tsx`

## run the tests

```bash
> npm test
```

## run the tests with a debugger

1. go to the `Run and Debug` - play button on the left side of the screen
2. press the link `create a launch.json file`
3. debug with jest
4. the debug combo box is filled with the item you placed in `launch.json` press it to trigger the tests in debug mode

## Testing Framework - JEST

library
run the tests
write the tests
write expect

expose global functions that you can use to write the tests

## @testing-library/react - RTL

toolbox to render react components and test them

### screen

helps you select elements that are rendered in the screen

```
screen.getBy...
```

return `HtmlElement` or throw exception

```
screen.queryBy...
```

return `HtmlElement` or `null`
