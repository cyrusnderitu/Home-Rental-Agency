import React, { useState } from 'react'
const DropFile = () => {

  const [files, setFiles] = useState([])

  const handleChange = (event) => {
    setFiles(event.target.value[0])
    console.log(event.target.value)
  }

  return (
    <div>
      <form id="font-pops">
      <div className='text-left font-bold'>
        <label htmlFor="input-file-upload" className=""> Upload Photos <span className='text-[#F4551E]'>*</span></label>
      </div>
      <input type="file" id="input-file-upload" multiple={true} required className='bg-transparent' onClick={handleChange}/>
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div className='py-10'>
          <p className='font-bold'>Drag your images here, or <span className='text-[#F4551E] cursor-pointer'>browse</span></p>
          <p className='text-gray-400'>Supported JPG, JPEG, PNG</p>
        </div> 
      </label>
    </form>
    <div>
      {/* {files && <img src={URL.createObjectURL(files)} alt="Selected file" />} */}
    </div>
    </div>
  )
}
export default DropFile
