import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(){
  return (
    <section>
      <div className="hero container" aria-hidden={false}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24}}>
          <div style={{maxWidth:620}}>
            <h1 style={{fontSize:34}}>TicketApp — Manage issues, fast.</h1>
            <p>Lightweight ticket management built for demo purposes — works offline with localStorage.</p>
            <div style={{marginTop:18}}>
              <Link to="/auth/login" className="button">Login</Link>
              <Link to="/auth/signup" className="button" style={{marginLeft:8}}>Get Started</Link>
            </div>
          </div>
          <div style={{width:240,height:160,background:'#fff',borderRadius:12,boxShadow:'0 10px 30px rgba(0,0,0,0.08)'}} aria-hidden>
            <div style={{padding:18}}>Feature box</div>
          </div>
        </div>

        <div className="decor dec1" aria-hidden></div>
        <div className="decor dec2" aria-hidden></div>

        {/* wave SVG at bottom */}
        <svg viewBox="0 0 1440 80" style={{position:'absolute',left:0,bottom:-1,width:'100%'}} preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C360,80 1080,0 1440,40 L1440 80 L0 80 Z" fill="#fff"></path>
        </svg>
      </div>

      <div className="cards container">
        <div className="card"><h3>Total tickets</h3><p id="total-count">—</p></div>
        <div className="card"><h3>Open</h3><p id="open-count">—</p></div>
        <div className="card"><h3>Resolved</h3><p id="closed-count">—</p></div>
      </div>
    </section>
  );
}
