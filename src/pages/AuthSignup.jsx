import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../utils/storage';

export default function Signup(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const nav = useNavigate();
  function onSubmit(e){
    e.preventDefault();
    // minimal signup — directly set session
    setSession({ token: 'fake-jwt', user:{ email } });
    nav('/dashboard');
  }
  return (
    <div style={{maxWidth:520,margin:'0 auto'}}>
      <h2>Sign up</h2>
      <form onSubmit={onSubmit}>
        <div className="form-row"><label>Email</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="form-row"><label>Password</label><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <button className="button" type="submit">Create account</button>
      </form>
    </div>
  );
}
