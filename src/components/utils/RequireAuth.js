import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { GetUserId } from '../features/users/allUserSlice'

const RequireAuth = () => {
    const {userInfo} = useSelector((state) => state.user)
    const user = useSelector((state) => GetUserId(state, userInfo.id))
    
    return (
        user[0].UserRight ==="ADMIN"?
        <Outlet />
        : <Navigate to="/" replace />
    )
}

export default RequireAuth