import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { validateTicket } from '../utils/validators';

const STORAGE_KEY = 'tickets';

function load(){ const v = localStorage.getItem(STORAGE_KEY); return v?JSON.parse(v):[]; }
function save(t){ localStorage.setItem(STORAGE_KEY, JSON.stringify(t)); }

export default function Tickets(){
  const [tickets,setTickets] = useState([]);
  const [form, setForm] = useState({ title:'', status:'open', description:'', priority:'medium' });
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(()=> setTickets(load()), []);

  function handleChange(k,v){ setForm(s=>({...s,[k]:v})); }

  function onCreate(e){
    e.preventDefault();
    const errs = validateTicket(form);
    setErrors(errs);
    if(Object.keys(errs).length) return;
    const newTicket = {...form, id:uuid(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()};
    const updated = [newTicket, ...tickets];
    setTickets(updated); save(updated);
    setForm({ title:'', status:'open', description:'', priority:'medium' });
    setMsg('Ticket created');
    setTimeout(()=>setMsg(''),2000);
  }

  function onEdit(ticket){
    setEditId(ticket.id);
    setForm({...ticket});
  }
  function onUpdate(e){
    e.preventDefault();
    const errs = validateTicket(form);
    setErrors(errs);
    if(Object.keys(errs).length) return;
    const updated = tickets.map(t=> t.id===editId ? {...t,...form, updatedAt: new Date().toISOString()} : t);
    setTickets(updated); save(updated);
    setEditId(null); setForm({ title:'', status:'open', description:'', priority:'medium' });
    setMsg('Ticket updated'); setTimeout(()=>setMsg(''),2000);
  }
  function onDelete(id){
    if(!confirm('Delete this ticket?')) return;
    const updated = tickets.filter(t=>t.id!==id); setTickets(updated); save(updated);
    setMsg('Ticket deleted'); setTimeout(()=>setMsg(''),2000);
  }

  return (
    <div>
      <h2>Tickets</h2>
      <div style={{display:'flex',gap:16,alignItems:'flex-start',flexWrap:'wrap'}}>
        <div style={{flex:'1 1 360px'}}>
          <div className="card">
            <h3>{editId? 'Edit Ticket' : 'Create Ticket'}</h3>
            <form onSubmit={editId?onUpdate:onCreate}>
              <div className="form-row">
                <label>Title</label>
                <input className="input" value={form.title} onChange={e=>handleChange('title', e.target.value)} />
                {errors.title && <div style={{color:'red'}}>{errors.title}</div>}
              </div>
              <div className="form-row">
                <label>Status</label>
                <select className="input" value={form.status} onChange={e=>handleChange('status', e.target.value)}>
                  <option value="open">Open</option>
                  <option value="in_progress">In progress</option>
                  <option value="closed">Closed</option>
                </select>
                {errors.status && <div style={{color:'red'}}>{errors.status}</div>}
              </div>
              <div className="form-row">
                <label>Priority</label>
                <select className="input" value={form.priority} onChange={e=>handleChange('priority', e.target.value)}>
                  <option>low</option><option>medium</option><option>high</option>
                </select>
              </div>
              <div className="form-row">
                <label>Description</label>
                <textarea className="input" value={form.description} onChange={e=>handleChange('description', e.target.value)} />
              </div>
              <div style={{display:'flex',gap:8}}>
                <button className="button" type="submit">{editId? 'Update' : 'Create'}</button>
                {editId && <button type="button" className="button" onClick={()=>{setEditId(null); setForm({title:'',status:'open',description:'',priority:'medium'});}}>Cancel</button>}
              </div>
            </form>
          </div>
        </div>

        <div style={{flex:'2 1 600px'}}>
          <div className="card">
            <h3>All tickets</h3>
            <div className="ticket-list">
              {tickets.length===0 && <div>No tickets yet.</div>}
              {tickets.map(t=>(
                <div key={t.id} className="ticket" aria-live="polite">
                  <div>
                    <strong>{t.title}</strong>
                    <div style={{color:'#6b7280'}}>{t.description}</div>
                    <div style={{fontSize:12,color:'#9ca3af'}}>Created {new Date(t.createdAt).toLocaleString()}</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div className="status" style={{background: t.status==='open'? 'var(--status-open)' : t.status==='in_progress' ? 'var(--status-progress)' : 'var(--status-closed)', color:'#fff'}}>{t.status}</div>
                    <div style={{marginTop:8,display:'flex',flexDirection:'column',gap:6}}>
                      <button className="button" onClick={()=>onEdit(t)}>Edit</button>
                      <button className="button" onClick={()=>onDelete(t.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {msg && <div className="toast" role="status">{msg}</div>}
    </div>
  );
}
