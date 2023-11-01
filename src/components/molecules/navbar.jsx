"use client";
import React, { useEffect } from "react";
import Logo from "@/../../public/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '80%',
  bgcolor: "#181D2B",
  borderRaduis: "30px",
  boxShadow: 24,
  p: 4,
};

// const modalBox = {
//   backgroundColor: "#181D2B",
// }

const stylebtn = {
  color: "#fff",
  backgroundColor: "#181D2B",
  borderRaduis: "20px",
  border: "2px solid #222",
  boxShadow: 24,
  "&:hover": {
    backgroundColor: "#f5f5f5",
    color: "#181D2B",
  },
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  const handleGetInTouch = () => {
    // Hide or remove the modal
    setOpen(false);
    // Set the success message state variable
    setSuccessMessage("Your message has been sent successfully!");
  };

  // const ul = document.querySelector("ul");

  // useEffect(() => {
  //   if (ul) {
  //     ul.addEventListener("load", () => {
  //       ul.classList.remove("block");
  //     });
  //   }
  // }, [ul]);

  return (
    <div
      id="landing"
      className="p-4 flex justify-between lg:justify-around items-center relative"
    >
      <Image
        src={Logo}
        alt="logo.png"
        width={700}
        height={300}
        className="w-[200px] h-[60px] self-start items-start"
      />
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 relative">
        <ul
          className={`${
            show ? "block" : "hidden lg:flex"
          } flex flex-col lg:flex-row fixed lg:pt-0 lg:relative h-[100%] w-[100%] top-0 bg-primary z-10 pt-20 left-0 lg:justify-center items-center gap-10`}
        >
          <li onClick={handleShow}>
            <Link href={"#landing"} className="hover:text-slate-400">
              Home
            </Link>
          </li>
          <li onClick={handleShow}>
            <Link href={"#about"} className="hover:text-slate-400">
              About
            </Link>
          </li>
          <li onClick={handleShow}>
            <Link href={"#contact"} className="hover:text-slate-400">
              Contact
            </Link>
          </li>
          <Button onClick={handleOpen} sx={stylebtn}>
            Book a Meeting
          </Button>
        </ul>
        <button
          className="w-10 cursor-pointer block lg:hidden z-10 mr-5"
          onClick={handleShow}
        >
          <div className="w-8 h-1 bg-white m-2 rounded-md"></div>
          <div className="w-5 h-1 bg-white m-2 rounded-md"></div>
          <div className="w-4 h-1 bg-white m-2 rounded-md"></div>
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Get In Touch With Us.
          </Typography>
          <Typography id="modal-modal-description">
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
          </Typography>
          <button onClose={handleGetInTouch} className="py-2 px-4 rounded-full bg-white text-primary border border-slate-300 focus:outline-slate-700">Get In Touch</button>
        </Box>
      </Modal>
      {successMessage && <div className="success-message absolute top-0 left-0">{successMessage}</div>}
    </div>
  );
};

export default Navbar;
