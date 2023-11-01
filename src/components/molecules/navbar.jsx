"use client";
import React, { useEffect } from "react";
import Logo from "@/../../public/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRaduis: '20px',
  boxShadow: 24,
  p: 4,
};

const stylebtn = {
  color: '#181D2B',
  bgcolor: "white",
  borderRaduis: "20px",
  boxShadow: 24,
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
};




const Navbar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShow = () => {
    setShow(!show);
  };

  const ul = document.querySelector("ul");

  useEffect(() => {
    if (ul) {
      ul.addEventListener("load", () => {
        ul.classList.remove("block");
      });
    }
  }, [ul]);

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
          <Button onClick={handleOpen} sx={stylebtn}>Book a Meeting</Button>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
