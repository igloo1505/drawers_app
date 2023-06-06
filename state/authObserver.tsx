"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from './slices/auth'


interface AuthObserverProps {
    authenticated: boolean
}


const AuthObserver = ({ authenticated }: AuthObserverProps) => {
    const dispatch = useDispatch()
    dispatch(setAuthenticated(authenticated))
    return null
}



export default AuthObserver;
