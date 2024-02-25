/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "./images/logo4.jpg";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineMic } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import useSidebarStore from "../store/store";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { isOpen, toggleSidebar } = useSidebarStore();
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="fixed top-0 px-4 text-white bg-[#0f0f0f] h-[56px] w-full flex justify-between items-center">
      <div className="w-full h-full gap-4 flex justify-start items-center">
        <div onClick={toggleSidebar} className="hover:bg-[#ffffff2e] flex justify-center items-center h-[40px] w-[40px] rounded-full">
        <RxHamburgerMenu className="text-white text-[22px]" />
        </div>
        <div className="h-20 w-24 flex justify-center items-center ">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="relative flex h-full py-2 gap-4">
      <div className="border-2 border-[#303030] rounded-full flex">
          <input
            type="text"
            placeholder="Search"
            className={`px-3 z-10 placeholder:font-semibold placeholder:text-[#838383] focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50 rounded-tl-full rounded-bl-full py-2 w-[515px] text-black ${
              isSearchOpen ? 'bg-white' : 'bg-transparent'
            }`}
          />
          <div onClick={toggleSearch} className="flex justify-center items-center rounded-tr-full rounded-br-full bg-[#222222] w-[64px] h-full">
          <AiOutlineSearch
            className={`text-[#cdcdcd] text-2xl cursor-pointer ${
              isSearchOpen ? 'text-black' : ''
            }`}
            />
            </div>
        </div>
        <div className="h-[40px] w-[40px] bg-[#222222] rounded-full flex justify-center items-center">
        <MdOutlineMic className="text-2xl" />
          </div>
          </div>
      <div className="w-full h-full gap-4 flex justify-end items-center">
        <HiOutlineDotsVertical className="text-white text-xl" />
        <div className="text-[#4ba7f8] h-[40px] gap-2 px-2 rounded-full border-2 border-[#303030] flex justify-center items-center">
        <CgProfile className="text-2xl"/>
          <p className="font-bold text-sm">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
