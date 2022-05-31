import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition } from '../JS/actions/addition'

const Addition = () => {

    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)

    const dispatch = useDispatch()
    const sum = useSelector(state => state.additionReducer.sum)

    return (
        <div>
            <input type='text' onChange={(e) => setVal1(e.target.value)} />
            <input type='text' onChange={(e) => setVal2(e.target.value)} />
            {/* <button onClick={() => dispatch(addition({ val1: Number(val1), val2: +val2 }))}>Add</button> */}
            <button onClick={() => dispatch(addition(Number(val1), +val2 ))}>Add</button>
            <p>{`The sum is : ${sum}`}</p>
        </div>
    )
}

export default Addition