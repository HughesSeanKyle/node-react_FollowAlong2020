import 'materialize-css/dist/css/materialize.min.css'; // 3 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Create new instance of redux store //1 
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Set up provider at top-level/parent component //2
    // This links redux to react.
ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY)
console.log('Environment is', process.env.NODE_ENV);








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

note //3
When importing css it is important to add the css extension. When the extension is not added webpack will assume that it is javascript.

No need to provide relative path ('./') as webpack will automatically assume you are trying to import an npm module.
    When CSS is imported like this we do not need to assign it to a variable as it will not be used in this way. 


Why does redux need thunk?
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/