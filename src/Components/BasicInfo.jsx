import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { addProfileInfo , getSinglejobseekar } from "../Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import Nav1 from "./Nav1";

const BasicInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.id,"id");
  const {singleJobseekar} = useSelector(state => state.singlejobseekar)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    degree: "",
    gender: "",
  });

  useEffect(()=>{
    dispatch(getSinglejobseekar(user.id))
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.firstname &&
      formData.lastname &&
      formData.dateofbirth &&
      formData.degree &&
      formData.gender
    ) {
      console.log("Form Data:", formData);
      const updateObject = { ...singleJobseekar, basicinfo: formData };
      dispatch(addProfileInfo(user.id, updateObject));
      navigate("/contactinfo");
    } else {
      alert("Please fill in all the required inputs.");
    }
  };

  return (
    <div>
      <Nav1/>
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
          Step 1: Basic Information
        </h1>
        <p className="text-[#ffffff] font-normal pb-[111px] text-[24px] leading-[32px] tracking-[2%] w-[679px]">
          Let’s get to know you, please fill out some basic information about
          yourself.
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
          <h2 className="text-[16px] text-[#373737] font-semibold">Basic Information</h2>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
          <button className="px-[16px] py-[10px] bg-[#DCDCDC] text-[16px] rounded-[50%]">
            2
          </button>
          <h2 className="text-[14px] text-[#444444] font-normal">Contact Information</h2>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
          <button className="px-[16px] py-[10px] bg-[#DCDCDC] text-[16px] rounded-[50%]">
            3
          </button>
          <h2 className="text-[14px] text-[#444444] font-normal">Experience</h2>
          </div>
          <div className="flex flex-col gap-[10px] items-center">
          <button className="px-[16px] py-[10px] bg-[#DCDCDC] text-[16px] rounded-[50%]">
            4
          </button>
          <h2 className="text-[14px] text-[#444444] font-normal">Complete your Profile</h2>
          </div>
        </div>

        <div className=" flex justify-center mt-[45px]">
          <div className="flex flex-wrap gap-x-[163px] gap-y-[28px] py-[20px] px-[163px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                First Name<span className="text-[#FF3F56] font-bold">*</span>
              </label>
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                Last Name<span className="text-[#FF3F56] font-bold">*</span>
              </label>
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                Date of Birth<span className="text-[#FF3F56] font-bold">*</span>
              </label>
              <input
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#252525] text-[16px] font-normal tracking-[2%]">
                Degree Level<span className="text-[#FF3F56] font-bold">*</span>
              </label>
              <select
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-[323px] py-[10px] px-[16px] rounded-xl border border-[#B0B0B0]"
              >
                <option value="Matriculation">Matriculation</option>
                <option value="O-level">O Level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Graduation">Graduation</option>
                <option value="Master">Master's Degree</option>
                <option value="Doctorate">Doctorate Degree</option>
              </select>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[16px] text-[#252525] font-normal">Gender</h2>
              <div className="flex items-center gap-[25px]">
                <div className="flex gap-[10px]">
                  <input
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    className=" rounded-xl"
                    type="radio"
                  />
                  <label>Male</label>
                </div>
                <div className="flex gap-[10px]">
                  <input
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    className=" rounded-xl"
                    type="radio"
                  />
                  <label>Female</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="three text-center mt-32">
          <button
            onClick={handleSubmit}
            className="py-3 px-40 font-bold text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BasicInfo;
