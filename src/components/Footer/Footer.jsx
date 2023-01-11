import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { AiFillPrinter, AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram, AiOutlineGooglePlus, AiOutlineWifi } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-24">
      <div className="footer_cont h-full border-t-[3px] border-[#F4551E] py-20 flex">
        <div className="left  h-full flex-1">
          <h1>This is the Left section of footer</h1>
        </div>
        <div className="right  h-full flex-1">
          <div className="right_cont">
            <div className="flex flex-col gap-y-4 mb-8 w-fit">
              <p className="flex gap-y-2 items-center">
                <MdLocationPin className="text-[#F4551E] font-2xl" />
                345 Faulconer Drive, Suite 4 . Charlottesville, CA 12345
              </p>
              <div className="flex justify-between items-center">
                <p className="flex gap-y-2 items-center">
                  <FaPhoneAlt className="text-[#F4551E] font-2xl" />
                  (123) 456-7890
                </p>
                <p className="flex gap-y-2 items-center">
                  <AiFillPrinter className="text-[#F4551E] font-2xl" />
                  (123) 456-7890
                </p>
              </div>
            </div>
            <div className="socials flex gap-x-4">
              <span>Social Media</span>
              <a href=""><AiFillFacebook className="text-[#F4551E] font-2xl"/></a>
              <a href=""><AiOutlineTwitter className="text-[#F4551E] font-2xl"/></a>
              <a href=""><FaLinkedinIn className="text-[#F4551E] font-2xl"/></a>
              <a href=""><AiFillYoutube className="text-[#F4551E] font-2xl" /></a>
              <a href=""><AiOutlineInstagram className="text-[#F4551E] font-2xl" /></a>
              <a href=""><AiOutlineGooglePlus className="text-[#F4551E] font-2xl" /></a>
              <a href=""><BsPinterest className="text-[#F4551E] font-2xl" /></a>
              <a href=""><AiOutlineWifi  className="text-[#F4551E] rotate-45"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 mx-8">
        <div className="border-gray-100 flex justify-between items-center mt-8">
          <ul className="flex gap-x-8 text-[12px] font-semibold">
            <li className="uppercase list-none">About us</li>
            <li className="uppercase list-none">Contact us</li>
            <li className="uppercase list-none">Help</li>
            <li className="uppercase list-none">Privacy policy</li>
            <li className="uppercase list-none">Disclaimer</li>
          </ul>
          <span className="text-center">Copyright &copy; 2020 Minimumlivingcost. All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
