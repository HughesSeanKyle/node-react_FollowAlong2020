import { FETCH_USER } from './../actions/types';

export default function (state = null, action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; // 1
        default:
            return state; 
    }
}

/*
First Arg - No initial state hence state equal to empty object. 
Second Arg - Responsible for changing state. 

If an action comes in with the name FETCH_USER then run code in case

when application first starts up default state will be null. Therefore cannot yet confirm if user is logged in. 

Falsey values
the number 0
the BigInt 0n
the keyword null
the keyword undefined
the boolean false
the number NaN
the empty string "" (equivalent to '' or ``)

If logged out the payload will return an empty string. 

//1 Line is saying if return value is === '' || false return false. 
*/