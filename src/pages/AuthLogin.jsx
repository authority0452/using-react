import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLogin } from '../utils/auth';

export default function Login(){
  const [email,setEmail] = useState('tester@example.com');
  const [password,setPassword] = useState('Password123!');
  const [error,setError] = useState('');
  const nav = useNavigate();

  async function onSubmit(e){
    e.preventDefault();
    setError('');
    try{
      await mockLogin({email,password});
      nav('/dashboard');
    }catch(err){
      setError('Invalid credentials. Try tester@example.com / Password123!');
    }
  }

  return (
    <div style={{maxWidth:520,margin:'0 auto'}}>
      <h2>Login</h2>
      <form onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <label>Email</label>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <div style={{color:'red',marginBottom:12}}>{error}</div>}
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}
