import React from "react";

const HomeEmployer = () => {
  return (
    <div className="mt-[40px] flex items-center">
      <img src="/img/employgroup.png" alt="" className="pt-[37px]"/>
      <div className="pt-[75px] ml-[-20px]">
        <h2 className="text-[36px] text-[#373737] font-bold leading-6 tracking-tight text-left">
          Employers
        </h2>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[65px] mb-[6px]"></div>
        <p className="w-[220px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
          Free job posting
        </p>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[35px] mb-[6px]"></div>
        <p className="w-[220px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
          View candidates before deciding which are good fit
        </p>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[35px] mb-[6px]"></div>
        <p className="w-[417px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
          One format for profile / resume makes it easier to see all the key
          points for evaluating a candidate within seconds
        </p>
      </div>
      <img src="/img/employframe.png" alt="" className="ml-[126px]"/>
    </div>
  );
};

export default HomeEmployer;
