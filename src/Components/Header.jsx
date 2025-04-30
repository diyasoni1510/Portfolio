import React, { useState } from "react";
import girl from "../images/girl.jpg";
import about from "../images/about.jpg";
import kessel from "../images/kesselmann.png";
import nute from "../images/nute.png";
import inrx from "../images/inrx.png";
import care from "../images/care.png";
import { FaDownload, FaNodeJs } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import Hire from "./Hire";
import react from "../images/react.svg";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { RiExchangeLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";

const Header = () => {
  const [projectName, setProjectName] = useState("All");
  return (
    <>
      {/* <div
        className="flex flex-col items-center justify-center text-white text-4xl font-bold py-5 bg-gradient-to-tr from-black via-purple-900 to-black"
        // style={{
        //   background:
        //     "linear-gradient(to right, black 40%, rgb(38 15 58) 55%, rgb(107, 33, 168) 100%)",
        // }}
      >
        <div className="flex justify-center items-center text-xs md:text-sm font-normal mx-auto bg-purple-950 rounded-3xl mb-10 md:mb-0">
          <a
            href="tel:8318015667"
            className="hover:bg-black duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoMdCall size={24} />
            8318015667
          </a>

          <a
            href="mailto:sonidiya126@gmail.com"
            className="hover:bg-black duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoIosMail size={24} />
            sonidiya126@gmail.com
          </a>
        </div>
        <div
          className="grid  grid-cols-2 p-5 md:p-20 md:pt-16 justify-between items-center
        "
        >
          <div className="col-span-2 lg:col-span-1  font-light">
            <h3 className="mb-4 uppercase text-gray-400 font-normal text-lg">
              full stack web developer
            </h3>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Divyanjali
            </h1>
            <h1 className="mb-4 font-bold  text-5xl md:text-7xl uppercase">
              Soni
            </h1>
            <div className="mb-4 text-lg border-l pl-2 font-normal text-gray-400 border-gray-600">
              <p>
                MERN Stack Developer with 2 years of experience in building
                scalable, high-performance web applications using React,
                Node.js, and MongoDB.
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center relative">
            <img src={girl} alt="" className="lg:h-[450px] rounded-3xl" />
            <a
              href="https://drive.google.com/file/d/1O452f2cFgO1IOV00bVNtISQMl9nP-6Gc/view"
              download
              target="_blank"
              className="absolute -bottom-5 bg-purple-700 w-16 h-16 flex justify-center items-center p-2 rounded-full bg-opacity-60 -right-2 md:-right-10 cursor-pointer"
            >
              <FaDownload size={24} />
            </a>
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center justify-center text-[#000000] text-4xl font-bold py-5 bg-[#FFFFFF]">
        <div className="flex justify-center items-center text-xs md:text-sm font-normal mx-auto bg-[#F5F5F5] rounded-3xl mb-10 md:mb-0">
          <a
            href="tel:8318015667"
            className="hover:bg-[#000000] duration-500 flex items-center gap-2 rounded-3xl transition text-[#000000] px-5 md:px-10 py-3 font-medium"
          >
            <IoMdCall size={24} />
            8318015667
          </a>

          <a
            href="mailto:sonidiya126@gmail.com"
            className="hover:bg-[#000000] duration-500 flex items-center gap-2 rounded-3xl transition text-[#000000] px-5 md:px-10 py-3 font-medium"
          >
            <IoIosMail size={24} />
            sonidiya126@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 p-5 md:p-20 md:pt-16 justify-between items-center">
          <div className="col-span-2 lg:col-span-1 font-light">
            <h3 className="mb-4 uppercase text-gray-500 font-normal text-lg">
              full stack web developer
            </h3>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Divyanjali
            </h1>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Soni
            </h1>
            <div className="mb-4 text-lg border-l pl-2 font-normal text-gray-500 border-gray-300">
              <p>
                MERN Stack Developer with 2 years of experience in building
                scalable, high-performance web applications using React,
                Node.js, and MongoDB.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center relative">
            <img src={girl} alt="" className="lg:h-[450px] rounded-3xl" />
            <a
              href="https://drive.google.com/file/d/1O452f2cFgO1IOV00bVNtISQMl9nP-6Gc/view"
              download
              target="_blank"
              className="absolute -bottom-5 bg-[#F5F5F5] w-16 h-16 flex justify-center items-center p-2 rounded-full bg-opacity-60 -right-2 md:-right-10 cursor-pointer"
            >
              <FaDownload size={24} />
            </a>
          </div>
        </div>
      </div>*/}

      {/* <div className="flex flex-col items-center justify-center text-[#0A192F] text-4xl font-bold py-5 bg-[#F0F4F8]">
        <div className="flex justify-center items-center text-xs md:text-sm font-normal mx-auto bg-[#14B8A6] rounded-3xl mb-10 md:mb-0">
          <a
            href="tel:8318015667"
            className="hover:bg-[#0A192F] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoMdCall size={24} />
            8318015667
          </a>

          <a
            href="mailto:sonidiya126@gmail.com"
            className="hover:bg-[#0A192F] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoIosMail size={24} />
            sonidiya126@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 p-5 md:p-20 md:pt-16 justify-between items-center">
          <div className="col-span-2 lg:col-span-1 font-light">
            <h3 className="mb-4 uppercase text-[#64748B] font-normal text-lg">
              full stack web developer
            </h3>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Divyanjali
            </h1>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Soni
            </h1>
            <div className="mb-4 text-lg border-l pl-2 font-normal text-[#64748B] border-[#CBD5E1]">
              <p>
                MERN Stack Developer with 2 years of experience in building
                scalable, high-performance web applications using React,
                Node.js, and MongoDB.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center relative">
            <img src={girl} alt="" className="lg:h-[450px] rounded-3xl" />
            <a
              href="https://drive.google.com/file/d/1O452f2cFgO1IOV00bVNtISQMl9nP-6Gc/view"
              download
              target="_blank"
              className="absolute -bottom-5 bg-[#14B8A6] w-16 h-16 flex justify-center items-center p-2 rounded-full bg-opacity-80 -right-2 md:-right-10 cursor-pointer"
            >
              <FaDownload size={24} />
            </a>
          </div>
        </div>
      </div> */}

      {/*<div className="flex flex-col items-center justify-center text-[#3B0D11] text-4xl font-bold py-5 bg-[#FDF6E3]">
        <div className="flex justify-center items-center text-xs md:text-sm font-normal mx-auto bg-[#FF6B6B] rounded-3xl mb-10 md:mb-0">
          <a
            href="tel:8318015667"
            className="hover:bg-[#3B0D11] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoMdCall size={24} />
            8318015667
          </a>

          <a
            href="mailto:sonidiya126@gmail.com"
            className="hover:bg-[#3B0D11] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoIosMail size={24} />
            sonidiya126@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 p-5 md:p-20 md:pt-16 justify-between items-center">
          <div className="col-span-2 lg:col-span-1 font-light">
            <h3 className="mb-4 uppercase text-[#8C3F42] font-normal text-lg">
              full stack web developer
            </h3>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Divyanjali
            </h1>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Soni
            </h1>
            <div className="mb-4 text-lg border-l pl-2 font-normal text-[#8C3F42] border-[#FFB4B4]">
              <p>
                MERN Stack Developer with 2 years of experience in building
                scalable, high-performance web applications using React,
                Node.js, and MongoDB.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center relative">
            <img src={girl} alt="" className="lg:h-[450px] rounded-3xl" />
            <a
              href="https://drive.google.com/file/d/1O452f2cFgO1IOV00bVNtISQMl9nP-6Gc/view"
              download
              target="_blank"
              className="absolute -bottom-5 bg-[#FF6B6B] w-16 h-16 flex justify-center items-center p-2 rounded-full bg-opacity-80 -right-2 md:-right-10 cursor-pointer"
            >
              <FaDownload size={24} />
            </a>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-center text-[#1F2937] text-4xl font-bold py-5 bg-[#E5E5E5]">
        <div className="flex justify-center items-center text-xs md:text-sm font-normal mx-auto bg-[#6366F1] rounded-3xl mb-2 md:mb-0">
          <a
            href="tel:8318015667"
            className="hover:bg-[#1F2937] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoMdCall size={24} />
            8318015667
          </a>

          <a
            href="mailto:sonidiya126@gmail.com"
            className="hover:bg-[#1F2937] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoIosMail size={24} />
            sonidiya126@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 p-5 md:p-20 md:pt-16 justify-between items-center">
          <div className="col-span-2 lg:col-span-1 font-light">
            <h3 className="mb-4 uppercase text-[#6B7280] font-normal text-sm md:text-lg">
              full stack web developer
            </h3>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase text-[#6366F1]">
              Divyanjali
            </h1>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase text-[#6366F1]">
              Soni
            </h1>
            <div className="mb-4 text-sm md:text-lg border-l pl-2 font-normal text-[#6B7280] border-[#6B7280]">
              <p>
                MERN Stack Developer with 2 years of experience in building
                scalable, high-performance web applications using React,
                Node.js, and MongoDB.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center relative">
            <img src={girl} alt="" className="lg:h-[450px] rounded-3xl" />
            <a
              href="https://drive.google.com/file/d/1O452f2cFgO1IOV00bVNtISQMl9nP-6Gc/view"
              download
              target="_blank"
              className="absolute -bottom-5 bg-[#6366F1] w-16 h-16 flex justify-center items-center p-2 rounded-full bg-opacity-80 -right-2 md:-right-10 cursor-pointer"
            >
              <FaDownload size={24} color="white" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center text-[#4A154B] text-4xl font-bold py-5 bg-[#FFF0F6]">
        <div className="flex justify-center items-center text-xs md:text-sm font-normal mx-auto bg-[#FF80AB] rounded-3xl mb-10 md:mb-0">
          <a
            href="tel:8318015667"
            className="hover:bg-[#4A154B] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoMdCall size={24} />
            8318015667
          </a>

          <a
            href="mailto:sonidiya126@gmail.com"
            className="hover:bg-[#4A154B] duration-500 flex items-center gap-2 rounded-3xl transition text-white px-5 md:px-10 py-3 font-medium"
          >
            <IoIosMail size={24} />
            sonidiya126@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 p-5 md:p-20 md:pt-16 justify-between items-center">
          <div className="col-span-2 lg:col-span-1 font-light">
            <h3 className="mb-4 uppercase text-[#B85C9E] font-normal text-lg">
              full stack web developer
            </h3>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Divyanjali
            </h1>
            <h1 className="mb-4 font-bold text-5xl md:text-7xl uppercase">
              Soni
            </h1>
            <div className="mb-4 text-lg border-l pl-2 font-normal text-[#B85C9E] border-[#F8BBD0]">
              <p>
                MERN Stack Developer with 2 years of experience in building
                scalable, high-performance web applications using React,
                Node.js, and MongoDB.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center relative">
            <img src={girl} alt="" className="lg:h-[450px] rounded-3xl" />
            <a
              href="https://drive.google.com/file/d/1O452f2cFgO1IOV00bVNtISQMl9nP-6Gc/view"
              download
              target="_blank"
              className="absolute -bottom-5 bg-[#FF80AB] w-16 h-16 flex justify-center items-center p-2 rounded-full bg-opacity-80 -right-2 md:-right-10 cursor-pointer"
            >
              <FaDownload size={24} />
            </a>
          </div>
        </div>
      </div> */}

      {/* about us  */}
      {/* <div
        style={{
          background:
            "linear-gradient(to right, black 40%, rgb(38 15 58) 55%, rgb(107, 33, 168) 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-start md:items-end gap-5 md:gap-20 relative text-white p-5 md:p-20">
          <div className="md:absolute -top-10 right-1/3 me-11">
            <h1 className="text-6xl md:text-8xl right-0">About</h1>
            <h1 className="text-6xl md:text-8xl right-0">Me</h1>
          </div>
          <div className="w-1/3 hidden md:block">
            <img src={about} alt="" className="rounded-full h-3/4" />
          </div>
          <div className="w-full md:w-1/4  font-normal mb-10">
            <p>
              As a skilled MERN stack developer, I create dynamic, scalable web
              applications. With 2+ years of experience in React.js and Node.js,
              I deliver efficient solutions. Let's work together to bring your
              ideas to life!
            </p>
            <div className="flex justify-between my-5">
              <div>
                <h1 className="text-5xl font-bold">10+</h1>
                <p>Projects Complete</p>
              </div>
              <div>
                <h1 className="text-5xl font-bold">2+</h1>
                <p>Years Experience</p>
              </div>
            </div>
            <a
              href="#HireMe"
              className="bg-gradient-to-bl from-violet-600 to-purple-950 hover:from-purple-700 hover:to-violet-950 py-2 font-semibold px-10  mt-10 rounded"
              // style={{ boxShadow: "0px 0px 5px #fff" }}
            >
              Hire me
            </a>
          </div>
        </div>
      </div> */}

      <div style={{ backgroundColor: "#E5E5E5" }} className="pt-10 md:pt-0">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-end gap-5 md:gap-20 relative text-[#1F2937] p-5 md:p-20">
          <div className="md:absolute -top-10 right-1/3 me-11">
            <h1 className="text-6xl md:text-8xl font-bold text-[#6366F1]">
              About
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold text-[#6366F1]">
              Me
            </h1>
          </div>

          <div className="w-1/3 hidden md:block">
            <img src={about} alt="" className="rounded-full h-3/4 shadow-lg" />
          </div>

          <div className="w-full md:w-1/4 font-normal mb-10">
            <p className="text-lg text-[#374151] leading-relaxed">
              As a skilled MERN stack developer, I create dynamic, scalable web
              applications. With 2+ years of experience in React.js and Node.js,
              I deliver efficient solutions. Let's work together to bring your
              ideas to life!
            </p>

            <div className="flex justify-between my-5">
              <div>
                <h1 className="text-5xl font-bold text-[#6366F1]">10+</h1>
                <p className="text-[#6B7280]">Projects Complete</p>
              </div>
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-[#6366F1]">2+</h1>
                <p className="text-[#6B7280]">Years Experience</p>
              </div>
            </div>

            <a
              href="#HireMe"
              className="bg-[#6366F1] hover:bg-[#4F46E5] text-white py-2 font-semibold px-10 rounded shadow-md transition-all duration-300"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>

      {/* project section  */}
      {/* <div
        style={{
          background:
            "linear-gradient(to right, black 40%, rgb(38 15 58) 55%, rgb(107, 33, 168) 100%)",
        }}
      >
        <div className="justify-center items-start md:items-end gap-5 md:gap-20 text-white md:pt-0">
          <h1 className="text-6xl md:text-8xl right-0 md:text-center p-5">
            Projects
          </h1>
          <div className="border-t border-b w-full flex mt-5 md:mt-10 overflow-x-scroll md:overflow-x-hidden whitespace-nowrap md:justify-center">
            <div
              className="text-xs md:text-base py-2 md:py-5 md:px-10 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-purple-950 text-center px-5 border-l border-r"
              onClick={() => setProjectName("All")}
            >
              All
            </div>
            <div
              className="text-xs md:text-base py-2 md:py-5 md:px-10 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-purple-950 text-center px-5 border-l border-r"
              onClick={() => setProjectName("frontend")}
            >
              Frontend Development
            </div>
            <div
              className="text-xs md:text-base py-2 md:py-5 md:px-10 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-purple-950 text-center px-5 border-l border-r"
              onClick={() => setProjectName("mern")}
            >
              MERN Development
            </div>
            <div
              className="text-xs md:text-base py-2 md:py-5 md:px-10 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-purple-950 text-center px-5 border-l border-r"
              onClick={() => setProjectName("statamic")}
            >
              Statamic Development
            </div>
            <div
              className="text-xs md:text-base py-2 md:py-5 md:px-10 cursor-pointer hover:bg-gradient-to-tr from-gray-900 to-purple-950 text-center px-5 border-l border-r"
              onClick={() => setProjectName("backend")}
            >
              Backend Development
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10 mt-10 px-5 md:px-40">
            <div
              className={`group relative col-span-2 md:col-span-1 aspect-square rounded-full bg-violet-500 w-full overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
            
              <img
                src={kessel}
                alt=""
                className="w-full object-cover transition duration-300 group-hover:blur-sm"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://kesselmann.co.uk"
                  target="_blank"
                  className="bg-white text-black text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Kesselmann <LuArrowUpRight className="inline" />
                </a>
              </button>
            </div>
            <div
              className={`group relative col-span-2 md:col-span-1 aspect-square rounded-full bg-violet-500 w-full overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={nute}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="bg-white text-black text-xs md:text-base px-4 py-2 rounded-full shadow-md">
                  Nute <LuArrowUpRight className="inline" />
                </span>
              </button>
            </div>
            <div
              className={`group relative col-span-2 md:col-span-1 aspect-square rounded-full bg-violet-500 w-full overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={care}
                alt=""
                className="w-full object-cover transition duration-300 group-hover:blur-sm"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://mycareconcierge.com/"
                  target="_blank"
                  className="bg-white text-black text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Care Concierge <LuArrowUpRight className="inline" />
                </a>
              </button>
            </div>
            <div
              className={`group relative col-span-2 md:col-span-1 aspect-square rounded-full bg-violet-500 w-full overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={inrx}
                alt=""
                className="w-full object-cover transition duration-300 group-hover:blur-sm"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://inrx.io/"
                  target="_blank"
                  className="bg-white text-black text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Inrx <LuArrowUpRight className="inline" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div style={{ backgroundColor: "#E5E5E5" }}>
        <div className="text-[#6366F1] py-10 px-5 md:px-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-10">Services</h1>

          <div className="grid grid-cols-4  gap-8 md:gap-10">
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus aliquam eaque nesciunt laborum reiciendis, corrupti
                in. Illum voluptas vitae, perspiciatis numquam commodi, dolore
                laboriosam sapiente nemo quia repellendus quo saepe rem ad odio
                voluptatum in!
              </p>
            </div>
            <div className="bg-gray-100 group relative aspect-square rounded-2xl">
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4  py-2 w-[200px] flex items-center px-2 bg-blue-500 bg-opacity-10 justify-center text-sm">
                <span className="">CUSTOMISABLE</span>
              </div>
              <div className="w-full p-5">
                <h3 className="text-3xl font-bold">Frontend Development</h3>
                <div className="flex flex-wrap flex-col gap-3 my-5">
                  <div className="flex items-center gap-2">
                    <FaReact />
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTailwindcss />
                    <span>Tailwind</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbBrandRedux />
                    <span>Redux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiLogoTypescript />
                    <span>Typescipt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMobileAlt />
                    <span>Responsive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiExchangeLine />
                    <span>API Integration</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={nute}
                alt="Nute"
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="bg-[#3B82F6] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md">
                  Nute <LuArrowUpRight className="inline" />
                </span>
              </div>
            </div>
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={care}
                alt="Care Concierge"
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://mycareconcierge.com/"
                  target="_blank"
                  className="bg-[#3B82F6] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Care Concierge <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div style={{ backgroundColor: "#E5E5E5" }} className="pb-5">
        <div className="text-[#6366F1] py-10 px-5 md:px-20">
          <div className="grid grid-cols-5 gap-8 md:gap-10">
            <div className="col-span-5 lg:col-span-2">
              <h1 className="text-6xl md:text-8xl font-bold mb-5">Services</h1>
              <p className="text-[#374151]">
                I specialize in crafting modern, responsive interfaces using
                React. From intuitive UIs to full-stack MERN applications, I
                build scalable solutions tailored to your goals. Whether it's a
                sleek frontend or a powerful backend API, I deliver clean,
                efficient code. Let’s turn your ideas into high-performance web
                apps that grow with your business.
              </p>
            </div>
            <div className="col-span-5 lg:col-span-3">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-10">
                <div className="col-span-3">
                  <div className="bg-gray-100 relative rounded-2xl">
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4  py-2 w-[200px] flex items-center px-2 bg-blue-500 bg-opacity-10 justify-center text-sm">
                      <span className="">CUSTOMISABLE</span>
                    </div>
                    <div className="w-full p-5">
                      <h3 className="text-3xl font-bold">
                        Frontend Development
                      </h3>
                      <div className="flex flex-wrap gap-3 my-5">
                        <div className="flex items-center gap-2">
                          <FaReact />
                          <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiTailwindcss />
                          <span>Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TbBrandRedux />
                          <span>Redux</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BiLogoTypescript />
                          <span>Typescipt</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMobileAlt />
                          <span>Responsive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RiExchangeLine />
                          <span>API Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="bg-gray-100 relative rounded-2xl">
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4  py-2 w-[200px] flex items-center px-2 bg-blue-500 bg-opacity-10 justify-center text-sm">
                      <span className="">CUSTOMISABLE</span>
                    </div>
                    <div className="w-full p-5">
                      <h3 className="text-3xl font-bold">MERN Development</h3>
                      <div className="flex flex-wrap gap-3 my-5">
                        <div className="flex items-center gap-2">
                          <FaReact />
                          <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiMongodb />
                          <span>MongoDb</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiExpress />
                          <span>Express js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaNodeJs />
                          <span>Node js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiTailwindcss />
                          <span>Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TbBrandRedux />
                          <span>Redux</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BiLogoTypescript />
                          <span>Typescipt</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMobileAlt />
                          <span>Responsive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RiExchangeLine />
                          <span>API Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-span-4">
                  <div className="bg-gray-100 relative rounded-2xl">
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4  py-2 w-[200px] flex items-center px-2 bg-blue-500 bg-opacity-10 justify-center text-sm">
                      <span className="">CUSTOMISABLE</span>
                    </div>
                    <div className="w-full p-5">
                      <h3 className="text-3xl font-bold">
                        Frontend Development
                      </h3>
                      <div className="flex flex-wrap gap-3 my-5">
                        <div className="flex items-center gap-2">
                          <FaReact />
                          <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiTailwindcss />
                          <span>Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TbBrandRedux />
                          <span>Redux</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BiLogoTypescript />
                          <span>Typescipt</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMobileAlt />
                          <span>Responsive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RiExchangeLine />
                          <span>API Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#E5E5E5" }}>
        <div className="text-[#6366F1] py-10 px-5 md:px-20">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-10">
            Projects
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {/* Project 1 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={kessel}
                alt="Kesselmann"
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://kesselmann.co.uk"
                  target="_blank"
                  className="bg-[#3B82F6] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Kesselmann <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={nute}
                alt="Nute"
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="bg-[#3B82F6] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md">
                  Nute <LuArrowUpRight className="inline" />
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={care}
                alt="Care Concierge"
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://mycareconcierge.com/"
                  target="_blank"
                  className="bg-[#3B82F6] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Care Concierge <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden ${
                projectName === "mern" || projectName === "All"
                  ? "block"
                  : "hidden"
              }`}
            >
              <img
                src={inrx}
                alt="Inrx"
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href="https://inrx.io/"
                  target="_blank"
                  className="bg-[#3B82F6] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md"
                >
                  Inrx <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hire me  */}
      <Hire />

      {/* <div className="relative min-h-screen bg-gradient-to-tr from-black via-purple-900 to-black">
       
      </div> */}
      <footer className="h-16 w-full bg-blue-500 bg-opacity-10 backdrop-blur-md bottom-0">
        <p className="text-gray-800 text-center p-4 mb-0">
          Made by Love and Passion 🤍
        </p>
      </footer>
    </>
  );
};

export default Header;
