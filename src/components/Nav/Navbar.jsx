import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import TranslateIcon from '@mui/icons-material/Translate';
import Inquiry from "../../assets/inquiry icon.png";
import Search from "../../assets/Search icon.png"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <div className='logoBox'>
          <img src={logo} className='logoImg' />
        </div>
        <div className='text'>
          <p className='name'>Vyas And Sons</p>
          <p className='tagline'>Murti Art</p>
        </div>
      </div>

      <ul className="main-nav">
        <li className="nav-item active">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact Us</li>
      </ul>

      <div className='icons'>
        <TranslateIcon className='translate'/>
        <img src={Inquiry} className='user'/>
        <input placeholder='Search Here' className='searchBar'></input>
      </div>
    </nav>
  )
}

export default Navbar
