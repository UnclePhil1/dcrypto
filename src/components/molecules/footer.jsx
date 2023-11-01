import React from "react";
import "@/components/style.css";
import Logo from "@/../../public/Images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-4 py-5 w-[100%] flex flex-col justify-start items-start background overflow-hidden">
      <Image
        src={Logo}
        alt="logo.png"
        width={700}
        height={300}
        className="w-[200px] h-[80px] "
      />
      <div className="bg-slate-700 w-[100%] h-1 rounded-full"></div>

      <ul className="md:pl-10 py-[5%]">
        <li className="text-[20px] font-semibold pb-10">Pages</li>
        <li className="">Home</li>
        <li className="">About</li>
        <li className="">Services</li>
        <li className="">Solution</li>
      </ul>

      <div className="bg-slate-700 w-[100%] h-1 rounded-full"></div>

      <h2 className="md:pl-10 font-semibold pb-10">CopyRight: @DCrypto</h2>
    </div>
  );
};

export default Footer;
