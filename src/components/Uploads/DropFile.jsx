import React from 'react'

const DropFile = () => {

  return (
    <div>
      <form id="form-file-upload">
      <label htmlFor="input-file-upload" className="text-left w-full bg-slate-500"> Upload Photos</label>
      <input type="file" id="input-file-upload" multiple={true} />
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button">Upload a file</button>
        </div> 
      </label>
    </form>
    </div>
  )
}
export default DropFile
