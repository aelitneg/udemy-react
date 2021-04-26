# Modern React with Redux [2020 Update]

## Semantic UI

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
  integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
  crossorigin="anonymous"
/>
```

## Get Help

- Udemy Q&A
- @ste_grider
- ste.grider@gmail.com
- [Course Diagrams](https://github.com/StephenGrider/redux-code)

## Minimal App Explanation

App Component is a fucntion which returns JSX

- React: knows how to work with components, called a 'reconciler'
- ReactDOM: knows how to take instructions on what we wantt o show and turn it into HTML, called a 'renderer'

- useState
  - function for working with React's state system
  - Used to keep track of data that changes over time
  - Used to update the HTML on the screen

## React Component

- `function` or `Class`
- Produces HTML
- Handles feedback from user
- Template is in JSX
- Feedback handled with event handlers

## JSX

- Babel compiles JSX to JavaScript
  - ```javascript
    const App = () => {
      return <div>Hello World!</div>;
    };
    ```
  - ```javascript
    const App = () => {
      return /*#__PURE__*/ React.createElement('div', null, 'Hello World!');
    };
    ```
  - Dialect of JavaScript

## JSX vs HTML

- Inline styling uses object syntax
  - camelCase in JSX
  - Double quotes for JSX properties
  - Single quotes for string values inside properties
- Class uses different syntax
  - 'className`replaces`class` (avoid keyword collision)
- JSX can reference JavaScript variables

  - Curly Braces Reference Limitations
    - `Objects are not valid as a React child`
  - Forbidden keywords (check the console)

  ## Lifecycle Methods

  - Called automatically by React if defined in the class
  - Methods

    - constructor
      - state initialization
      - one time setup
    - render
      - return JSX
    - componentDidMount
      - one time async data requests
    - componentDidUpdate
      - called when state changes, props update
    - componentWillUnmount
      - cleanup code
    - shouldComponentUpdate
    - getDerivedStateFromProps
    - getSnapshotBeforeUpdate

  - State can be defined as a top level class property:

  ```javascript class X extends React.Component {
          state = { prop: 'value' }
      }
  ```

  - setState will re-render children

- Functional components can have MyComponent.defaultProps defined
  - ```javascript
    MyComponent.defaultProps = { prop: 'value' };
    ```
  - Avoid conditionals in render method (see `./seasons.index`) with `renderContent()` helper function

## Refs

- Give access to the DOM elements directly
- Create in the constructor
- Instance varaible for class
- Passed to JSX elements as a prop

## Hooks

- For functional components
- useState, useEffect, useRef
- Tools to write reusable code
- Primitive Hooks (included with react)
- Can create custom hooks
  - usually wrappers around other primitive hooks
- `[state, setter] = useState(defaultValue)`
  - default does not get applied on re-render
  - multiple pieces of state require multiple calls to `useState()`
- useEffect (Lifecycle Methods)
  - - `useEffect(() => {//callback}, [])`
    - runs on mount only, after component is rendered
  - `useEffect(() => {//callback})`
    - runs on every render
  - `useEffect(() => {//callback}, [variable])`
    - runs on mount and when variable is changed
    - cannot be marked `async`
    - ```javascript
      useEffect(() => {
          // invoked when useEffect() is called
          return () => {
              // invoked before subsequent calls to useEffect()
          };
      };
      ```
    - cleanup function called when element is being removed from DOM as well
- `useRef()` When elements removed from dom, refs set to null

## dangerouslySetInnerHTML

- `<tag dangerouslySetInnerHTML={{__html: 'html string'}}>`

## Custom Hooks

- Good way to make reusable code in React, besides components
- Created by extracting hook related code out of function component
  - Components make JSX reusable
  - Custom Hooks make Hook logic reusable
- Have one (1) single purpose

## Redux

- action creator is a function which returns an action (plain JS object)
- action is an object, which has a `type` and `payload` properties
  - describes some change to be made to the data in the application
- dispatch takes actions, copies the object, and sends to reducers
- reducer is a function which takes takes an action and a slice of state and processes the action
- state is shared data
- Reducers
  - Must return _anything_ but undefined
  - Must not reach outside of its function to determine state / values
  - Must not mutate its input state argument

## Redux-Thunk

- Action creators _can_ return an object `{ type, payload }`
- Action creators _can_ return a function, which will get invoked
  - Receives `dispatch()` and `getState()` as arguments
- Allows for manually calling `dispatch()` after an async operation

**mapStateToProps(state, ownProps)**

## React Router

- Usually do not want to install `react-router`, this is just the core package
- `react-router-dom` is the package for browser based projects
- `react-router-redux` is discouraged
- multiple `Route` components can match a given route
- Path matching 
  - checks if path **exists** in the extracted path string
  - `exact` matches the **entire** path
- Use `<Router-Link>` component, not `<a>` tags 
- Routers
  - BrowserRouter uses everything after TLD (top level domain) 
  - Hash router adds `/#/` and matches everything after 
  - MemoryRouter maintains internal state 
- BrowserRouter has issues with deployment 
  - Need to configure all routes on the server to return index.html

