import { PublicRoutes } from '@/constant-definitions'
import React from 'react'
import { Navigate } from 'react-router-dom'

const GuardRoute = () => {

  return (
    <div>
        <Navigate replace to={PublicRoutes} />
    </div>
  )
}

export default GuardRoute
