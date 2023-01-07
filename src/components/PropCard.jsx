import React from 'react'

const PropCard = ({data}) => {
  return (
    <div className=''>
        <div className="card w-[300px] h-[300px] p-8 shadow-md rounded-lg">
            <h1>{data.title}</h1>
            <p>{data.details}</p>
        </div>
    </div>
  )
}

export default PropCard
