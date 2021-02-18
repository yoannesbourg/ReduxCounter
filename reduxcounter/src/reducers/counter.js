const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'increment':
            return state + 1
        
        case 'decrement':
            return state - 1

        case 'moveRight':
            console.log('left property +10px')

        default: 
            return state;
    }
}


export default counterReducer