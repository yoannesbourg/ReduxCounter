const loggedReduccer = (state = false, action) => {
    switch(action.type){
        case 'sign_in':
            return !state

        default: 
            return state;
    }
}

export default loggedReduccer