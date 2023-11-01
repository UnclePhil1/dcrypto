import React from "react";
import First from "@/../../public/Images/first.png";
import Content from "@/../../public/Images/content.png";
import Link from "@/../../public/Images/link.png";
import Media from "@/../../public/Images/media.png";
import Social from "@/../../public/Images/social.png";
import Web from "@/../../public/Images/web.png";
import One from "@/../../public/Images/1.png";
import Two from "@/../../public/Images/2.png";
import Three from "@/../../public/Images/3.png";
import Four from "@/../../public/Images/4.png";
import Five from "@/../../public/Images/5.png";
import Six from "@/../../public/Images/6.png";
import Seven from "@/../../public/Images/7.png";
import Stroke from "@/../../public/Images/stroke.png";
import Image from "next/image";
import "@/components/style.css";

const Offers = () => {
  return (
    <div id="contact" className="p-4 w-[100%] flex flex-col justify-center items-center background overflow-hidden">
      <div className="lg:w-[60%] text-center">
        <h1 className="text-[2.5em] font-semibold]">What We Offer</h1>
        <div className="gridlayout mt-10">
          <div className="p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <h1>Community Management / Moderation</h1>
            <Image
              src={First}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[250px] h-[150px]"
            />
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <h1>Community Engagement TG/ Discord</h1>
            <Image
              src={Social}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[250px] h-[150px]"
            />
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <h1>Content Writing</h1>
            <Image
              src={Content}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[250px] h-[150px]"
            />
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <h1>Graphic Design / Web Development</h1>
            <Image
              src={Web}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[250px] h-[150px]"
            />
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <h1>Social Media Management</h1>
            <Image
              src={Media}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[250px] h-[150px]"
            />
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <h1>Shilling/ X and TG followers</h1>
            <Image
              src={Link}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[250px] h-[150px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] lg:w-[100%] flex justify-center items-center gap-10 overflow-x-auto mt-[10%]">
        <Image
          src={One}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
         <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px]"
        />
        <Image
          src={Two}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
         <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px]"
        />
        <Image
          src={Three}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
         <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px]"
        />
        <Image
          src={Four}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
         <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px]"
        />
        <Image
          src={Five}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
         <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px]"
        />
        <Image
          src={Six}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
         <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px]"
        />
        <Image
          src={Seven}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[80px] h-[80px]"
        />
      </div>
    </div>
  );
};

export default Offers;
