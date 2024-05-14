import React from "react";

const Nav = () => {
  return (
    <div className="px-[34.5px] pt-[23px]">
    <div className="px-[25px] h-[100px] max-w-[1371px] flex justify-between items-center">
      <img src="/img/image 1.png" alt=""/> 
      <div className="flex">
        <button className="px-[30px] py-[15px] outline ring-[#635EA3] rounded-xl text-[#635EA3] text-sm font-bold mr-[30px]">Create Profile</button>
        <button className="px-[30px] py-[15px] bg-[#635EA3] rounded-xl text-[#ffffff] text-sm font-bold">Employer</button>
      </div>
      </div>
    </div>
  );
};

export default Nav;
