import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        setLoading(false);
        return;
      }
      const url = `${BASE_URL}/api/v1/portfolio/sendEmail`;
      const res = await axios.post(url, { name, email, msg });
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-6 pb-10 px-4 mx-auto w-full" id="contact">
      <div className="shadow-md rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center">
            <img
              src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
              alt="Contact"
              className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <div className="flex items-center justify-center mb-4">
              <h6 className="flex items-center text-base md:text-lg font-semibold text-gray-800">
                Contact With
                <BsLinkedin color="blue" size={24} className="ml-2" />
                <BsGithub color="black" size={24} className="ml-2" />
                <BsFacebook color="blue" size={24} className="ml-2" />
              </h6>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="border-t border-gray-300 w-1/3"></div>
              <span className="px-2 font-semibold text-gray-600">OR</span>
              <div className="border-t border-gray-300 w-1/3"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#138781]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#138781]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="msg"
                  placeholder="Write your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#138781]"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#1e1e2c] text-white rounded-full hover:bg-black transition-colors duration-300"
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
