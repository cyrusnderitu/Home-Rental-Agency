import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo 1.png'
import '../Navbar/styles.css'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleClick = (tab) => {
        setActiveTab(tab);
        console.log("Active tab is: ",activeTab)
    }
return (
    <div className='h-[80px] flex border-b-2 border-gray-300'>
        <nav className='flex items-center'>
            <div className="logo mr-64">
                <img src={Logo} alt="Logo" className='h-[40px]'/>
            </div>
            <div className="nav_list flex gap-x-8 text-white">
                <NavLink to={'/'} onClick={(e)=> e.preventDefault()}>
                    <a href="#" className={`relative ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>Home</a>
                </NavLink>
                <NavLink to={'/landloard'} onClick={(e)=> e.preventDefault()}>
                    <a href="#" className={`relative ${activeTab === 'landlord' ? 'active' : ''}`} onClick={() => handleClick('landlord')}>Landloard</a> 
                </NavLink>
                <NavLink to={'/tenants'} onClick={(e)=> e.preventDefault()}>
                    <a href="#" className={`relative ${activeTab === 'tenants' ? 'active' : ''}`} onClick={() => handleClick('tenants')}>Tenants</a>
                </NavLink>
                <NavLink to={'/contact'} onClick={(e)=> e.preventDefault()}>
                    <a href="#" className={`relative ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>Contact Us</a>
                </NavLink>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar
