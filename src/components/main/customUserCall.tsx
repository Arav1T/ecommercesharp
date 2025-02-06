import React from 'react'
import { useParams } from 'react-router-dom'

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
