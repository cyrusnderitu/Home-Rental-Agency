import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo 1.png'
const Navbar = () => {
  return (
    <div className='h-[80px] flex'>
        <nav className='flex items-center'>
            <div className="logo mr-48">
                <img src={Logo} alt="Logo" className='h-[40px]'/>
            </div>
            <div className="nav_list flex gap-x-8">
                <NavLink to={'/'}>
                    <a className='decoration-none'>Home</a> 
                </NavLink>
                <NavLink to={'/landloard'}>
                    <a className='decoration-none'>Landloard</a> 
                </NavLink>
                <NavLink to={'/tenants'}>
                    <a className='decoration-none'>Tenants</a> 
                </NavLink>
                <NavLink to={'/contact'}>
                    <a className='decoration-none'>Contact Us</a> 
                </NavLink>
            </div>
        </nav>
        <hr  className='text-white'/>
    </div>
  )
}

export default Navbar
