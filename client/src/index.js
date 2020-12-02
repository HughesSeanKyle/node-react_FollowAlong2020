import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

// Create new instance of redux store //1 
const store = createStore(() => [], {}, applyMiddleware());

// Set up provider at top-level/parent component //2
    // This links redux to react.
ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);

/*
A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change.

note //1 
First arg in createStore() is just a stand in function to get the store up and running - will be replaced soon

second arg - Most relevant when taking care of server side rendering, Starting/Initial state of application. Do not care much about setting up initial state therefore only empty object. 

third arg - will add reduc thunk 
    Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters

    Actions are the only source of information for the store as per Redux official documentation. It carries a payload of information from your application to store. As discussed earlier, actions are plain JavaScript object that must have a type attribute to indicate the type of action performed

note //2
The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.

The provider tag is a react component that knows how to read changes from the redux store anytime the redux store get some new state produced inside of it the provider will inform all of it's child components that some new state is available and will update all those different components with the new state. 

*/