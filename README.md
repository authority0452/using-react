# 🎟️ Ticket Management App — Multi-Framework Implementation

This project is a complete **Ticket Management Web Application** implemented using **three frontend frameworks**:
- **React**


Each version follows the same design and functionality:
- Landing Page with wavy hero and decorative elements
- Secure simulated authentication (Login & Signup)
- Dashboard with ticket summaries
- Full CRUD ticket management
- Consistent layout, max-width 1440px, and responsive behavior

---


> ⚠️ Ensure each repo is set to **“Anyone with the link can view”** (GitHub → Repo Settings → Manage Access).

---

## 🖼 Shared Assets
All implementations use the same assets stored in the `/assets` folder:
- `/assets/hero-wave.svg` → used for hero section background  
- `/assets/decorative-circle.svg` → used for page decorations  
- `/assets/logo.svg` → optional logo icon

---

## ⚙️ Tech Overview
All versions share these core concepts:
- Authentication simulated via `localStorage` with key: `ticketapp_session`
- CRUD operations managed locally (or via mock JSON server)
- Routing protected using guard logic
- Responsive layout and consistent color rules:
  - **open** → green
  - **in_progress** → amber
  - **closed** → gray

---

## 🧭 Folder Structure
