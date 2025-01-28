import React, { useEffect } from 'react'
import "./App.css"
import axios from "axios"
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateForm from './CreatePostForm'

const App = () => {

  return (
  <div>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Create' element={<CreateForm/>}/>
    </Routes>
  </div>
  )
}

export default App