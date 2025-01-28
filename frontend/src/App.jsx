import React, { useEffect } from 'react'
import "./App.css"
import axios from "axios"

const App = () => {
useEffect(()=>{
  try {
    let response = axios.get("https://testdb-vlco.onrender.com/")
    .then((response)=>{
      console.log(response.data)
    })
  } catch (error) {
    
  }
})
  return (
    <div>App</div>
  )
}

export default App