import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import { Link } from 'react-router-dom'
const Home = () => {

    const [images, setimages] = useState([])

    useEffect(()=>{
        try {
          let response = axios.get("https://testdb-vlco.onrender.com/")
          .then((response)=>{
            setimages(response.data)
          })
        } catch (error) {
          console.log(error)
        }
      })

     
  return (
    <div className='container'>
        <Link to={`/create`} className='create'>+</Link>
   {images.map((elem , id)=>{
    return <div key={id} className="box">
    <img src={elem.image} alt="" />
    <h4>{elem.title}</h4>
    <h4>{elem.name}</h4>
  </div>
   })}
  </div>
  )
}

export default Home