import React from 'react'
import HeroBg from '../assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash (1).png'
import Navbar from '../components/Navbar'
import HeroForm from '../components/HeroForm'

const HomePage = () => {
  return (
    <div>
      <div className="hero h-screen relative bg-gradient-to-b from-cyan-400 to-blue-800">
        {/* <img src={HeroBg} alt="" className='absolute'/> */}
        <div className="hero_cont px-24">
          <Navbar />
          <div className="hero_data flex items-center mt-24 gap-x-16">
            <div className="hero_desc">
              <h1 className='text-[52px] leading-[70px] font-bold text-white w-[584px]'>The Most Affordable Place To Stay In The San Franciso Bay Area</h1>
            </div>
            <div className="hero_map">
              <div className='w-[408px] h-[449px] rounded-lg bg-slate-600 mb-4'>

              </div>
              <HeroForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
