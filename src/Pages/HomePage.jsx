import React, { useState, useEffect } from "react";
import HeroBg from "../assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash (1).png";
import Navbar from "../components/Navbar";
import HeroForm from "../components/HeroForm";
import Map from "../assets/map.png";
import Intro from "../components/Intro";
import Properties from "../components/Properties";
import ReactPaginate from "react-paginate";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const HomePage = () => {
  const [data, setData] = useState();

  const postsPerPage = 3;
  const [pageCount, setPageCount] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);

  const indexOfLastPost = indexOfFirstPost + postsPerPage;
  const [currentPosts, setCurrentPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/data");
      const data = await response.json();
      setData(data);
      setCurrentPost(data.slice(indexOfFirstPost, indexOfLastPost));
      setPageCount(Math.ceil(data.length / postsPerPage));
    }
    fetchData();
  }, [currentPosts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % data.length;
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
      <main className="px-24">
        <Intro />
        <Properties data={currentPosts} />
        <ReactPaginate
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          nextLabel={
            <AiOutlineArrowRight className="text-[16px], w-[150]" />
          }
          onPageChange={handlePageClick}
          pageCount={pageCount}
          pageClassName={"item pagination-page "}
          pageRangeDisplayed={2}
          previousClassName={"item previous"}
          previousLabel={
            <AiOutlineArrowLeft className="text-[16px], w-[150]" />
          }
        />
      </main>
    </div>
  );
};
export default HomePage;
