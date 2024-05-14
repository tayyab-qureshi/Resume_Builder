import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { getSinglejobseekar } from "../Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import { ImStatsBars } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { TbAwardFilled } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsPersonWorkspace } from "react-icons/bs";


const PDFDownload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { singleJobseekar } = useSelector((state) => state.singlejobseekar);

  useEffect(() => {
    dispatch(getSinglejobseekar(user.id));
  }, []);

  const imagelink = user.image;
  const createPDF = async () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("CV.pdf");
  };

  return (
    <div className=" flex flex-col px-[40px]">
      <div id="pdf">
        <div className="flex justify-between bg-gradient-to-r from-[#49478C] to-[#9756FF] py-5 px-5">
          <div className="flex flex-col gap-y-[20px]">
            <div className="flex gap-[30px]">
              <img
                src={imagelink}
                alt=""
                className="rounded-[10%] w-[150px] h-[150px]"
              />
              <div className="flex flex-col gap-y-[10px] pt-[10px]">
                <h1 className="text-[26px] font-bold text-white">
                  {singleJobseekar?.name}
                </h1>
                <p className="text-[14px] font-normal text-gray-200">
                  {singleJobseekar?.experienceinfo?.designation}
                </p>
              </div>
            </div>
            <p className="text-gray-200">{singleJobseekar?.summary?.summary}</p>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <h2 className="text-white text-[26px]">Contact Info</h2>
            <p className="text-gray-200">{singleJobseekar?.phone}</p>
            <p className="text-gray-200">{singleJobseekar?.email}</p>
            <hr />
            <p className="w-[300px] text-gray-200">
              {singleJobseekar?.contactinfo?.address1}{" "}
              {singleJobseekar?.contactinfo?.address2},{" "}
              {singleJobseekar?.contactinfo?.country}
            </p>
          </div>
        </div>
        <div className="px-5">
          <div className="flex items-center gap-x-2  text-[26px] pt-[20px]">
            <h2>{<ImStatsBars />}</h2> <h2>Strengths & Skills</h2>
          </div>
          <hr className="mt-[10px]" />

          <div className="flex flex-wrap justify-between w-4/5 gap-y-[20px] pt-[20px]">
            {singleJobseekar?.skills?.map((ele, i) => (
              <div key={i} className="flex flex-col gap-y-[20px] w-[300px]">
                <div className="flex justify-between">
                  <h2>{ele.name}</h2>
                  <h2>{ele.percentage}%</h2>
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
        </div>
        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <FaGraduationCap />
            Academics
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 justify-between pt-[20px]">
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Title</h2>
              <p className="text-[14px]">
                {singleJobseekar?.education?.degreetitle}
              </p>
            </div>
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Institute</h2>
              <p className="text-[14px]">
                {singleJobseekar?.education?.institute}
              </p>
            </div>
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Location</h2>
              <p className="text-[14px]">
                {singleJobseekar?.education?.location}
              </p>
            </div>
            <div className="flex flex-col gap-y-[10px] w-1/4">
              <h2 className="text-[16px] font-bold">Date</h2>
              <p className="text-[14px]">
                {singleJobseekar?.education?.yearcompletion}
              </p>
            </div>
          </div>
        </div>

        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <TbAwardFilled />
            Awards
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 flex-col justify-between pt-[20px]">
            <div className="flex justify-between">
              <h2 className="text-[16px] font-bold w-1/4">Title</h2>
              <h2 className="text-[16px] font-bold w-1/4">Authority</h2>
              <h2 className="text-[16px] font-bold w-1/4">Link</h2>
              <h2 className="text-[16px] font-bold w-1/4">Date</h2>
            </div>
            {singleJobseekar?.awards?.map((ele, i) => (
              <div
                key={i}
                className="flex pt-[10px] justify-between items-center"
              >
                <p className="text-[14px] w-1/4">{ele.title}</p>
                <p className="text-[14px] w-1/4">{ele.authority}</p>
                <p className="text-[14px] w-1/4">{ele.award_url}</p>
                <p className="text-[14px] w-1/4">{ele.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <HiOutlineClipboardDocumentList />
            Work History
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 flex-col justify-between pt-[20px]">
            <div className="flex justify-between">
              <h2 className="text-[16px] font-bold w-1/4">Company</h2>
              <h2 className="text-[16px] font-bold w-1/4">Designation</h2>
              <h2 className="text-[16px] font-bold w-1/4">Duration</h2>
              <h2 className="text-[16px] font-bold w-1/4">Location</h2>
            </div>
            {singleJobseekar?.workhistory?.map((ele, i) => (
              <div
                key={i}
                className="flex pt-[10px] justify-between items-center"
              >
                <p className="text-[14px] w-1/4">{ele.company}</p>
                <p className="text-[14px] w-1/4">{ele.designation}</p>
                <p className="text-[14px] w-1/4">
                  {ele.fromdate} to {ele.presentdate}
                </p>
                <p className="text-[14px] w-1/4">{ele.city}</p>

              </div>
            ))}
          </div>
        </div>

        <div className="px-5">
          <h2 className="flex items-center gap-2 text-[26px] pt-[20px]">
            <BsPersonWorkspace />
            Project
          </h2>
          <hr className="mt-[10px]" />
          <div className="flex w-5/5 flex-col justify-between pt-[20px]">
            <div className="flex justify-between">
              <h2 className="text-[16px] font-bold w-1/6">Title</h2>
              <h2 className="text-[16px] font-bold w-1/6">Company</h2>
              <h2 className="text-[16px] font-bold w-1/6">Duration</h2>
              <h2 className="text-[16px] font-bold w-1/6">Projectlink</h2>
              <h2 className="text-[16px] font-bold w-1/6">Tools</h2>
            </div>
            {singleJobseekar?.project?.map((ele, i) => (
              <div
                key={i}
                className="flex pt-[10px] justify-between items-center"
              >
                <p className="text-[14px] w-1/6">{ele.projecttitle}</p>
                <p className="text-[14px] w-1/6">{ele.company}</p>
                <p className="text-[14px] w-1/6">{ele.fromdate} to {ele.presentdate}</p>
                <p className="text-[14px] w-1/6">{ele.projectlink}</p>
                <p className="text-[14px] w-1/6">{ele.tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={createPDF}
        type="button"
        className="bg-gradient-to-r from-[#49478C] to-[#9756FF] text-[20px] rounded-xl font-bold text-white my-10 px-20 py-3 self-center"
      >
        Export PDF
      </button>
    </div>
  );
};

export default PDFDownload;
