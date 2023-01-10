import React from 'react'

const Footer = () => {
  return (
    <div className='px-24'>
      <div className="footer_cont h-full border-t-[3px] border-[#F4551E] py-12 flex">
        <div className="left bg-gray-400 h-full flex-1">
          <h1>This is the Left section of footer</h1>
        </div>
        <div className="right bg-slate-300 h-full flex-1">
          <h1>This is the Right section of footer</h1>
        </div>
      </div>
      <span className="text-center">&copy; Copyright 2023 Cyrus Nderitu</span>
    </div>
  )
}

export default Footer
