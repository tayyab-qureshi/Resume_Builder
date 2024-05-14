import React, { useState } from 'react'
import { loginJobseekar } from '../../Actions/Action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const nevigate =  useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id]: value,
        }));
      };
   
    const handleSubmit = () => {
        console.log(formData);
        const { email, password } = formData;

        const user = localStorage.getItem("user")
    
        if(user !== null){
            localStorage.clear("user")
            dispatch(loginJobseekar(email, password));
        }
        else{
            dispatch(loginJobseekar(email, password));
    
        }
        setFormData({
            email: "",
            password: ""
        })

        setTimeout(() => {
            checkLogedUser()
         }, 1000);
    }

    const checkLogedUser=()=>{

        const user=localStorage.getItem("user")
    
        if(user !==null){
            nevigate("/basicinfo")
        }else{
            alert("you can't login")
        }
      }
  return (
    <div className="h-[460px] relative">
    <img
      src="/img/Ellipse 6 (Stroke).png"
      alt=""
      className="absolute top-[34px]"
    />
    <img src="/img/Ellipse 4.png" alt="" className="absolute top-0" />
    <div className="absolute top-[103px] left-[167px]">
      <h1 className="w-[613px] h-[152px] tracking-tight text-[#222222] leading-[76px]  text-[64px] font-extrabold">
        Find Your <span className="text-[#635EA3]">Blockchain Dev</span> Job
        Today
      </h1>
      <p className="w-[519px] h-[60px] mt-[27px] text-[22px] leading-[30px] tracking-[2%] font-normal">
        Discover the leading companies in the blockchain industry and find job
        opportunities.
      </p>
      <button className="w-[360px] h-[54px] mt-[30px] text-[#ffffff] rounded-xl bg-gradient-to-r from-[#49478C] to-[#9756FF] text-[14px] leading-[24px]">
        Create Profile
      </button>
    </div>
    <div className="relative w-[fit-content] top-[69px] left-[837px]">
      <img src="/img/Ellipse 2.png" alt="" />
      <img
        src="/img/Ellipse 1.png"
        alt=""
        className="absolute top-[32px] left-[31px]"
      />
    </div>
    <div className="signup px-[55px] py-[20px] w-[432px] bg-[#ffffff] absolute top-[28px] right-[60px] rounded-xl flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className=" text-[24px] text-[#373737] font-extrabold tracking-[3px]">
          Login
        </h1>
        <div className="flex">
          <button className="bg-[#635EA3] px-[10px] py-[6px] rounded-tl-[5px] rounded-bl-[5px] text-[14px] text-[#ffffff] font-bold tracking-[2%] leading-[19px]">
            Job seeker
          </button>
          <button className="border border-[#9D9E9E] px-[10px] py-[6px] text-[14px] text-[#979696] font-bold tracking-[2%] leading-[19px] rounded-tr-[5px] rounded-br-[5px]">
            Employer
          </button>
        </div>
      </div>

      <label
        htmlFor="email"
        className="pt-[20px] pb-[8px] text-[#252525] text-[14px] tracking-[2%] leading-[19px] font-normal "
      >
        Email <span className="text-[#FF3F56]">*</span>
      </label>
      <input
        type="text"
        id="email"
        placeholder="Enter email"
        className="pl-[16px] py-[8px] border border-[#B0B0B0] w-[323px] rounded-xl placeholder:text-[#79696] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[14px]"
        value={formData.email}
        onChange={handleChange}
      />

 

     

      <label
        htmlFor="password"
        className="pt-[20px] pb-[8px] text-[#252525] text-[14px] tracking-[2%] leading-[19px] font-normal "
      >
        Password <span className="text-[#FF3F56]">*</span>
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        className="pl-[16px] py-[8px] border border-[#B0B0B0] w-[323px] rounded-xl placeholder:text-[#79696] placeholder:font-normal placeholder:tracking-[2%] placeholder:text-[14px]"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        className="w-[323px] py-[8px] mt-[30px] text-[#ffffff] rounded-xl bg-gradient-to-r from-[#49478C] to-[#9756FF] text-[14px] leading-[24px]"
      >
        Login
      </button>

      <div className="flex items-center pt-[20px] gap-[13px]">
        <div className="border border-[#979696] w-[107px]"></div>
        <p className="text-[12px] text-[#979696] leading-[16px]">
          or login with
        </p>
        <div className="border border-[#979696] w-[107px]"></div>
      </div>
      <div className="flex items-center justify-center gap-[14px] pt-[20px]">
        <img src="/img/google.png" alt="" />
        <img src="/img/facebook.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default LoginForm
