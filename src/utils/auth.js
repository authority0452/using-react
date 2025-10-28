import { setSession, getSession, clearSession, SESSION_KEY } from './storage';

export async function mockLogin({ email, password }){
  await new Promise(r=>setTimeout(r,300));
  if(email === 'tester@example.com' && password === 'Password123!'){
    const token = { token: 'fake-jwt', user: { email }, issuedAt: Date.now() };
    setSession(token);
    return token;
  }
  const e = new Error('Invalid credentials');
  e.status = 401;
  throw e;
}

export function requireAuth(){ return getSession(); }
export function logout(){ clearSession(); }
