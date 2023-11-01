'use client'
import React from "react";
import Logo from "@/../../public/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/button";
import { useState } from "react";

const Navbar = () => {
const [show, setShow] = useState(false);

const handleShow = ()=>{
    setShow(!show)
}

  return (
    <div className="p-4 flex justify-between lg:justify-around items-center relative">
      <Image
        src={Logo}
        alt="logo.png"
        width={700}
        height={300}
        className="w-[200px] h-[60px] self-start items-start"
      />
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 relative">
        <ul className={`${show ? "block" : "hidden lg:flex"} flex flex-col lg:flex-row fixed lg:pt-0 lg:relative h-[100%] w-[100%] top-0 bg-primary z-10 pt-20 left-0 lg:justify-center items-center gap-10`}>
          <li>
            <Link href={'/'} className="hover:text-slate-400">Home</Link>
          </li>
          <li>
            <Link href={'/'} className="hover:text-slate-400">About</Link>
          </li>
          <li>
            <Link href={'/'} className="hover:text-slate-400">Services</Link>
          </li>
          <li>
            <Link href={'/'} className="hover:text-slate-400">Solution</Link>
          </li>
          <Button text="Book a Meeting"/>
        </ul>
        <button className="w-10 cursor-pointer block lg:hidden z-10 mr-5" onClick={handleShow}>
            <div className="w-8 h-1 bg-white m-2 rounded-md"></div>
            <div className="w-5 h-1 bg-white m-2 rounded-md"></div>
            <div className="w-4 h-1 bg-white m-2 rounded-md"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
