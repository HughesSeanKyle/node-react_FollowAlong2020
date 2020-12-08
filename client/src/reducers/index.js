import { combineReducers } from 'redux';
import authReducer from './authReducer';

//1
export default combineReducers({
    auth: authReducer
});


/*
// The index.js file in any direcory can be thought of as
    // an index for a book where each book represents a 
        // new folder/directory
        // All important import statements for directory will be here
            // same like the index.js representing the server.

// note 1
Whatever keys provided to this object will represent the keys that exists inside of state object. 

This index.js also handles all of the redux setup.

What does an action do in Redux?

An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

What does reducers do in Redux?

A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change.

Redux expects that the action creator will *immediately* return an action. 
    The entire purpose of redux-thunk is to break above rule

If the dispatch function is called with an action the action will be automatically forwarded on to the different reducers inside the application. Redux-thunk - giving direct access to the dispatch function allowing for manual dispatch of an action at any point in time that we wish. 


*/  