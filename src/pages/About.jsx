import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1></div>
  )
}

export default About