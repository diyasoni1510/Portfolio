import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { db } from "../../lib/firebase"; // adjust this import path if needed
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Hire = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const SERVICE_ID = "service_1x1o8n8";
  const TEMPLATE_ID = "template_wktkvzu";
  const TEMPLATE_ID2 = "template_rfd12nb";
  const PUBLIC_KEY = "9E45gZmjXJNzKj6Sz";

  const addUser = async (userData) => {
    try {
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("User added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    //  console.log(
    //    firstName,
    //    lastName,
    //    email,
    //    selectedBudget,
    //    selectedService,
    //    details
    //  );

    const userData = {
      firstname: firstName,
      lastname: lastName,
      budget: selectedBudget,
      details,
      email,
      service: selectedService,
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          message: `
          Service: ${selectedService}\n
          Budget: ${selectedBudget}\n
          Details: ${details}
        `,
        },
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID2,
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          service: selectedService,
          message: details,
        },
        PUBLIC_KEY
      );

      console.log("Email sent successfully!");
      setFirstName("");
      setLastName("");
      setSelectedBudget("");
      setEmail("");
      setSelectedService("");
      setDetails("");
      toast.success("Thank you for contacting us!");
    } catch (err) {
      console.error("Email send error:", err);
      toast.error("Failed to send email.");
    }

    addUser(userData); // ✅ Save to Firestore
  };

  return (
    // <div
    //   id="HireMe"
    //   style={{
    //     background:
    //       "linear-gradient(to right, black 40%, rgb(38 15 58) 55%, rgb(107, 33, 168) 100%)",
    //   }}
    //   className="pt-14 md:pt-10"
    // >
    //   <div className="justify-center items-end gap-20 text-white p-5 md:p-20">
    //     <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
    //       <h1 className="text-6xl md:text-8xl right-0 flex-shrink-0">
    //         Hire me
    //       </h1>
    //       <p>
    //         I'm ready to collaborate on your next project and help bring your
    //         vision to life. With my expertise in MERN stack development, I can
    //         create custom solutions that meet your needs. Whether you’re
    //         building a new web app or optimizing an existing one, I’m here to
    //         help you succeed. Reach out, and let’s discuss how we can make it
    //         happen!
    //       </p>
    //     </div>
    //     <div>
    //       <h3 className="text-4xl my-10">Services</h3>
    //       <div className="grid grid-cols-8 gap-5">
    //         <div
    //           className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
    //             selectedService == "frontend"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedService("frontend")}
    //         >
    //           {selectedService == "frontend" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           Frontend Development
    //         </div>
    //         <div
    //           className={`col-span-4 md:col-span-1 text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl  ${
    //             selectedService == "backend"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedService("backend")}
    //         >
    //           {selectedService == "backend" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           Backend Development
    //         </div>
    //         <div
    //           className={`col-span-4 md:col-span-1 text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
    //             selectedService == "servicing"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedService("servicing")}
    //         >
    //           {selectedService == "servicing" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           Website Servicing
    //         </div>
    //         <div
    //           className={`col-span-4 md:col-span-1 text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
    //             selectedService == "bugSolving"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedService("bugSolving")}
    //         >
    //           {selectedService == "bugSolving" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           Website Bug Solving
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="text-4xl my-10">Budget in USD</h3>
    //       <div className="grid grid-cols-8 gap-5">
    //         <div
    //           className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
    //             selectedBudget == "2k"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedBudget("2k")}
    //         >
    //           {selectedBudget == "2k" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           2K
    //         </div>
    //         <div
    //           className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl  ${
    //             selectedBudget == "5k"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedBudget("5k")}
    //         >
    //           {selectedBudget == "5k" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           2K - 5K
    //         </div>
    //         <div
    //           className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
    //             selectedBudget == "10k"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedBudget("10k")}
    //         >
    //           {selectedBudget == "10k" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           5K - 10K
    //         </div>
    //         <div
    //           className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
    //             selectedBudget == "more"
    //               ? "bg-gray-950 from-violet-700 to-purple-950"
    //               : "bg-gray-950"
    //           }`}
    //           onClick={() => setSelectedBudget("more")}
    //         >
    //           {selectedBudget == "more" && (
    //             <FaCheckCircle className="absolute top-2 left-2" size={14} />
    //           )}
    //           More than 10K
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="text-4xl my-10">Personal Data</h3>
    //       <div className="grid grid-cols-3 gap-5">
    //         <div className="col-span-3 md:col-span-1">
    //           <input
    //             type="text"
    //             name=""
    //             placeholder="First Name"
    //             className="w-full bg-transparent border-0 border-b border-gray-200 py-2 focus:outline-none focus:border-b focus:border-white"
    //             value={firstName}
    //             onChange={(e) => setFirstName(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-span-3 md:col-span-1">
    //           <input
    //             type="text"
    //             placeholder="Last Name"
    //             className="w-full bg-transparent border-0 border-b border-gray-200 py-2 focus:outline-none focus:border-b focus:border-white"
    //             value={lastName}
    //             onChange={(e) => setLastName(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-span-3 md:col-span-1">
    //           <input
    //             type="email"
    //             name=""
    //             placeholder="Email"
    //             className="w-full bg-transparent border-0 border-b border-gray-200 py-2 focus:outline-none focus:border-b focus:border-white"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-3 gap-5 mt-5">
    //         <div className="col-span-3">
    //           <input
    //             type="text"
    //             name=""
    //             placeholder="Project Details (Optional)"
    //             className="w-full bg-transparent border-0 border-b border-gray-200 py-2 focus:outline-none focus:border-b focus:border-white"
    //             value={details}
    //             onChange={(e) => setDetails(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <button
    //         className="bg-gradient-to-bl from-violet-600 to-purple-950 hover:from-purple-700 hover:to-violet-950 py-2 font-semibold px-10  mt-10 rounded"
    //         onClick={handleSubmit}
    //       >
    //         Hire me
    //       </button>
    //     </div>
    //   </div>
    //   <Toaster />
    // </div>
    <div
      id="HireMe"
      className="py-14 md:py-10"
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <div className="justify-center items-end gap-20 text-[#6366F1] p-5 md:p-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
          <h1 className="text-6xl md:text-8xl right-0 flex-shrink-0">
            Hire me
          </h1>
          <p className="text-[#374151]">
            I'm ready to collaborate on your next project and help bring your
            vision to life. With my expertise in MERN stack development, I can
            create custom solutions that meet your needs. Whether you’re
            building a new web app or optimizing an existing one, I’m here to
            help you succeed. Reach out, and let’s discuss how we can make it
            happen!
          </p>
        </div>

        {/* Services Section */}
        {/* <div>
          <h3 className="text-4xl my-10">Services</h3>
          <div className="grid grid-cols-8 gap-5">
            {["frontend", "backend", "servicing", "bugSolving"].map(
              (serviceKey) => (
                <div
                  key={serviceKey}
                  className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative rounded ${
                    selectedService === serviceKey
                      ? "bg-[#3B82F6] text-[#FFFFFF]"
                      : "bg-[#111827] text-[#FFFFFF]"
                  }`}
                  onClick={() => setSelectedService(serviceKey)}
                >
                  {selectedService === serviceKey && (
                    <FaCheckCircle
                      className="absolute top-2 left-2"
                      size={14}
                    />
                  )}
                  {serviceKey
                    .replace("frontend", "Frontend Development")
                    .replace("backend", "Backend Development")
                    .replace("servicing", "Website Servicing")
                    .replace("bugSolving", "Website Bug Solving")}
                </div>
              )
            )}
          </div>
        </div> */}

        {/* Budget Section */}
        {/* <div>
          <h3 className="text-4xl my-10">Budget in USD</h3>
          <div className="grid grid-cols-8 gap-5">
            {[
              { key: "2k", label: "2K" },
              { key: "5k", label: "2K - 5K" },
              { key: "10k", label: "5K - 10K" },
              { key: "more", label: "More than 10K" },
            ].map(({ key, label }) => (
              <div
                key={key}
                className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative rounded ${
                  selectedBudget === key
                    ? "bg-[#3B82F6] text-[#FFFFFF]"
                    : "bg-[#111827] text-[#FFFFFF]"
                }`}
                onClick={() => setSelectedBudget(key)}
              >
                {selectedBudget === key && (
                  <FaCheckCircle className="absolute top-2 left-2" size={14} />
                )}
                {label}
              </div>
            ))}
          </div>
        </div> */}

        {/* Personal Data Section */}
        <div>
          <h3 className="text-4xl my-10">Personal Data</h3>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-3 md:col-span-1">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#3B82F6]"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#3B82F6]"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#3B82F6]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="col-span-3">
              <input
                type="text"
                placeholder="Project Details (Optional)"
                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#3B82F6]"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>

          <button
            className="bg-[#6366F1] hover:bg-[#4F46E5] text-white py-2 font-semibold px-10 rounded shadow-md transition-all duration-300 mt-10"
            onClick={handleSubmit}
          >
            Hire me
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Hire;
