import React from "react";

const Nav1 = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="px-[34.5px] pt-[23px]">
    <div className="px-[25px] h-[100px] max-w-[1371px] flex justify-between items-center">
      <img src="/img/image 1.png" alt=""/> 
      <div className="flex items-center gap-[21px]">
        <img src={user.image} alt="" className="w-[56px] h-[56px] rounded-[50%]" />
        <h2 className="text-[14px] font-bold text-[#373737]">{user.name}</h2>
      </div>
      </div>
    </div>
  );
};

export default Nav1;
