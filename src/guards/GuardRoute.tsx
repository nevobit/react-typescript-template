import { PublicRoutes } from '@/constant-definitions';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const GuardRoute = () => {

    const userInfo = null;


  return (
    <div>
        {userInfo? <Outlet /> : <Navigate replace to={PublicRoutes} />}
    </div>
  )
}

export default GuardRoute
