import React from 'react'
import { BrowserRouter as Router, Link as LinkR } from 'react-router-dom'
// import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='nav container'>
        <Router>
          <LinkR to='/' className='nav-logo'>
            Ka • li • ngâ
          </LinkR>
        </Router>
      </div>
    </nav>
  )
}

export default Navbar
