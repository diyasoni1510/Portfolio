import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { db } from "../../lib/firebase"; // adjust this import path if needed
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import emailjs from "emailjs-com";

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
    console.log(
      firstName,
      lastName,
      email,
      selectedBudget,
      selectedService,
      details
    );
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
    } catch (err) {
      console.error("Email send error:", err);
    }

    addUser(userData); // ✅ Save to Firestore
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, black 40%, rgb(38 15 58) 55%, rgb(107, 33, 168) 100%)",
      }}
      className="pt-14 md:pt-0"
    >
      <div className="justify-center items-end gap-20 text-white p-5 md:p-20">
        <h1 className="text-6xl md:text-8xl right-0">Hire me</h1>
        <div>
          <h3 className="text-4xl my-10">Services</h3>
          <div className="grid grid-cols-8 gap-5">
            <div
              className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
                selectedService == "frontend"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedService("frontend")}
            >
              {selectedService == "frontend" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              Frontend Development
            </div>
            <div
              className={`col-span-4 md:col-span-1 text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl  ${
                selectedService == "backend"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedService("backend")}
            >
              {selectedService == "backend" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              Backend Development
            </div>
            <div
              className={`col-span-4 md:col-span-1 text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
                selectedService == "servicing"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedService("servicing")}
            >
              {selectedService == "servicing" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              Website Servicing
            </div>
            <div
              className={`col-span-4 md:col-span-1 text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
                selectedService == "bugSolving"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedService("bugSolving")}
            >
              {selectedService == "bugSolving" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              Website Bug Solving
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-4xl my-10">Budget in USD</h3>
          <div className="grid grid-cols-8 gap-5">
            <div
              className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
                selectedBudget == "2k"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedBudget("2k")}
            >
              {selectedBudget == "2k" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              2K
            </div>
            <div
              className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl  ${
                selectedBudget == "5k"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedBudget("5k")}
            >
              {selectedBudget == "5k" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              2K - 5K
            </div>
            <div
              className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
                selectedBudget == "10k"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedBudget("10k")}
            >
              {selectedBudget == "10k" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              5K - 10K
            </div>
            <div
              className={`col-span-4 md:col-span-1 flex justify-center items-center text-center cursor-pointer py-5 px-5 relative bg-gradient-to-bl ${
                selectedBudget == "more"
                  ? "bg-gray-950 from-violet-700 to-purple-950"
                  : "bg-gray-950"
              }`}
              onClick={() => setSelectedBudget("more")}
            >
              {selectedBudget == "more" && (
                <FaCheckCircle className="absolute top-2 left-2" size={14} />
              )}
              More than 10K
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-4xl my-10">Personal Data</h3>
          <div className="grid grid-cols-3 gap-5">
            <div className="cpl-span-1">
              <input
                type="text"
                name=""
                placeholder="First Name"
                className="w-full bg-transparent border-b border-gray-200 py-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="cpl-span-1">
              <input
                type="text"
                name=""
                placeholder="last Name"
                className="w-full bg-transparent border-b border-gray-200 py-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="cpl-span-1">
              <input
                type="email"
                name=""
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-200 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="col-span-3">
              <input
                type="text"
                name=""
                placeholder="Project Details (Optional)"
                className="w-full bg-transparent border-b border-gray-200 py-2"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-gradient-to-bl from-violet-600 to-purple-950 hover:from-purple-700 hover:to-violet-950 py-2 font-semibold px-10  mt-10 rounded"
            onClick={handleSubmit}
          >
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;
