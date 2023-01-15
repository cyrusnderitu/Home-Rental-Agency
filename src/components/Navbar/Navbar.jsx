import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo 1.png'
import '../Navbar/styles.css'
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home");

    const handleClick = (tab) => {
        setActiveTab(tab);
        console.log("Active tab is: ",activeTab)
    }
return (
    <div className='h-[80px] grid border-b-2 border-gray-300 mx-24'>
        <nav className='flex items-center justify-between'>
            <div className="logo">
                <img src={Logo} alt="Logo" className='h-[40px]'/>
            </div>
            <div className="nav_list text-white ">
                <div className='flex gap-x-8 sm:flex-col md:flex-row'>
                    <NavLink to={'/'} onClick={(e)=> e.preventDefault()}>
                        <a href="#" className={`md:relative ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>Home</a>
                    </NavLink>
                    <NavLink to={'/landloard'} onClick={(e)=> e.preventDefault()}>
                        <a href="#" className={`md:relative ${activeTab === 'landlord' ? 'active' : ''}`} onClick={() => handleClick('landlord')}>Landloard</a> 
                    </NavLink>
                    <NavLink to={'/tenants'} onClick={(e)=> e.preventDefault()}>
                        <a href="#" className={`md:relative ${activeTab === 'tenants' ? 'active' : ''}`} onClick={() => handleClick('tenants')}>Tenants</a>
                    </NavLink>
                    <NavLink to={'/contact'} onClick={(e)=> e.preventDefault()}>
                        <a href="#" className={`md:relative ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>Contact Us</a>
                    </NavLink>
                </div>
            </div>
            <div className="menu">
                <HiMenuAlt3  className='text-white text-3xl md:hidden sm:block'/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
