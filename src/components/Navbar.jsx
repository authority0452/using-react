import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { getSession, clearSession } from '../utils/storage';

export default function Navbar(){
  const nav = useNavigate();
  const session = getSession();
  function onLogout(){
    clearSession();
    nav('/auth/login');
  }
  return (
    <nav>
      <div className="container">
        <div className="logo">TicketApp</div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link to="/">Home</Link>
          {session ? <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/tickets">Tickets</Link>
            <button className="button" onClick={onLogout}>Logout</button>
          </> : <>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup">Get Started</Link>
          </>}
        </div>
      </div>
    </nav>
  );
}
