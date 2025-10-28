export function validateTicket({ title, status, description }){
  const errors = {};
  if(!title || !title.trim()) errors.title = 'Title is required.';
  if(!status || !['open','in_progress','closed'].includes(status)) errors.status = 'Status must be open, in_progress, or closed.';
  if(description && description.length > 1000) errors.description = 'Description too long (max 1000 chars).';
  return errors;
}
