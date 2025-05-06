import React, { useState } from "react";
import { FaCheckCircle, FaRegUser } from "react-icons/fa";
import { db } from "../../lib/firebase"; // adjust this import path if needed
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Contact = () => {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!customerName || !email) {
      console.log("yes");
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    const userData = {
      name: customerName,
      email,
      phone: number,
      details,
    };
    // await addUser(userData);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${customerName}`,
          from_email: email,
          message: `
          name: ${customerName}\n
          email: ${email}\n
          Details: ${details}
        `,
        },
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID2,
        {
          from_name: `${customerName}`,
          from_email: email,
          message: details,
        },
        PUBLIC_KEY
      );

      console.log("Email sent successfully!");
      setCustomerName("");
      setEmail("");
      setDetails("");
      addUser(userData); // ✅ Save to Firestore
      toast.success("Thank you for contacting us!");
      setLoading(false);
    } catch (err) {
      console.error("Email send error:", err);
      toast.error("Failed to send email.");
      setLoading(false);
    }
  };

  return (
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
              <p className="font-bold text-indigo-700">Phone: +91-8318015667</p>
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
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-indigo-500 px-4 py-2 text-white font-bold flex gap-2 text-sm md:text-base items-center justify-center disabled:bg-indigo-300"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
