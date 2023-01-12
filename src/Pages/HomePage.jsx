import React, { useState, useEffect } from "react";
import HeroBg from "../assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash (1).png";
import Navbar from "../components/Navbar";
import HeroForm from "../components/HeroForm";
import Map from "../assets/map.png";
import Intro from "../components/Intro";
import Properties from "../components/Properties";
import ReactPaginate from "react-paginate";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Options from "../components/Options";
import Form from "../components/Form/Form";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  const [data, setData] = useState();
  const [hasFetched, setHasFetched] = useState(false);

  const postsPerPage = 6;
  const [pageCount, setPageCount] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);

  const indexOfLastPost = indexOfFirstPost + postsPerPage;
  const [currentPosts, setCurrentPost] = useState(null);

  async function fetchData() {
    const response = await fetch("http://localhost:8000/data");
    const data = await response.json();
    setData(data);
    setHasFetched(true);
    localStorage.setItem('hotels', JSON.stringify(data));
    setCurrentPost(data?.slice(indexOfFirstPost, indexOfLastPost));
    console.log({currentPosts})
    setPageCount(Math.ceil(data.length / postsPerPage));
  }

  if (!hasFetched){
    fetchData();
  }
  useEffect(()=>{
    setCurrentPost(data?.slice(indexOfFirstPost, indexOfLastPost));
  }, [indexOfFirstPost])

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 1) * postsPerPage;
    setIndexOfFirstPost(newOffset);
  };
  return (
    <div>
      <div className="hero h-screen relative">
        <div className="shade absolute bg-black w-full h-full">
          <div className="hero_cont px-24">
            <Navbar />
            <div className="hero_data flex items-center mt-18 max-xl:mt-24 gap-x-16">
              <div className="hero_desc">
                <h1 className="text-[52px] leading-[70px] font-bold text-white w-[584px]">
                  The Most Affordable Place To Stay In The San Franciso Bay Area
                </h1>
              </div>
              <div className="hero_map">
                <img
                  src={Map}
                  alt="Map"
                  className="w-[400px] h-[400px] rounded-lg mb-2"
                />
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="">
        <Intro />
        <div className="bg-gray-100 py-20 mb-18">
          <Properties data={currentPosts} />
          <ReactPaginate
            activeClassName={"bg-orange-400 text-gray-200"}
            breakClassName={""}
            breakLabel={"..."}
            containerClassName={`pagination mx-auto border-2 border-gray-300 rounded-lg`}
            disabledClassName={"bg-gray-300 text-gray-500"}
            // marginPagesDisplayed={1}
            nextLabel="Next"
            nextClassName={"px-4 border-l-1 border-gray-300 h-full flex items-center text-orange-400"}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageClassName={"px-4 h-full flex items-center text-orange-400 "}
            pageRangeDisplayed={3}
            previousLabel="First"
            previousClassName={"px-4 border-r-1 border-gray-400  h-full flex items-center text-orange-400"}
          />
        </div>
        <Options />

        <h4 className="capitalise font-bold text-xl my-10 px-24 text-center">Your property with us and be confident that your room will be filled out!</h4>
        <Form />
        <Testimonials />
      </main>
    </div>
  );
};
export default HomePage;
