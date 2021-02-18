import { initialState } from '../initialState/initialstate'

export const counterX = (state = initialState.x, action) => {
    switch(action.type){
        case 'go_right':
            return state + 1
        
        case 'decrement':
            return state - 1

        default: 
            return state;
    }
}

export const counterY = (state = initialState.y, action) => {
    switch(action.type){
        case 'increment':
            return state + 1
        
        case 'decrement':
            return state - 1

        default: 
            return state;
    }
}



