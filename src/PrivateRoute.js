import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Outlet } from 'react-router'

const cookies = new Cookies()

export default function PrivateRoute() {
    const users = cookies.get('users')

    return users ? <Outlet /> : <Navigate to='/' />;
}