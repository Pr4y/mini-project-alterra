import React from 'react'
import { Navigate } from 'react-router-dom'

export default function LogOut() {
    localStorage.clear()
  return (
    <Navigate to={"/"}/>
  )
}
