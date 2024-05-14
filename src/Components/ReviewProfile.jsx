import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import Nav1 from "./Nav1";
import { getSinglejobseekar } from "../Actions/Action";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBasketballBall,
  FaRegUser,
  FaRegFolder,
  FaGalacticRepublic,
} from "react-icons/fa";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { RiLink, RiGraduationCapLine } from "react-icons/ri";
import { BiMessageRoundedCheck, BiBarChart } from "react-icons/bi";
import { GiTrophyCup, GiMeepleGroup } from "react-icons/gi";
import {
  MdOutlineContactPage,
  MdOutlineStars,
  MdOutlineLocationOn,
  MdOutlineLanguage,
} from "react-icons/md";
import { GoHistory } from "react-icons/go";
import PopupComponent from "./Popup";
import CircularProgressBar from "./CircleDiv";

const ReviewProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { singleJobseekar } = useSelector((state) => state.singlejobseekar);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [value, setValue] = useState("");
  const handlePopup = (e) => {
    setValue(e.target.value);
    setPopup(true);
    console.log(popup, "working");
  };

  
  const dynamicValue = singleJobseekar ? Object.keys(singleJobseekar).length * 5 : 0;

  useEffect(() => {
    dispatch(getSinglejobseekar(user.id));
  }, [popup]);
  console.log(popup, "test");

  return (
    <div className="">
      <Nav1 />
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
          Review: Complete your Profile
        </h1>
        <p className="text-[#ffffff] font-normal pb-[111px] text-[24px] leading-[32px] tracking-[2%] w-[742px]">
          You are just few steps away from you professional CV. Complete your
          profile
        </p>
      </div>
      <div
        className="relative w-4/5 flex flex-wrap gap-y-[20px] items-start px-[40px] pt-16 rounded-xl mx-auto mt-[-13vh] mb-[16vh] gap-[40px] pb-[100px] bg-white"
        style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }}
      >
        <div
          className=" w-[305px] rounded-xl pb-[100px]"
          style={{ boxShadow: "0px 0px 17px 0px #0000001C" }}
        >
          <div className="flex flex-col items-center gap-y-[25px] pt-[50px]">
            <img
              src={user.image}
              alt=""
              className="w-[150px] h-[150px] rounded-[50%]"
            />
            <h2 className="text-[18px] text-[#373737] font-semibold">
              {user.name}
            </h2>
            <p className="text-[14px] text-[#767676]">Font-end Developer</p>
            <div className="flex items-center gap-x-[15px]">
              <FaFacebook className="w-[24px] h-[24px] rounded-[50%] bg-[#ffffff] text-[#635EA3]" />
              <AiFillInstagram className="w-[24px] h-[24px] px-1 py-1 rounded-[50%] text-[#ffffff] bg-[#635EA3]" />
              <FaTwitter className="w-[24px] h-[24px] px-1 py-1 rounded-[50%] text-[#ffffff] bg-[#635EA3]" />
              <FaLinkedinIn className="w-[24px] h-[24px] px-1 py-1 rounded-[50%] text-[#ffffff] bg-[#635EA3]" />
              <FaYoutube className="w-[24px] h-[24px] px-1 py-1 rounded-[50%] text-[#ffffff] bg-[#635EA3]" />
              <FaBasketballBall className="w-[24px] h-[24px] px-1 py-1 rounded-[50%] text-[#ffffff] bg-[#635EA3]" />
            </div>
            <div className="border border-[#b2b2b5] w-[220px]"></div>
            <div className="flex w-[240px] justify-between">
              <div className="flex gap-[15px] items-center">
                <FaRegUser />
                <h2 className="text-[14px] font-normal text-[#373737]">
                  Basic Information
                </h2>
              </div>
              <button
                value="basicinfo"
                className="text-[#2961CD] text-[14px] font-normal"
                onClick={handlePopup}
              >
                Edit
              </button>
            </div>
            <div className="flex w-[240px] justify-between">
              <div className="flex gap-[15px] items-center">
                <AiOutlineMail />
                <h2 className="text-[14px] font-normal text-[#373737]">
                  Credentials
                </h2>
              </div>
              <button
                value="credentials"
                className="text-[#2961CD] text-[14px] font-normal"
                onClick={handlePopup}
              >
                Edit
              </button>
            </div>
            <div className="flex w-[240px] justify-between">
              <div className="flex gap-[15px] items-center">
                <RiLink />
                <h2 className="text-[14px] font-normal text-[#373737]">
                  Public Link
                </h2>
              </div>
              <button
                value="profilelink"
                className="text-[#2961CD] text-[14px] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            <div className="flex w-[240px] justify-between">
              <div className="flex gap-[15px] items-center">
                <RiGraduationCapLine />
                <h2 className="text-[14px] font-normal text-[#373737]">
                  Education
                </h2>
              </div>
              <button
                value="education"
                className="text-[#2961CD] text-[14px] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.education && (
              <div className="flex flex-col w-[240px] gap-y-[10px]">
                <h2 className="text-[16px] text-[#373737]">
                  {" "}
                  Degree{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.education?.degreelevel}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  Institute:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.education?.institute}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  Completion Date:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.education?.yearcompletion}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  CGPA / Percentage:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.education?.cgpa_percentage}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  Location:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.education?.location}
                  </span>
                </h2>
              </div>
            )}
            <div className="flex w-[240px] justify-between">
              <div className="flex gap-[15px] items-center">
                <BiMessageRoundedCheck />
                <h2 className="text-[14px] font-normal text-[#373737]">
                  Industry
                </h2>
              </div>
              <button
                value="industry"
                className="text-[#2961CD] text-[14px] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            <div className="flex w-[240px] justify-between">
              <div className="flex gap-[15px] items-center">
                <GiTrophyCup />
                <h2 className="text-[14px] font-normal text-[#373737]">
                  Awards
                </h2>
              </div>
              <button
                value="awards"
                className="text-[#2961CD] text-[14px] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-[380px]">
          <div className="flex flex-col gap-y-[25px]">
            <h2 className="text-[24px] font-bold text-[#373737]">
              Already Have a Resume?
            </h2>
            <button className="w-[full] py-[8px] text-[14px]] font-bold text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl">
              Upload File
            </button>
          </div>
          <div className="flex flex-col pt-[30px]  gap-y-[15px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <MdOutlineContactPage className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Summary
                </h2>
              </div>
              <button
                value="summary"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Edit
              </button>
            </div>
            <h2>{singleJobseekar?.summary?.summary}</h2>
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <GoHistory className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Work History
                </h2>
              </div>
              <button
                value="workhistory"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.workhistory?.map((ele,i)=>(
              <div>
              <h2 className="text-[16px] text-[#373737]">
                Job Title:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.designation}
                </span>
              </h2>
              <h2 className="text-[16px] text-[#373737]">
                Company:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.company}
                </span>
              </h2>
              <h2 className="text-[16px] text-[#373737]">
                Duration:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.fromdate} to{" "}
                  {ele.presentdate}
                </span>
              </h2>
              <h2 className="text-[16px] text-[#373737]">
                City:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.city}
                </span>
              </h2>
            </div>
            ))}
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <FaRegFolder className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Project
                </h2>
              </div>
              <button
                value="project"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.project?.map((ele,i)=>(
              <div key={i}>
              <h2 className="text-[16px] text-[#373737]">
                Project Title:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.projecttitle}
                </span>
              </h2>
              <h2 className="text-[16px] text-[#373737]">
                Company:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.company}
                </span>
              </h2>
              <h2 className="text-[16px] text-[#373737]">
                Project URL:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.projectlink}
                </span>
              </h2>
              <h2 className="text-[16px] text-[#373737]">
                Tools:{" "}
                <span className="text-[16px] text-[#767676]">
                  {ele.tool}
                </span>
              </h2>
            </div>
            ))
              
            }
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <MdOutlineStars className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Certifications
                </h2>
              </div>
              <button
                value="certification"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.certification && (
              <div>
                <h2 className="text-[16px] text-[#373737]">
                  Certificate Title:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.certification?.name}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  License Number:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.certification?.licenseno}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  Certificate URL:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.certification?.certification_url}
                  </span>
                </h2>
                <h2 className="text-[16px] text-[#373737]">
                  Completion Date:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.certification?.completion_date}
                  </span>
                </h2>
              </div>
            )}
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <BiBarChart className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">Skills</h2>
              </div>
              <button
                value="skills"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap justify-between gap-x-[60px] gap-y-[20px]">
            {singleJobseekar?.skills?.map((ele, i) => (
              <div key={i} className="flex flex-col gap-y-[10px]">
                <div className="flex justify-between w-[160px]">
                  <h2 className="text-[16px] text-[#767676]">{ele.name}</h2>
                  <h2 className="text-[16px] text-[#767676]">{ele.percentage}%</h2>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-purple-700"
                    style={{ width: `${ele.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
            </div>

            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <MdOutlineLocationOn className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Preferred Job City
                </h2>
              </div>
              <button
                value="Preferred_job_city"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.Preferred_job_city && (
              <div>
                <h2 className="text-[16px] text-[#373737]">
                  City:{" "}
                  <span className="text-[16px] text-[#767676]">
                    {singleJobseekar?.Preferred_job_city?.city}
                  </span>
                </h2>
              </div>
            )}
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <FaGalacticRepublic className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Hobbies/Activites
                </h2>
              </div>
              <button
                value="hobbies"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.hobbies && (
              <div className="flex gap-2 text-[16px] text-[#373737]">
                Hobbies:
                {singleJobseekar?.hobbies?.map((ele, i) => (
                  <h2 key={i} className=" text-[16px] text-[#767676]">
                    {ele.hobby},
                  </h2>
                ))}
              </div>
            )}
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <MdOutlineLanguage className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  Languages
                </h2>
              </div>
              <button
                value="languages"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.languages && (
            <div className="flex gap-2 text-[16px] text-[#373737]">
              Languages:
              {singleJobseekar?.languages?.map((ele, i) => (
                <h2 key={i} className=" text-[16px] text-[#767676]">
                  {ele.language},
                </h2>
              ))}
            </div>
            )}
            <div className="border border-[#d4d4d8]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[15px] items-center">
                <GiMeepleGroup className="w-[24px] h-[24px]" />
                <h2 className="text-[18px] font-bold text-[#373737]">
                  References
                </h2>
              </div>
              <button
                value="reference"
                className="text-[14px] text-[#2961CD] font-normal"
                onClick={handlePopup}
              >
                Add
              </button>
            </div>
            {singleJobseekar?.reference && (
              <div>
            <h2 className="text-[16px] text-[#373737]">
              Name:{" "}
              <span className="text-[16px] text-[#767676]">
                {singleJobseekar?.reference?.name}
              </span>
            </h2>
            <h2 className=" text-[16px] text-[#373737]">
              Company:{" "}
              <span className=" text-[16px] text-[#767676]">
                {singleJobseekar?.reference?.company}
              </span>
            </h2>
            <h2 className="text-[16px] text-[#373737]">
              Email:{" "}
              <span className="text-[16px] text-[#767676]">
                {singleJobseekar?.reference?.email}
              </span>
            </h2>
            <h2 className="text-[16px] text-[#373737]">
              Contact No:{" "}
              <span className="text-[16px] text-[#767676]">
                {singleJobseekar?.reference?.contact_no}
              </span>
            </h2>
            </div>
            )}
            <div className="border border-[#d4d4d8]"></div>
          </div>
        </div>
        <div
          className="flex flex-col items-center  w-[305px] gap-y-[35px] py-[30px] rounded-xl"
          style={{ boxShadow: "0px 0px 17px 0px #0000001C" }}
        >
          <div className="flex items-center gap-x-[20px]">
            <FaRegUser />
            <h2 className="text-[18px] text-[#373737] font-bold">
              Profile Strength
            </h2>
          </div>
          <div>

          <CircularProgressBar dynamicValue={dynamicValue}/>
          </div>
          <button className="py-3 w-[280px] font-bold text-[14px] border border-[#635EA3] text-[#635EA3] rounded-xl">
            Download CV
          </button>
        </div>

        <div>
          <PopupComponent state={popup} setPopup={setPopup} value={value} />
        </div>
        <div>
        
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ReviewProfile;
