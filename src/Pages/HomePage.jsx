import React from 'react'
import HeroBg from '../assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash (1).png'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
      <div className="hero h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* <img src={HeroBg} alt="" className='absolute'/> */}
        <div className="hero_cont px-24">
          <Navbar />
          <div className="hero_data flex">
            <div className="hero_desc">
              <h1 className='text-[52px] leading-[70px] font-bold text-white w-[584px]'>The Most Affordable Place To Stay In The San Franciso Bay Area</h1>
            </div>
            <div className="hero_map">
              <div className='w-[408px] h-[449px] rounded-lg bg-slate-600'>

              </div>
              <form>
                <select name="" id="">
                  <option value="All Type">All Type</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <select name="" id="">
                  <option value="Neighborhood">Neighborhood</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
