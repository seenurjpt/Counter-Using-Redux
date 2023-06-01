import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from "./actions/index"
import Footer from './Footer'
const App = () => {
  const myState = useSelector((state)=>state.changeNumbers)
  const dispatch = useDispatch()
  return (
    <div>
    <div className='container'>
      <h1>Number Increment / Decrement</h1>
      <h2>Using React Redux</h2>
      <div className="box">
        <button onClick={()=>dispatch(decNumber())}><h3>-</h3></button>
        <div id="counter">
        <h3>{myState}</h3>
        </div>
        
        <button onClick={()=>dispatch(incNumber())}><h3>+</h3></button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App
