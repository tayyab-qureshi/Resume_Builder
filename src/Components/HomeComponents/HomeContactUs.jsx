import React from "react";

const HomeContactUs = () => {
  return (
    <div className="mt-[128px] h-[730px] relative">
      <div className="yellow absolute right-0"></div>
      <div className="px-[120px]">
        <div className="relative bg-[#635EA3] h-[328px] w-[1200px] rounded-xl">
          <img src="/img/Ellipse 308.png" alt="" className="absolute left-[0px] top-[0px] rounded-tl-xl"/>
            <img src="/img/Ellipse 307.png" alt="" className="absolute right-[0px] top-3 rounded-br-xl"/>
          <img
            src="/img/Titik-titik.png"
            alt=""
            className="absolute right-[137px] top-[142px]"
          />
          <img
            src="/img/Ellipse 310.png"
            alt=""
            className="absolute right-[0px] top-[0px]"
          />
          <img
            src="/img/Ellipse 309.png"
            alt=""
            className="absolute right-[385px] top-[142px]"
          />
          <h1 className="text-[#FFFFFF] w-[628px] text-[48px] font-bold leading-[56px] tracking-normal text-left absolute left-[104px] top-[62px]">
            Explore New Opportunities on the GO!
          </h1>
          <button className="px-[40px] py-[18px] text-[16px] text-[#2C3131] font-semibold bg-[#ffffff] rounded-xl absolute left-[104px] top-[210px]">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
