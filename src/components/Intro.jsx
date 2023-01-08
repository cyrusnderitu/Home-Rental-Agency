import React from 'react'
import IntroImg from '../assets/unsplash_oGmf8o53LeE (1).png'
import {BiDollarCircle, BiBuildingHouse} from 'react-icons/bi'
import {BsStack} from 'react-icons/bs'
import {TbPlant} from 'react-icons/tb'
import {RiShieldStarFill, RiEye2Line} from 'react-icons/ri'

const Intro = () => {
  return (
    <div className='mt-10 px-20'>
      <h1 className=' intro_text relative text-3xl font-extrabold mb-8'>Minimum Living Cost Takes Care of Everything</h1>
      <div className="intro_cont flex mb-10">
        <div className="left flex-1">
          <img src={IntroImg} alt="introImage" />
        </div>
        <div className="right flex-1 mt-32 -ml-36">
          <div className="intro_data grid grid-cols-3 gap-y-10">
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <BiDollarCircle className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold text-[20px] leading-[35px] capitalize">pay as little as possible</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <BiBuildingHouse className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold text-[20px] leading-[35px] capitalize">Enjoy wisdom of community</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <BsStack className='text-[#F4511E] text-2xl'/>
              </a>
              <h2 className="font-inter font-bold text-[20px] leading-[35px] capitalize">Let's somebody else take care of landlord</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <TbPlant className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold text-[20px] leading-[35px] capitalize">Enjoy peaceful environment!</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <RiShieldStarFill className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold text-[20px] leading-[35px] capitalize">Stay safe! <br /> save money</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit"> 
                <RiEye2Line className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold text-[20px] leading-[35px] capitalize">pay for what <br /> you use!</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Intro
