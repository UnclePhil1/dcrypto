"use client";
import React from "react";
import First from "@/../../public/Images/first.png";
import Content from "@/../../public/Images/content.png";
import Links from "@/../../public/Images/link.png";
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
import Link from "next/link";
import { useState } from "react";

const Offers = () => {
  const offerArray = [
    {
      header: "Community Management / Moderation",
      url: First,
      paragraph:
        "Strengthen your project's online presence with our expert community managers. We'll ensure a vibrant and engaged community, fostering healthy discussions, and maintaining a positive atmosphere.",
    },
    {
      header: "Community Engagement TG/ Discordn",
      url: Social,
      paragraph:
        "Boost your project's engagement levels on Telegram and Discord. We'll create interactive and exciting experiences that keep your community active and involved.",
    },
    {
      header: "Content Writing",
      url: Content,
      paragraph:
        "Captivate your audience with compelling content. Our skilled writers will create informative articles, blog posts, and engaging social media content that showcases your project's unique value proposition.",
    },
    {
      header: "Graphic Design / Web Development",
      url: Web,
      paragraph:
        "Make your project visually appealing with our graphics designing services. Our talented designers will create eye-catching visuals, including logos, banners, infographics, and other graphical elements.",
    },
    {
      header: "Social Media Management",
      url: Media,
      paragraph:
        " Enhance your online presence across various social media platforms. Our experienced team will handle content creation, scheduling, engagement, and growth strategies.",
    },
    {
      header: "Shilling/ X and TG followers",
      url: Links,
      paragraph:
        "Expand your social media reach and grow your Telegram group with our follower acquisition services. We'll help you gain real, active followers who are genuinely interested in your project.",
    },
  ];

  const [hoveredStates, setHoveredStates] = useState(
    Array(offerArray.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = true;
    setHoveredStates(newHoveredStates);
  };

  const handleMouseLeave = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = false;
    setHoveredStates(newHoveredStates);
  };

  return (
    <div
      id="services"
      className="p-4 w-[100%] flex flex-col justify-center items-center background overflow-hidden"
    >
      <div className="lg:w-[60%] text-center">
        <h1 className="text-[2.5em] font-semibold]">What We Offer</h1>
        <div className="gridlayout mt-10">
          {offerArray.map((offers, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
              className="relative p-4 rounded-md flex flex-col justify-center items-center border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px] overflow-hidden"
            >
              <Image
                src={offers.url}
                alt="Bg.png"
                width={700}
                height={300}
                className="w-[120px] h-[100px]"
              />
              <h1 className="mt-5 font-semibold mb-2">
                {offers.header}
              </h1>
              <p
                className={`${hoveredStates[index] ? "top-0" : "top-[270px]"} text-white text-[18px] absolute bg-[#000000de] w-[100%] left-0 h-[100%] text-center flex justify-center items-center p-4 transition-all`}>
                {offers.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] grid grid-cols-3 md:grid-cols-7 justify-center lg:gap-8 items-center overflow-x-auto mt-[10%] whitespace-nowrap">
        <Link
          href="https://t.me/xhashtagio"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={One}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
        <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px] mx-auto"
        />
        <Link
          href="https://t.me/faithtribe"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={Two}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
        <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px] mx-auto"
        />
        <Link
          href="https://t.me/BoldPawCeo_Global"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={Three}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
        <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px] mx-auto"
        />
        <Link
          href="https://t.me/gummys_io"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={Four}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
        <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px] mx-auto"
        />
        <Link
          href="https://t.me/pepeclassicversion"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={Five}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
        <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px] mx-auto"
        />
        <Link
          href="https://t.me/RangersProtocol"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={Six}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
        <Image
          src={Stroke}
          alt="Bg.png"
          width={700}
          height={300}
          className="w-[20px] h-[30px] mx-auto"
        />
        <Link
          href="https://t.me/MultiBank_io"
          className="cursor-pointer w-[100px] h-[100px] lg:w-[80px] lg:h-[80px]"
        >
          <Image
            src={Seven}
            alt="Bg.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Offers;
