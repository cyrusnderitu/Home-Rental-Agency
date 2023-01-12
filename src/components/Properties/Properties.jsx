import React, { useEffect, useState } from 'react'
import PropCard from '../Card/PropCard';
import ReactPaginate from 'react-paginate';
import '../Properties/style.css'

const Properties = ({data}) => {

  return (
    <div className='mb-6 px-24'>
        <div className='flex justify-between items-center'>
            <h1 className='prop_title relative font-bold text-[26px] mb-10'>List Of Properties</h1>
            <button className='border-none bg-[#F4511E] text-white p-2'>View All Property</button>
        </div>
        <div className='flex justify-center items-center'>
          <div className='blog-container'>
              {data ?(data.map((post)=>{return <PropCard key={post.id} data={post} /> })): "No Property Found"}
          </div>
        </div>
    </div>
  )
}

export default Properties
