import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/AuthLogin';
import Signup from './pages/AuthSignup';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/auth/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/tickets" element={<ProtectedRoute><Tickets/></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
