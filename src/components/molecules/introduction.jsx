import React from "react";
import "@/components/style.css";
import Line from "@/../../public/Images/Line.png";
import Bg from "@/../../public/Images/bg.png";
import Image from "next/image";
import { Button } from "../atoms/button";
import { TransButton } from "../atoms/transButton";

const Introduction = () => {
  return (
    <div className="p-4 w-[100%] min-h-[80vh] flex justify-center items-center background overflow-hidden">
        <Image
            src={Bg}
            alt="Bg.png"
            width={700}
            height={300}
            className="lg:w-[50%] lg:h-[80%] absolute top-[100px] left-[-30px] lg:left-[20%]"
          />
      <div className="text-center self-center flex flex-col justify-center items-center">
        <h1 className="text-[2em] lg:text-[4em] font-semibold">
          Elevate Your Crypto Progress
        </h1>
        <p className="text-[15px] lg:text-[20px] text-slate-300">
          Strengthen your crypto project and elevate your journey towards
          success.
        </p>
        <div className="flex flex-row justify-center items-center bg-[#6e7381ad] mt-5 rounded-full gap-5 lg:gap-10 w-[100%] lg:w-[600px]">
          <div className="text-center">
            <p className="text-[15px] md:text-[30px]">100+</p>
            <p className="text-[13px] md:text-[18px]">Clients</p>
          </div>
          <Image
            src={Line}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[2px] h-[60px]"
          />
          <div className="text-center">
            <p className="text-[15px] md:text-[30px]">100+</p>
            <p className="text-[13px] md:text-[18px]">projects</p>
          </div>
          <Image
            src={Line}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[2px] h-[60px]"
          />
          <div className="text-center">
            <p className="text-[15px] md:text-[30px]">50+</p>
            <p className="text-[13px] md:text-[18px]">Employees</p>
          </div>
        </div>
        <div className=" flex gap-4 mt-5">
            <Button text="Contact Us" />
            <TransButton text="Services" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
