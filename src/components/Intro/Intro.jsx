import React from 'react'
import IntroImg from '../../assets/unsplash_oGmf8o53LeE (1).png'
import {BiDollarCircle, BiBuildingHouse} from 'react-icons/bi'
import {BsStack} from 'react-icons/bs'
import {TbPlant} from 'react-icons/tb'
import {RiShieldStarFill, RiEye2Line} from 'react-icons/ri'

const Intro = () => {
  return (
    <div className='mt-20 md:px-16 lg:px-20'>
      <h1 className=' intro_text relative text-[24px] font-extrabold mb-8'>Minimum Living Cost Takes Care of Everything</h1>
      <div className="intro_cont flex mb-10 justify-center">
        <img src={IntroImg} alt="introImage" className='max-w-[400px] flex-1'/>
        <div className="rightflex-1 mt-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8">
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg flex justify-center item-center w-fit">
                <BiDollarCircle className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold md:text-[15px] lg:text-[18px] md:leading-[25px] md:w-[70%] lg:leading-[35px] capitalize lg:w-[95%]">pay as little as possible</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <BiBuildingHouse className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold md:text-[15px] lg:text-[18px] md:leading-[25px] md:w-[70%] lg:leading-[35px] capitalize lg:w-[95%]">Enjoy wisdom of community</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <BsStack className='text-[#F4511E] text-2xl'/>
              </a>
              <h2 className="font-inter font-bold md:text-[15px] lg:text-[18px] md:leading-[25px] md:w-[70%] lg:leading-[35px] capitalize lg:w-[95%]">Let's somebody else take care of landlord</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <TbPlant className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold md:text-[15px] lg:text-[18px] md:leading-[25px] md:w-[70%] lg:leading-[35px] capitalize lg:w-[95%]">Enjoy peaceful environment!</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit">
                <RiShieldStarFill className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold md:text-[15px] lg:text-[18px] md:leading-[25px] md:w-[70%] lg:leading-[35px] capitalize lg:w-[95%]">Stay safe! save <br /> money</h2>
            </div>
            <div className="intro_show">
              <a className="p-[8px] shadow-lg rounded-lg mb-1 flex justify-center item-center w-fit"> 
                <RiEye2Line className='text-[#F4511E] text-3xl'/>
              </a>
              <h2 className="font-inter font-bold md:text-[15px] lg:text-[18px] md:leading-[25px] md:w-[70%] lg:leading-[35px] capitalize lg:w-[95%]">pay for what you <br /> use!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intro
