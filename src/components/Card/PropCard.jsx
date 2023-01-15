import React from "react";
import '../Card/styles.css'
import { BiBed } from 'react-icons/bi'
import {MdOutlineBathtub, MdGrid3X3  } from 'react-icons/md'

const PropCard = ({ data }) => {
  return (
    <div className="blog-post shadow-lg rounded-lg" key={data.id}>
      <img className="cover-img skeleton skeleton_img rounded-t-lg" src={`${data.homeImage} ? ${data.homeImage}: https://st.hzcdn.com/simgs/37e1bd44006702f8_14-5316/home-design.jpg`} alt="cover-image" />
      <div className="post_content mob:px-4 md:px-8 font-dms">
        <h2 className="title skeleton_text text-black font-bold mob:text-md lg:text-xl mt-2 mob:mb-2 md:mb-4">{data.title}</h2>
        <p className="description mob:text-sm lg:text-lg skeleton_text skeleton_text_body text-gray-400">{data.roomType}</p>
        <span className="price font-bold mob:text-lg md:text-xl lg:text-2xl text-[#F4551E]">{`$${data.price}/Month`}</span>
        <div className="card-details border-t-2 border-gray-300 mob:w-[calc(100% + 2rem)] mob:-mr-4 mob:-ml-4 mob:mt-2 md:w-[calc(100% + 4rem)] -mr-8 -ml-8 mt-4">
          <div className="grid grid-cols-3">
            <div className="bed border-r-2 py-2 flex justify-center items-center gap-x-1">
              <BiBed />
              <p className="mob:text-[14px] md:text-[18px]">{data.size[0]}</p>
            </div>
            <div className="water py-2 flex justify-center items-center gap-x-1">
              <MdOutlineBathtub />
              <p className="mob:text-[14px] md:text-[18px]">{data.size[1]}</p>
            </div>
            <div className="room border-l-2 border-gray-300 py-2 flex justify-center items-center gap-x-1">
              <MdGrid3X3 />
              <p className="mob:text-[14px] md:text-[18px]">{data.size[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropCard;
