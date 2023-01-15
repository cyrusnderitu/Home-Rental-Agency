import React from "react";
import { FaSearch }from 'react-icons/fa'

const HeroForm = () => {
  return (
    <>
      <form className="mob:p-2 md:p-4 bg-white rounded-lg w-fit">
        <div className="form_cont mob:text-sm md:text-lg flex">
          <select className="border-[2px] p-2 rounded-l-lg border-gray-300 font-semibold outline-none">
            <option value="All Type">All Type</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="border-[2px] p-2 border-gray-300 font-semibold outline-none">
            <option value="Neighborhood">Neighborhood</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="bg-cyan-500 px-3 flex items-center rounded-r-lg cursor-pointer">
            <FaSearch className="text-white"/>
          </div>
        </div>
      </form>
    </>
  );
};

export default HeroForm;
