import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increaseByAmount } from './Redux/counter'
import { useNavigate } from 'react-router-dom'


const Work = () => {

  const history = useNavigate();
  const [amount, setamount] = useState('1')
  const count = useSelector((state) => state.counter.value)
  console.log(useSelector((state)=> state.Todos.task));
  const dispatch = useDispatch();
  
  const gotodo = () =>{
    history('/todo');
  }
  
  console.log(count, 'countttt');

  const isString = (val) =>
  {
    return typeof val === 'number' && !isNaN(val)
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <h3> {count} </h3>
        <button onClick={() => dispatch(increment())}>
          Add
        </button>
        <button style={{ marginLeft: "10px" }} onClick={() => dispatch(decrement())}>
          Sub
        </button>
        <label> Add Amount </label>
        <input placeholder='Add' type='text' style={{ width: "20px" }} value={amount} onChange={(e) => setamount(e.target.value)}></input>
        <button style={{marginLeft: "10px"}} onClick={() => dispatch(increaseByAmount(parseInt(amount)))}>Add</button>
      </div>
      <button style={{marginLeft: "10px"}} onClick={gotodo}>
        Go to TODO!
      </button>
    </>
  )
}

export default Work