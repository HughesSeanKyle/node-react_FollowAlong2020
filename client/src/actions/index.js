import axios from 'axios';
import { FETCH_USER } from './types';

//1
const fetchUser = () => {
    return function (dispatch) {
        axios.get('./api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }))
    };
}; 

/*
The purpose of this middleware the purpose of redux-thunk is to inspect what ever value we return from this action creator if redux thunk sees that we return a function instead of a normal action redux thunk will automatically call this function and pass in that dispatch function as an argument.

Ideally this function should be dispatched after the get request has been fullfilled. 

Summary of fetchUser function

    When ever action creator called (fetchUser) it will return a function. Redux-thunk will see that we returned a function and it will automatically call it with the dispatch. We then make our request, we wait till repsonse received from the API. Once we have response, only then will we dispatch the action. 
*/