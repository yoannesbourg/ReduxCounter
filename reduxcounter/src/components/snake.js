import React from 'react'
import '../app.css'
import {useSelector,  useDispatch} from 'react-redux'

const Snake = () => {
    const counter = useSelector(state => state.x)
    const counterPixels = counter + 'px'
    return (
        <div 
            className="snake"
            style={{ 'left' : counterPixels }}
        ></div>
    )
}

export default Snake 

