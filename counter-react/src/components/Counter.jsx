import React from 'react'
import { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)
    const [amount, setAmount] = useState(0)


    const decreaseCounter = () => {
        return (
            setCounter(counter - amount)
        )
    }
    const increaseCounter = () => {
        return (
            setCounter(counter + amount)
        )
    }
    return (
        <div>
            {/* <h1>Amount: {amount[1]}</h1> */}
            <h1>Welcome to Functionality Counter</h1>
            <br />
            <h1>Counter: {counter}</h1>
            <button onClick={decreaseCounter}>Decrease(-{amount})</button>
            <button onClick={increaseCounter}>Increase(+{amount})</button>
            <br />
            <button onClick={() => `${setCounter(0)} && ${setAmount(0)}`}>Reset</button>
            <br />
            <button onClick={() => setAmount(0)}>-+0</button>
            <button onClick={() => setAmount(1)}>-+1</button>
            <button onClick={() => setAmount(2)}>-+2</button>
            <button onClick={() => setAmount(3)}>-+3</button>
            <button onClick={() => setAmount(4)}>-+4</button>
            <button onClick={() => setAmount(5)}>-+5</button>
            <button onClick={() => setAmount(6)}>-+6</button>
            <button onClick={() => setAmount(7)}>-+7</button>
            <button onClick={() => setAmount(8)}>-+8</button>
            <button onClick={() => setAmount(9)}>-+9</button>
            <button onClick={() => setAmount(10)}>-+10</button>
            <br />
            <h2>Amount: -+{amount}</h2>
        </div>
    )
}

export default Counter
