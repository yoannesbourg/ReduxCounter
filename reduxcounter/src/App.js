import React from 'react'
import './app.css'
import {useSelector,  useDispatch} from 'react-redux'
import {increment, decrement, moveRight} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state=> state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="board">
          <div className="snake"></div>
      </div>
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(moveRight())}>move right</button>

      {isLogged ? <h3>Valuable information I shouldn't see </h3> : ''}
    </div>
  );
}

export default App;
