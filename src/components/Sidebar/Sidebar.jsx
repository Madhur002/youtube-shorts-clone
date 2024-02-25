/* eslint-disable no-unused-vars */
import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
const Sidebar = () => {
  return (
    <>
        <div className="bg-[#0f0f0f] z-10 h-[100vh] w-[15%] fixed mt-[56px]">
          <div className="py-4 px-3 pr-6">
            <div className="py-[9px] px-4 flex justify-start items-center gap-6 font-semibold">
              <GrHomeRounded className="text-lg" />
              <p className="text-sm">Home</p>
            </div>
            <div className="py-[9px] px-4 bg-[#292929] rounded-lg flex justify-start items-center gap-6 font-semibold">
              <SiYoutubeshorts className="text-xl" />
              <p className="text-sm">Shorts</p>
            </div>
            <div className="py-[9px] px-4 flex justify-start items-center gap-6 font-semibold">
              <MdOutlineSubscriptions className="text-2xl" />
              <p className="text-sm ml-[-3px]">Subscriptions</p>
            </div>
          </div>
          <div className="w-full px-3">
            <hr className="h-[1px] w-full bg-[#3f3f3f] border-0" />
          </div>
        </div>
    </>
  );
};

export default Sidebar;
