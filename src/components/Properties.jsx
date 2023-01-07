import React, { useEffect, useState } from 'react'
import PropCard from './PropCard';

const Properties = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        async function fetchData() {
        const response = await fetch('http://localhost:8000/data');
        const data = await response.json();
        setData(data);
        }
        fetchData();
    },[])

  return (
    <div className='grid grid-cols-3'>
      {data ? (data.map((dt)=>{return <PropCard key={dt.id} data={dt} />})) : "No properties to show"}
    </div>
  )
}

export default Properties
