import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const CompleteYourProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleSubmit = () => {};

  return (
    <div className="">
      <img
        src="/img/Ellipse 3 (Stroke).png"
        alt=""
        className="absolute right-0 top-[720px]"
      />
      <div
        className="text-center flex flex-col items-center bg-gradient-to-b from-[#635EA3] to-[#3B3775]"
        style={{ borderRadius: "445px 0px" }}
      >
        <h1 className="text-[#ffffff] pt-[48px] font-extrabold text-[42px] leading-[76px] tracking-[-1px] ">
          Step 3: Experience
        </h1>
        <p className="text-[#ffffff] font-normal pb-[111px] text-[24px] leading-[32px] tracking-[2%] w-[679px]">
          Let’s get you noticed!Work ecperience will increase your chances of
          landing that next job
        </p>
      </div>
      <div
        className="relative w-4/5 rounded-xl mx-auto mt-[-13vh] mb-[16vh] pt-16 py-[300px] bg-white"
        style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }}
      >
        <div className="flex justify-center flex-wrap gap-x-[100px] gap-y-[20px] items-center text-center">
          <div className="flex flex-col gap-[10px] items-center">
            <button className="px-[16px] py-[10px] border border-blue-100 bg-[#635EA3] text-[16px] text-[#ffffff] rounded-[50%]">
              1
            </button>
            <h2 className="text-[16px] text-[#373737] font-semibold">
              Basic Information
            </h2>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <button className="px-[16px] py-[10px] border border-blue-100 bg-[#635EA3] text-[16px] text-[#ffffff] rounded-[50%]">
              2
            </button>
            <h2 className="text-[16px] text-[#373737] font-semibold">
              Contact Information
            </h2>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <button className="px-[16px] py-[10px] border border-blue-100 bg-[#635EA3] text-[16px] text-[#ffffff] rounded-[50%]">
              3
            </button>
            <h2 className="text-[16px] text-[#373737] font-semibold">
              Experience
            </h2>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <button className="px-[16px] py-[10px] border border-blue-100 bg-[#635EA3] text-[16px] text-[#ffffff] rounded-[50%]">
              4
            </button>
            <h2 className="text-[16px] text-[#373737] font-semibold">
              Complete your Profile
            </h2>
          </div>
        </div>

        <div className=" flex justify-center mt-[45px]">
          <div className="flex flex-wrap gap-x-[163px] gap-y-[52px] py-[20px] px-[163px]">
            <div className="flex flex-col gap-y-[20px]">
              <h2 className="text-center text-[#252525] font-normal">
                I already have a CV/Resume
              </h2>
              <button className="py-3 w-[323px] font-bold text-[14px] text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl">
                Upload File
              </button>
            </div>
            <div className="flex flex-col gap-y-[20px]">
              <h2 className="text-center text-[#252525] font-normal">
                Create profile from scratch
              </h2>
              <Link to="/basicinfo">
              <button className="py-3 w-[323px] font-bold text-[14px] text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl">
                Continue
              </button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/experience">
              <button className="py-3 w-[323px] font-bold text-[14px] border border-[#635EA3] text-[#635EA3] rounded-xl">
                Previous
              </button>
                </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/reviewprofile">
              <button className="py-3 w-[323px] font-bold text-[14px] text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl">
                Next Page...
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CompleteYourProfile;
