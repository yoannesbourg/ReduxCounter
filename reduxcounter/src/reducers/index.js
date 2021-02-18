import counterReducer from './counter'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    x: counterReducer,
})

export default allReducers