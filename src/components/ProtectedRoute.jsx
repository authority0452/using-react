import React from 'react';
import { Navigate } from 'react-router-dom';
import { getSession } from '../utils/storage';

export default function ProtectedRoute({ children }){
  const sess = getSession();
  if(!sess) return <Navigate to="/auth/login" replace state={{ from: window.location.pathname }} />;
  return children;
}
