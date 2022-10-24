import React from 'react'
import Counter from './Counter'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import "./counter.css"


function Container() {


    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className={theme}>
    <h1>
    <button id='theme' onClick={()=> setTheme(`${theme === "light" ? "dark" : "light"}`)}>Change Theme</button>
    {console.log(theme)}
    </h1>
    
    <Counter/>
    </div>
  )
}

export default Container
