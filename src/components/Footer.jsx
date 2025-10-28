import React from "react";
export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <small>© {new Date().getFullYear()} TicketApp — Built with React. Accessible & responsive.</small>
      </div>
    </footer>
  );
}
