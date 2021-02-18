import React from 'react'
import './app.css'
import {useSelector,  useDispatch} from 'react-redux'
import {goRight, goLeft, goDown, goUp} from './actions'
import Board from './components/board'

function App() {
  const x = useSelector(state => state.x)
  const y = useSelector(state => state.y)
  const dispatch = useDispatch()
 

  return (
    <div className="App">
      <Board />
      
      <h1> X {x}</h1>
      <h1> Y {y}</h1>
      <div>
        <button onClick={() => dispatch(goUp())}>Up</button>
      </div>
      <div>
        <button onClick={() => dispatch(goLeft())}>Left</button>
        <button onClick={() => dispatch(goRight())}>Right</button>
      </div>
      <div>
        <button onClick={() => dispatch(goDown())}>Down</button>
      </div>
    </div>
  );
}

export default App;
