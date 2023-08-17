import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (<>
   <div>
    <h1>Hello! Welcom to your greeting App</h1>
   </div>
    <Link to="/greeting">Go to Greeting</Link>
  </>
  )
}

export default Home
