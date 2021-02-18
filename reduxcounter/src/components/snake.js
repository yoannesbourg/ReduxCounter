import React from 'react'
import '../app.css'
import {useSelector,  useDispatch} from 'react-redux'

const Snake = () => {
    const horizontalX = useSelector(state => state.x)
    const horizontalPixels = horizontalX + 'px'
    return (
        <div 
            className="snake"
            style={{ 'left' : horizontalPixels }}
        ></div>
    )
}

export default Snake 

