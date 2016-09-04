# Learn-React-JS-Flux

React Innovation
	JSX
	Virtual DOM
	Isomorphic Render
	Unidirectional Flow

HTML should be a projection of app state, not a source of truth
Inline style can be good
Write deterministic componenet stylesheeet

Node js  + Browserify + react + react router + flux + gulp task runner

React
	Component Library
	Simple composition
	Utilize virtual DOM
	Can render on client and server

react 0.13.3
react Router 0.13.3
Flux 2.0.3

Jest testing react application

Inital State - getInitialState
default props - getDefaultProps

Lifecycle method
- componentWillMount - before render
- componentDidMount  - after render DOM exists
- componentWillReceiveProps - prop changed
- shouldComponentUpdate  -before render and when new props or state are being received
- componentWillUpdate
-componentDidUpdate  - after component update are flushed to the DOM -
- componentWillUnmount - immediately before component is removed from the DOM

PropTypes:{
 author:  object is required
 onsave: func is requried
 validate: func is required
 errors: object
hasErors: func is requried

}

mixins - for cross cutting concerns
Share code between multiple components

