import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from '../JS/actions/CounterAction'

const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)

    return (
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <h3>{count}</h3>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter