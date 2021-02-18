import React from 'react'
import './app.css'
import {useSelector,  useDispatch} from 'react-redux'
import {increment, decrement} from './actions'
import Board from './components/board'

function App() {
  const counter = useSelector(state => state.x)
  const dispatch = useDispatch()
 

  return (
    <div className="App">
      <Board />
      
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  );
}

export default App;
