# Modern React with Redux [2020 Update]

## Get Help

-   Udemy Q&A
-   @ste_grider
-   ste.grider@gmail.com
-   [Course Diagrams](https://github.com/StephenGrider/redux-code)

## Minimal App Explanation

App Component is a fucntion which returns JSX

-   React: knows how to work with components, called a 'reconciler'
-   ReactDOM: knows how to take instructions on what we wantt o show and turn it into HTML, called a 'renderer'

-   useState
    -   function for working with React's state system
    -   Used to keep track of data that changes over time
    -   Used to update the HTML on the screen

## React Component

-   `function` or `Class`
-   Produces HTML
-   Handles feedback from user
-   Template is in JSX
-   Feedback handled with event handlers

## JSX

-   Babel compiles JSX to JavaScript
    -   ```javascript
        const App = () => {
            return <div>Hello World!</div>;
        };
        ```
    -   ```javascript
        const App = () => {
            return /*#__PURE__*/ React.createElement(
                "div",
                null,
                "Hello World!"
            );
        };
        ```
    -   Dialect of JavaScript

## JSX vs HTML

-   Inline styling uses object syntax
    -   camelCase in JSX
    -   Double quotes for JSX properties
    -   Single quotes for string values inside properties
-   Class uses different syntax
    -   'className`replaces`class` (avoid keyword collision)
-   JSX can reference JavaScript variables
    -   Curly Braces Reference Limitations
        -   `Objects are not valid as a React child`
    - Forbidden keywords (check the console) 


