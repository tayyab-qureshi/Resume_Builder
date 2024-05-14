import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglejobseekar, addProfileInfo } from "../Actions/Action";
import { useNavigate } from "react-router-dom";
const Experience = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {singleJobseekar} = useSelector(state => state.singlejobseekar)


  const [formData, setFormData] = useState({
    jobcity: "",
    designation: "",
    experience: "",
  });

  useEffect(() => {
    dispatch(getSinglejobseekar(user.id));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.jobcity && formData.designation && formData.experience) {
      console.log("Form Data:", formData);
      const updateObject = { ...singleJobseekar, experienceinfo: formData };
      dispatch(addProfileInfo(user.id, updateObject));
      navigate("/completeyourprofile");
    } else {
      alert("Please fill in all the required inputs.");
    }
  };

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
        className="relative w-4/5 rounded-xl mx-auto mt-[-13vh] mb-[16vh] py-16 bg-white"
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
            <button className="px-[16px] py-[10px] bg-[#DCDCDC] text-[16px] rounded-[50%]">
              4
            </button>
            <h2 className="text-[14px] text-[#444444] font-normal">
              Complete your Profile
            </h2>
          </div>
        </div>

        <div className=" flex justify-center mt-[45px]">
          <div className="flex flex-wrap gap-x-[163px] gap-y-[28px] py-[20px] px-[163px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                Job City<span className="text-[#FF3F56] font-bold">*</span>
              </label>
              <input
                name="jobcity"
                value={formData.jobcity}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
                type="text"
                placeholder="Enter your job city"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                Expected Designation
              </label>
              <input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
                type="text"
                placeholder="Enter Expected Designation"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                Experience<span className="text-[#FF3F56] font-bold">*</span>
              </label>
              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
                type="text"
                placeholder="Enter your experience"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-[20px] gap-x-[163px] px-[163px]  text-center mt-52">
          <Link to="/contactinfo">
            <button className="py-3 w-[323px] font-bold text-[14px] border border-[#635EA3] text-[#635EA3] rounded-xl">
              Previous
            </button>
          </Link>

          <button
            onClick={handleSubmit}
            className="py-3 w-[323px] font-bold text-[14px] text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
