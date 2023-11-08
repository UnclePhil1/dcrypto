"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
  });
  
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_tk3nima"; // Replace with your actual service ID
    const templateID = "template_6pq3szu"; // Replace with your actual template ID
    const publicKey = "7WPbRbAyPjso50nSN"; // Replace with your actual user ID
    const recipientEmail = "dcryptoworkforce@gmail.com"; // Replace with the recipient's email address

    // Prepare the email content
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_number: formData.number,
      from_company: formData.company,
      message: formData.message,
      to_email: recipientEmail,
    };

    // Send the email
    emailjs.send(serviceID, templateID, emailParams, publicKey).then(
      (result) => {
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  };
;

  return (
    <div id="contact" className="flex justify-center items-center my-10">
      <div className="w-[80%] rounded-md bg-slate-900 p-4">
        <h2>Get In Touch With Us.</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            value={formData.name}
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            onChange={handleInputChange}
            value={formData.email}
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Your Phone Number"
            onChange={handleInputChange}
            value={formData.number}
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
          <input
            type="text"
            name="company"
            id="company"
            onChange={handleInputChange}
            value={formData.company}
            placeholder="Your Company"
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
        </form>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your Message here..."
          onChange={handleInputChange}
          value={formData.message}
          className="w-[100%] bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2 rounded-md p-4"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="py-2 px-4 rounded-full bg-white text-primary border border-slate-300 focus:outline-slate-700"
        >
          <Link href={'/home'}>
          Get In Touch
          </Link>
        </button>
        {successMessageVisible && (
          <div className="mt-4 bg-green-500 text-white py-3 px-4 rounded-md text-center fixed top-10 left-10">
            Sent successfully!
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Contact;
