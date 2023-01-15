import React, { useState, useEffect } from "react";
import HeroBg from "../assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash (1).png";
import Navbar from "../components/Navbar/Navbar";
import HeroForm from "../components/HeroForm";
import Map from "../assets/map.png";
import Intro from "../components/Intro/Intro";
import Properties from "../components/Properties/Properties";
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

  /** Asychromous function for fetching data from db.json file 
  and stores it in state and then transfers it to localStorage **/
  async function fetchData() {
    const response = await fetch("http://localhost:8000/data");
    const data = await response.json();
    setData(data);
    setHasFetched(true);
    localStorage.setItem('homes', JSON.stringify(data));
    setCurrentPost(data?.slice(indexOfFirstPost, indexOfLastPost));
    setPageCount(Math.ceil(data.length / postsPerPage));
  }

  // Check of localStorage has homes otherwise fetch
  if (!hasFetched){
    fetchData();
  }
  
  useEffect(()=>{
    setCurrentPost(data?.slice(indexOfFirstPost, indexOfLastPost));
  }, [indexOfFirstPost])

  // React pagination for the event onPageChange
  const handlePageClick = (event) => {
    const newOffset = event.selected * postsPerPage;
    setIndexOfFirstPost(newOffset);
  };
  return (
    <div>
      <div className="hero h-screen">
        <div className="shade absolute bg-black w-full h-full">
          <Navbar />
          <div className="hero_cont mob:px-12 md:px-18 lg:px-24 h-[80%] flex justify-center items-center">
            <div className="">
              <div className="hero_data flex justify-center items-center h-full">
                <div className="flex md:flex-col lg:flex-row mob:flex-col-reverse md:mt-20 lg:items-center justify-center gap-x-16">
                  <div className="hero_desc flex-1">
                    <h1 className="md:text-[40px] mob:text-[30px] sm:text-[35px] sm:text-center lg:text-[40px] xl:text-[52px] lg:text-left mob:text-center mob:leading-2 md:leading-[50px] lg:leading-[70px] font-bold text-white drop-shadow-xl shadow-black lg:w-[584px] mob:mt-8 sm:mt-0">
                      The Most Affordable Place To Stay In The San Franciso Bay Area
                    </h1>
                  </div>
                  <div className="hero_map flex-1">
                    <div className="w-full flex flex-col md:flex-col-reverse lg:flex-col items-center">
                      <img
                        src={Map}
                        alt="Map"
                        className="w-[400px] mob:h-[350px] md:h-[400px] rounded-lg mb-2"
                      />
                      <HeroForm />
                    </div>
                  </div>
                </div>
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
            activeClassName={"bg-orange-400 text-gray-200 border border-orange-400"}
            breakClassName={""}
            breakLabel={"..."}
            containerClassName={`pagination mx-auto border-2 border-gray-300 rounded-lg`}
            disabledClassName={"bg-gray-300 text-gray-500"}
            // marginPagesDisplayed={1}
            nextLabel="Next"
            nextClassName={"px-4 border-l-1 border-gray-300 h-full flex items-center text-orange-400 border-l-2 border-gray-300"}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageClassName={"px-3 py-4 h-full flex items-center text-orange-400 border-l-2 border-gray-300"}
            pageRangeDisplayed={3}
            previousLabel="First"
            previousClassName={"px-4 border-r-1 border-gray-400 h-full flex items-center text-orange-400"}
          />
        </div>
        <Options />
        <h4 className="capitalise font-bold sm:text-md lg:text-xl my-10 px-24 text-center">Your property with us and be confident that your room will be filled out!</h4>
        <Form />
        <Testimonials />
      </main>
    </div>
  );
};
export default HomePage;
