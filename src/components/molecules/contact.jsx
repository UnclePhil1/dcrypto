"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center my-10">
      <div className="w-[80%] rounded-md bg-slate-900 p-4">
        <h2>Get In Touch With Us.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
          <input
            type="number"
            name="number"
            placeholder="Your Phone Number"
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
          <input
            type="text"
            name="comany"
            placeholder="Your Company"
            className="w-[100%] py-2 px-4 rounded-full bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2"
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your Message here..."
          className="w-[100%] bg-primary text-slate-400 border border-slate-300 focus:outline-slate-700 my-2 rounded-md p-4"
        ></textarea>
        <button className="py-2 px-4 rounded-full bg-white text-primary border border-slate-300 focus:outline-slate-700">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
