import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function loadTickets(){ const v = localStorage.getItem('tickets'); return v?JSON.parse(v):[]; }

export default function Dashboard(){
  const [tickets,setTickets] = useState([]);
  useEffect(()=>{ try{ setTickets(loadTickets()); }catch(e){console.error(e)} },[]);
  const totals = tickets.length;
  const open = tickets.filter(t=>t.status==='open').length;
  const closed = tickets.filter(t=>t.status==='closed').length;
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="cards">
        <div className="card"><h3>Total</h3><p>{totals}</p></div>
        <div className="card"><h3>Open</h3><p>{open}</p></div>
        <div className="card"><h3>Resolved</h3><p>{closed}</p></div>
      </div>
      <div style={{marginTop:16}}>
        <Link to="/tickets" className="button">Go to tickets</Link>
      </div>
    </div>
  );
}
