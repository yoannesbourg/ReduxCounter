import {counterX, counterY} from './counter'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    x: counterX,
    y: counterY
})

export default allReducers