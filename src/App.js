import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dash from './components/Dash'
import Add from './components/Add'
import List from './components/List'
import TodoContext from './context/TodoContext'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  const [allD, setAllD] = useState([])
  return (
    <>
      <BrowserRouter>
        <TodoContext.Provider value={ { allD, setAllD } }>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Dash /> } />
            <Route path='/add' element={ <Add /> } />
            <Route path='/list' element={ <List /> } />
          </Routes>

        </TodoContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App