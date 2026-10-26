import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import AddBloodBank from './AddBloodBank.jsx'
import DisplayBloodBanks from './DisplayBloodBanks.jsx'

function NavBar() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <NavLink className="brand" to="/">BloodBank Portal</NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add Blood Bank</NavLink>
          <NavLink to="/display">View Records</NavLink>
        </nav>
      </header>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBloodBank />} />
          <Route path="/display" element={<DisplayBloodBanks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default NavBar