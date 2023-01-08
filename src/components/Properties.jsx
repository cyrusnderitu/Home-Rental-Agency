import React, { useEffect, useState } from 'react'
import PropCard from './Card/PropCard';
import ReactPaginate from 'react-paginate';

const Properties = () => {

    const [data, setData] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
     };

    useEffect(()=>{
        async function fetchData() {
        const response = await fetch('http://localhost:8000/data');
        const data = await response.json();
        console.log(data)
        setData(data);
        }
        fetchData();
    },[])

  return (
    <div className=''>
        <div className='flex justify-between items-center'>
            <h1 className='prop_title relative font-bold text-[36px]'>List Of Properties</h1>
            <button className='border-none bg-[#F4511E] text-white p-4'>View All Property</button>
        </div>
        <div className='blog-container'>
            {data ? (data.map((dt)=>{return <PropCard key={dt.id} data={dt} />})) : "No properties to show"}
        </div>
    </div>
  )
}

export default Properties
