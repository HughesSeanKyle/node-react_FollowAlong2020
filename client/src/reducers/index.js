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
*/  