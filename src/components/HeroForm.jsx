import React from "react";
import { FaSearch }from 'react-icons/fa'

const HeroForm = () => {
  return (
    <>
      <form className="px-6 py-4 bg-white w-fit rounded-lg">
        <div className="form_cont flex">
          <select className="border-[2px] p-2 rounded-l-lg border-gray-300 font-semibold">
            <option value="All Type">All Type</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="border-[2px] p-2 border-gray-300 font-semibold">
            <option value="Neighborhood">Neighborhood</option>s
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="bg-black px-3 flex items-center rounded-r-lg">
            <FaSearch className="text-white" />
          </div>
        </div>
      </form>
    </>
  );
};

export default HeroForm;
