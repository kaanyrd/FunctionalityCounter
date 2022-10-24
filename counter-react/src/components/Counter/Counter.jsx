import React from 'react'
import { useState } from 'react'
// import { useContext } from 'react'
// import ThemeContext from '../../context/ThemeContext';



function Counter() {

    // const { theme, setTheme } = useContext(ThemeContext)
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

            {/* <button onClick={() => setTheme(`${theme === "light" ? "dark" : "light"}`)}>Change Theme</button> */}
            {/* {console.log({ theme })} */}

            <h1>Welcome to Functionality Counter</h1>
            <br />


            <h1 id='deneme'>Counter: {counter}</h1>
            <button id='decrease' onClick={decreaseCounter}>Decrease(-{amount})</button>
            <button id='increase' onClick={increaseCounter}>Increase(+{amount})</button>
            <br />

            <button id='reset' onClick={() => `${setCounter(0)} && ${setAmount(0)}`}>Reset</button>
            <br />



            <button id='numbers'
             onClick={() => setAmount(0)}>-+0</button>
            <button id='numbers'
             onClick={() => setAmount(1)}>-+1</button>
            <button id='numbers'
             onClick={() => setAmount(2)}>-+2</button>
            <button id='numbers'
             onClick={() => setAmount(3)}>-+3</button>
            <button id='numbers'
             onClick={() => setAmount(4)}>-+4</button>
            <button id='numbers'
             onClick={() => setAmount(5)}>-+5</button>
            <button id='numbers'
             onClick={() => setAmount(6)}>-+6</button>
            <button id='numbers'
             onClick={() => setAmount(7)}>-+7</button>
            <button id='numbers'
             onClick={() => setAmount(8)}>-+8</button>
            <button id='numbers'
             onClick={() => setAmount(9)}>-+9</button>
            <button id='numbers'
             onClick={() => setAmount(10)}>-+10</button>
            <br />


            <h2>Amount: -+{amount}</h2>
        </div>
    )
}

export default Counter
