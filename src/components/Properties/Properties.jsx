import React, { useEffect, useState } from 'react'
import PropCard from '../Card/PropCard';
import ReactPaginate from 'react-paginate';
import '../Properties/style.css'

const Properties = ({data}) => {

  return (
    <div className='mb-6 mob:px-12 md:px-18 lg:px-24'>
        <div className='flex justify-between items-center'>
            <h1 className='prop_title relative font-bold sm:text-[18px] lg:text-[26px]'>List Of Properties</h1>
            <button className='border-none bg-[#F4511E] text-white p-2 mob:text-[12px] sm:font-bold md:font-regular md:text-[14px] lg:text-[18px]'>View All Property</button>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <div className='blog-container'>
              {data ?(data.map((post)=>{return <PropCard key={post.id} data={post} /> })): "No Property Found"}
          </div>
        </div>
    </div>
  )
}

export default Properties
