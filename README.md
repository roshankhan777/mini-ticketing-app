# Mini Ticketing App

A simple React application for creating, viewing, and searching support tickets.

# Features
- **Create Ticket Form**: Add title, description, and priority.
- **Ticket List View**: Displays all submitted tickets with auto-update.
- **Search Bar**: Filters tickets by keyword in title or description.
- **Ticket Counter**: Shows the number of open tickets.
- **Reusable Components**: Form, List, Item, Search, Counter.

# Tech Stack
- React (Vite)
- JavaScript (ES6+)
- Material UI

# Folder Structure
src/
App.jsx
main.jsx
index.css
components/
TicketForm.jsx
TicketList.jsx
TicketItem.jsx
SearchBar.jsx
TicketCounter.jsx


# Installation & Setup
```bash
# 1. Clone the repo
git clone https://github.com/roshankhan777/mini-ticketing-app.git
cd mini-ticketing-app

# 2. Install dependencies
npm install
npm install @mui/material @emotion/react @emotion/styled

# 3. Run the app
npm run dev
