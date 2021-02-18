import React from 'react'
import '../app.css'
import {useSelector,  useDispatch} from 'react-redux'

const Snake = () => {
    const x = useSelector(state => state.x)
    const y = useSelector(state => state.y)

    const horizontalPixels = x + 'px'
    const verticalPixels = y + 'px'

    const styles = {
        left: horizontalPixels,
        top: verticalPixels
    }
    return (
        <div 
            className="snake"
            style={styles}
        ></div>
    )
}

export default Snake 

