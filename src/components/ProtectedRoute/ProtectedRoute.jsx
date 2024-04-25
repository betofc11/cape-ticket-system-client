import React, { useContext } from 'react'
import AuthContext from '../../store/authContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/login" replace /> 
}

export default ProtectedRoute