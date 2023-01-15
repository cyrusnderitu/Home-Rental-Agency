import Drop from 'mysql-database/structures/methods/drop'
import React from 'react'
import DropFile from '../Uploads/DropFile'

const Form = () => {
  return (
    <div className='md:px-16 lg:px-24'>
        <div className="form_cont w-full shadow-slate-200 shadow-2xl py-4 px-10">
          <h2 className="font-extrabold capitalize text-[#F4551E] w-full text-center text-xl">Add a new property</h2>
          <form className='grid md:grid-cols-2 grid-cols-3 gap-10 mt-16'>
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>Name<span className='text-[#F4551E]'>*</span></label><br />
              <input type="text" placeholder='Enter Name' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>Address<span className='text-[#F4551E]'>*</span></label><br />
              <input type="text" placeholder='Enter Address' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>Unit Number<span className='text-[#F4551E]'>*</span></label><br />
              <input type="number" placeholder='Enter Unit' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>City<span className='text-[#F4551E]'>*</span></label><br />
              <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                <option value="Select City" disabled>Select City</option>
                <option value="new york">New York</option>
                <option value="tokyo">Tokyo</option>
                <option value="london">London</option>
              </select>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>State<span className='text-[#F4551E]'>*</span></label><br />
              <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                <option value="Select State" disabled>Select State</option>
                <option value="carolina">North Carolina</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="georgia">Georgia</option>
              </select>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>Room Type<span className='text-[#F4551E]'>*</span></label><br />
              <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                <option value="Select State" disabled>Master En-suite</option>
                <option value="carolina">Single</option>
                <option value="massachusetts">Double</option>
                <option value="georgia">Triple</option>
              </select>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>Price<span className='text-[#F4551E]'>*</span></label><br />
              <input type="number" placeholder='In dollars ($)' className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'/>
            </div>  
            <div className="font-inter md:text-[14px] lg:text-[16px]">
              <label htmlFor="name" className='font-bold'>Room Type<span className='text-[#F4551E]'>*</span></label><br />
              <select className='indent-4 py-2 bg-gray-100 text-gray-500 w-full border-1 rounded-md border-gray-300'>
                <option value="Select Room">Room Type</option>
              </select>
            </div>  
          </form>
          <div className='my-10 md:text-[14px] lg:text-[16px]'>
            <label htmlFor="txt" className='font-bold'>Description <span className='text-[#F4551E]'>*</span></label> <br />
            <textarea id="txt" className='bg-gray-100 rounded-lg w-full indent-4 outline-none py-4 h-48' placeholder='Enter Description'></textarea>
          </div>
          <DropFile />
          <div className='flex justify-center'>
            <button className='w-fit py-4 px-8 border-none bg-[#F4551E] text-white font-semibold my-10 rounded-lg'>Add Property</button>
          </div>
        </div>
    </div>
  )
}

export default Form
