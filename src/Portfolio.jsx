import React, { useState } from "react";
import { IoIosCall, IoIosMail, IoMdCall } from "react-icons/io";
import girl1 from "./images/girl1.png";
import splash from "./images/splash.png";
import faq from "./images/faq.webp";
import { FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import ParticleBackground from "./Components/ParticleBackground";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import TestimonialSlider from "./Components/Testimonials";
import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiExchangeLine } from "react-icons/ri";
import nft from "./images/nftImage2.png";
import kessel from "./images/kesselmann.png";
import nute from "./images/nute.png";
import inrx from "./images/inrx.png";
import care from "./images/care.png";
import hahm from "./images/hahm.png";
import chaos from "./images/chaos.png";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const Portfolio = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What types of websites do you develop?",
      answer:
        "We build a wide range of websites, including business sites, online stores, blogs, portfolios, and custom AI-based web apps designed to fit your unique business goals.",
    },
    {
      question: "What is your web development process?",
      answer:
        "Our process involves several key stages: discovery and planning, designing and prototyping, development, thorough testing, deployment, and continuous support afterward.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Website timelines depend on the project's scope and complexity. Most sites take anywhere from a few weeks to a couple of months to complete.",
    },
    {
      question: "Do you provide responsive web design?",
      answer:
        "Absolutely! We focus on building fully responsive websites that work seamlessly across all screen sizes—from desktops to tablets and smartphones.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, we provide regular maintenance and support services to keep your site secure, updated, and running smoothly at all times.",
    },
  ];

  return (
    <>
      {/* <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground /> */}
      <ParticleBackground />
      <div className="bg-transparent relative md:h-screen md:overflow-hidden pb-10 md:pb-0">
        {/* Top Contact Bar */}
        <div className="flex justify-between items-center px-6 md:px-20 py-3 text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 sm:items-center">
            <a
              className="flex items-center gap-2 transition-transform duration-300 transform hover:scale-110"
              href="tel:8318015667"
            >
              <IoMdCall size={18} />
              8318015667
            </a>
            <a
              className="flex items-center gap-2 transition-transform duration-300 transform hover:scale-110"
              href="mailto:sonidiya126@gmail.com"
            >
              <IoIosMail size={18} />
              sonidiya126@gmail.com
            </a>
          </div>
          <button className="mt-2 md:mt-0 text-white shadow-md bg-indigo-500 hover:bg-indigo-700 transition px-6 py-2 rounded-full font-semibold hover:shadow-none">
            CONTACT
          </button>
        </div>

        {/* Navigation */}
        <div className="flex md:flex-row flex-col justify-start gap-5 md:gap-20 items-center px-6 md:px-20 py-6 bg-indigo-100">
          <h1
            className="text-2xl font-bold tracking-wide"
            style={{ textShadow: "2px 2px 4px rgba(99, 102, 241, 0.5)" }}
          >
            DIVYANJALI SONI
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a className="hover:text-indigo-500 underline-offset-4 cursor-pointer transition font-bold">
              ABOUT
            </a>
            <a className="hover:text-indigo-500 underline-offset-4 cursor-pointer transition font-bold">
              PROJECTS
            </a>
            <a className="hover:text-indigo-500 underline-offset-4 cursor-pointer transition font-bold">
              SERVICES
            </a>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 md:py-10 py-0 items-start mt-8 md:mt-0 md:items-center md:h-[80vh]">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold  bg-opacity-50 w-fit text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              Hi, I’m Divyanjali — a Full Stack MERN Developer and your go-to
              tech partner for powerful web solutions.
            </h2>
            {/* <h4 className="text-2xl text-indig">FULL STACK DEVELOPER</h4> */}
            <p className="text-base mb-0">
              Imagination meets execution right here.
              <br />
              Let’s turn your ideas into fully working web magic.
            </p>
            <div className="flex gap-5">
              <div>
                <FaGithub size={24} />
              </div>

              <div>
                <FaLinkedin size={24} />
              </div>
              <div>
                <IoDocumentText size={24} />
              </div>
            </div>
            <button className="mt-2 md:mt-0 text-white shadow-md bg-indigo-500 hover:bg-indigo-700 transition px-6 py-2 rounded-full font-semibold hover:shadow-none">
              HIRE ME
            </button>
          </div>
        </section>

        <div className="hidden md:block absolute top-2 right-0 lg:right-32 z-10">
          <img
            src={girl1}
            alt="Portfolio"
            className=" w-full object-contain"
            style={{ maxHeight: "600px" }}
          />
        </div>
        <div
          className="hidden md:block absolute lg:right-16 -right-20 -bottom-20 
        "
        >
          <img src={splash} alt="" />
        </div>
      </div>

      {/* </div> */}

      <section
        class="px-6 md:py-20 py-10 md:px-20 text-gray-800 relative bg-white"
        id="about"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
            About Me
          </h2>
          <p class="text-lg mb-6 text-gray-600">
            Hi! I’m Divyanjali — a Full Stack MERN Developer and your trusted
            development partner.
          </p>
          <p class="text-base leading-relaxed">
            With over 2 years of hands-on experience, I specialize in building
            responsive, scalable, and intuitive web applications using MongoDB,
            Express.js, React, and Node.js. I’ve helped startups and solo
            founders turn raw ideas into powerful digital products.
            <br />
            <br />
            I’m not just a coder—I’m a problem solver, a UI/UX enthusiast, and
            someone who truly enjoys bringing ideas to life. Whether you need an
            MVP, a dynamic dashboard, or a sleek frontend, I’m ready to
            collaborate.
          </p>
          <p class="text-lg mt-6 font-medium text-indigo-600">
            Ready to bring your imagination into reality? Let’s connect and
            build something great.
          </p>
        </div>
      </section>

      {/* <section
        className="px-6 md:px-20 md:py-20 py-10 relative bg-white"
        id="projects"
      >
        <div class="max-w-4xl mx-auto text-center mb-5">
          <h2 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
            Projects
          </h2>
        </div>
        <div className="bg-indigo-500 bg-opacity-10 grid grid-cols-5 px-20 py-10 rounded-2xl justify-center items-center ">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              NFT Trade
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              natus, laudantium aut veniam ex atque nesciunt sapiente animi ut,
              tempora dicta doloremque, laboriosam perferendis quibusdam. Nobis,
              est! Inventore, pariatur eveniet.
            </p>
            <button className="mt-10 text-white shadow-md bg-indigo-500 hover:bg-indigo-700 transition px-6 py-2 rounded-full font-semibold hover:shadow-none uppercase">
              See this project
            </button>
          </div>
          <div className="col-span-3 flex justify-end items-center ">
            <img
              src={nft}
              alt=""
              width={400}
              className="hover:opacity-50 duration-200 transition-all cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-indigo-500 bg-opacity-10 grid grid-cols-5 px-20 py-10 rounded-2xl justify-center items-center mt-10">
          <div className="col-span-3 flex justify-start items-center ">
            <img
              src={nft}
              alt=""
              width={400}
              className="hover:opacity-50 duration-200 transition-all cursor-pointer"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              NFT Trade
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              natus, laudantium aut veniam ex atque nesciunt sapiente animi ut,
              tempora dicta doloremque, laboriosam perferendis quibusdam. Nobis,
              est! Inventore, pariatur eveniet.
            </p>
            <button className="mt-10 text-white shadow-md bg-indigo-500 hover:bg-indigo-700 transition px-6 py-2 rounded-full font-semibold hover:shadow-none uppercase">
              See this project
            </button>
          </div>
        </div>
      </section> */}

      <div
        className="px-6 md:px-20 md:py-20 py-10 relative bg-white"
        id="projects"
      >
        <div className="text-[#6366F1]">
          {/* <h1 className="text-6xl md:text-8xl font-bold mb-10">Projects</h1> */}
          <h2 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
            Projects
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {/* Project 1 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden block`}
            >
              <img
                src={kessel}
                alt="Kesselmann"
                className="w-full h-full object-cover transition duration-300 blur-sm object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center  opacity-100 transition duration-300">
                <a
                  href="https://kesselmann.co.uk"
                  target="_blank"
                  className="bg-[#6366F1] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md bg-opacity-70"
                >
                  Kesselmann <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>

            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden block`}
            >
              <img
                src={chaos}
                alt="chaos"
                className="w-full h-full object-cover transition duration-300 blur-sm object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center  opacity-100 transition duration-300">
                <a
                  href="https://chaos-v2.vercel.app/"
                  target="_blank"
                  className="bg-[#6366F1] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md bg-opacity-70"
                >
                  Chaos <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>

            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden block`}
            >
              <img
                src={nute}
                alt="Nute"
                className="w-full h-full object-cover transition duration-300 blur-sm object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center  opacity-100 transition duration-300">
                <span className="bg-[#6366F1] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md bg-opacity-70">
                  Nute <LuArrowUpRight className="inline" />
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden block`}
            >
              <img
                src={care}
                alt="Care Concierge"
                className="w-full h-full object-cover transition duration-300 blur-sm object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center  opacity-100 transition duration-300">
                <a
                  href="https://mycareconcierge.com/"
                  target="_blank"
                  className="bg-[#6366F1] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md bg-opacity-70"
                >
                  Care Concierge <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden block`}
            >
              <img
                src={inrx}
                alt="Inrx"
                className="w-full h-full object-cover transition duration-300 blur-sm object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center  opacity-100 transition duration-300">
                <a
                  href="https://inrx.io/"
                  target="_blank"
                  className="bg-[#6366F1] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md bg-opacity-70"
                >
                  Inrx <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>
            <div
              className={`group relative aspect-square rounded-2xl overflow-hidden block`}
            >
              <img
                src={hahm}
                alt="hahm"
                className="w-full h-full object-cover transition duration-300 blur-sm object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center  opacity-100 transition duration-300">
                <a
                  href="https://nfttrade-theta.vercel.app/"
                  target="_blank"
                  className="bg-[#6366F1] text-[#FFFFFF] text-xs md:text-base px-4 py-2 rounded-full shadow-md bg-opacity-70"
                >
                  NftTrade <LuArrowUpRight className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-6 md:px-20 py-20 relative bg-white">
        <div className="text-[#6366F1] ">
          <div className="grid grid-cols-5 gap-8 md:gap-10">
            <div className="col-span-5 lg:col-span-2">
              <h1 className="text-5xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
                Services
              </h1>
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
                {/* <!-- Frontend Development Box --> */}
                <div className="col-span-3 flex flex-col">
                  <div className="bg-indigo-500 bg-opacity-10 relative rounded-2xl flex-1">
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 py-2 w-[200px] flex items-center px-2 bg-indigo-500 bg-opacity-10 justify-center text-sm">
                      <span>CUSTOMISABLE</span>
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
                          <span>Typescript</span>
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

                {/* <!-- MERN Development Box --> */}
                <div className="col-span-3 flex flex-col">
                  <div className="bg-indigo-500 bg-opacity-10 relative rounded-2xl flex-1">
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 py-2 w-[200px] flex items-center px-2 bg-indigo-500 bg-opacity-10 justify-center text-sm">
                      <span>CUSTOMISABLE</span>
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
                          <span>MongoDB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiExpress />
                          <span>Express.js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaNodeJs />
                          <span>Node.js</span>
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
                          <span>Typescript</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section
        className="px-6 md:px-20 md:py-20 py-10 relative bg-white"
        id="faq"
      >
        <div className="absolute md:top-10 top-20 right-[10%]">
          <img src={faq} alt="FAQ" className="opacity-50 w-20 md:w-36" />
        </div>
        <div className="max-w-4xl mx-auto text-center mb-10"></div>

        <div className="grid grid-cols-5 gap-10 md:gap-20">
          <div className="col-span-5 md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              Frequently Asked Questions
            </h2>
            <p>
              <span className="">
                Have questions before getting started? You're not alone! I'm
                here to ensure a smooth and transparent development experience.
                Whether you're curious about timelines, technologies, or ongoing
                support — I've got the answers.
              </span>
              <br />✨ Still unsure? Don’t hesitate to reach out. I’m happy to
              walk you through anything, big or small.
            </p>
          </div>
          <div className="col-span-5 md:col-span-3">
            <div className="flex flex-col space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center text-left">
                    <h4 className="text-lg font-semibold text-indigo-500">
                      {faq.question}
                    </h4>
                    <span className="text-2xl text-indigo-500 font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40 mt-2 p-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-6 md:px-20 md:py-20 py-10 relative bg-white"
        id="contact"
      >
        <div className="grid grid-cols-2 gap-10 md:gap-24">
          <div className="col-span-2 md:col-span-1 space-y-4 ">
            <p className="text-indigo-600 font-semibold">LET’S CONNECT</p>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
              Have an idea, a project, or just want to say hi? <br />
              I’d love to hear from you.
            </h3>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-indigo-500 p-2 rounded-full">
                <IoIosCall size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">
                  Let’s turn your vision into reality.
                </p>
                <p className="font-bold text-indigo-700">
                  Phone: +91-8318015667
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-indigo-500 p-2 rounded-full">
                <IoIosMail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">How can I help you?</p>
                <p className="font-bold text-indigo-700">
                  Mail: sonidivyanjali88@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 shadow-md p-10 bg-indigo-500 bg-opacity-10 rounded-xl">
            <h2 className="text-3xl md:text-5xl mb-10">Say Hello!</h2>
            <div className="relative ">
              <input
                className="px-2 bg-transparent  w-full py-2 mb-10 border-0 border-b-2 border-gray-300 hover:border-black focus:border-black outline-none transition-all duration-200"
                type="text"
                name="Name"
                placeholder="Enter your name*"
                required
              />
              <FaRegUser
                size={22}
                className="absolute right-0 bottom-[70%] text-gray-600"
              />
            </div>
            <div className="relative">
              <input
                className="px-2 bg-transparent  w-full py-2 mb-10 border-0 border-b-2 border-gray-300 hover:border-black focus:border-black outline-none transition-all duration-200"
                type="email"
                name="email"
                placeholder="Enter your email*"
                required
              />
              <MdMailOutline
                size={24}
                className="absolute right-0 bottom-[70%] text-gray-600"
              />
            </div>
            <div className="relative">
              <input
                className="px-2 bg-transparent  w-full py-2 mb-10 border-0 border-b-2 border-gray-300 hover:border-black focus:border-black outline-none transition-all duration-200"
                type="tel"
                name="Phone"
                placeholder="Enter your phone number"
              />
              <FiPhone
                size={22}
                className="absolute right-0 bottom-[70%] text-gray-600"
              />
            </div>
            <div>
              <input
                className="px-2 bg-transparent  w-full py-2 mb-10 border-0 border-b-2 border-gray-300 hover:border-black focus:border-black outline-none transition-all duration-200"
                type="text"
                name="message"
                placeholder="Message"
              />
            </div>
            <div>
              <button className="bg-indigo-500 px-4 py-2 text-white font-bold">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-500 text-white p-3 text-center relative">
        Made my love and passion🤍
      </footer>
    </>
  );
};

export default Portfolio;
