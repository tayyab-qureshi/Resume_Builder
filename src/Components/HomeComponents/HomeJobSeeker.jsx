import React from "react";

const HomeJobSeeker = () => {
  return (
    <div className="pt-[152px] flex">
        <div className="flex pl-[65px] gap-[215px]">
      <img src="/img/jobseekar.png" alt="" />
      <div className="pt-[75px]">
        <h2 className="text-[36px] text-[#373737] font-bold leading-6 tracking-tight text-left">
          Job Seekers
        </h2>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[65px] mb-[6px]"></div>
        <p className="w-[220px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
          Apply for a job with one click after completing your profile
        </p>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[35px] mb-[6px]"></div>
        <p className="w-[220px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
        Free CV templates- Many to choose from
        </p>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[35px] mb-[6px]"></div>
        <p className="w-[220px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
        Free exports to pdf
        </p>
        <div className="border-[3px] w-[38px] border-[#635EA3] mt-[35px] mb-[6px]"></div>
        <p className="w-[220px] text-[#373737] text-base font-normal leading-6 tracking-tight text-left">
        Free profile and access to jobs
        </p>
      </div>
      </div>
        <img src="/img/jobseekargroup.png" alt="" className="absolute right-0"/>
    </div>
  );
};

export default HomeJobSeeker;
