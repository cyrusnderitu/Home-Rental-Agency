import React from 'react'
import HeroBg from '../assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash (1).png'
import Navbar from '../components/Navbar'
import HeroForm from '../components/HeroForm'
import Map from '../assets/map.png'
import Intro from '../components/Intro'
import Properties from '../components/Properties'

const HomePage = () => {
  return (
    <div>
      <div className="hero h-screen relative">
        <div className='shade absolute bg-black w-full h-full'>
          <div className="hero_cont px-24">
            <Navbar />
            <div className="hero_data flex items-center mt-18 max-xl:mt-24 gap-x-16">
              <div className="hero_desc">
                <h1 className='text-[52px] leading-[70px] font-bold text-white w-[584px]'>The Most Affordable Place To Stay In The San Franciso Bay Area</h1>
              </div>
              <div className="hero_map">
                <img src={Map} alt="Map" className='w-[408px] h-[449px] rounded-lg mb-2'/>
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className='px-24'>
        <Intro />
        <Properties />
      </main>
    </div>
  )
}
export default HomePage
