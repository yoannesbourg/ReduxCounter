import { initialState } from '../initialState/initialstate'

export const counterX = (state = initialState.x, action) => {
    switch(action.type){
        case 'GO_RIGHT':
            return state + 10
        
        case 'GO_LEFT':
            return state - 10

        default: 
            return state;
    }
}

export const counterY = (state = initialState.y, action) => {
    switch(action.type){
        case 'GO_DOWN':
            return state + 10
        
        case 'GO_UP':
            return state - 10

        default: 
            return state;
    }
}



