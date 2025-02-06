import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import About from './About'

export default function CustomUserCall() {
    const {userId}=useParams()
    // const param=useParams()
  return (
    <div>
      user: {userId}
     
      {/* user: {param.userId} */}
    </div>
  )
}
