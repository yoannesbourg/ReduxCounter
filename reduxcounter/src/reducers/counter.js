import { initialState } from '../initialState/initialstate'

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'increment':
            return state.x + 1
        
        case 'decrement':
            return state.x - 1

        default: 
            return state.x;
    }
}


export default counterReducer