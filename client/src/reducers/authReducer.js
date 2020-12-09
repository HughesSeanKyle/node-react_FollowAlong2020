export default function (state = {}, action) {
    console.log(action);
    switch (action.type) {
        default:
            return state; 
    }
}

/*
First Arg - No initial state hence state equal to empty object. 
Second Arg - Responsible for changing state. 
*/