export const SESSION_KEY = 'ticketapp_session';
export function setSession(obj){ localStorage.setItem(SESSION_KEY, JSON.stringify(obj)); }
export function getSession(){ const v = localStorage.getItem(SESSION_KEY); return v?JSON.parse(v):null; }
export function clearSession(){ localStorage.removeItem(SESSION_KEY); }
