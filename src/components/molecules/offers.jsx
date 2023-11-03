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

const Offers = () => {
  return (
    <div
      id="services"
      className="p-4 w-[100%] flex flex-col justify-center items-center background overflow-hidden"
    >
      <div className="lg:w-[60%] text-center">
        <h1 className="text-[2.5em] font-semibold]">What We Offer</h1>
        <div className="gridlayout mt-10">
          <div className="p-4 rounded-md flex flex-col justify-center items-start border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <Image
              src={First}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[100px] h-[100px]"
            />
            <h1 className="text-start mt-5 font-semibold mb-2">
              Community Management / Moderation
            </h1>
            <p className="text-slate-200 text-start text-[15px]">
              We will ensure a vibrant and engaged community, fostering healthy
              discussions, and maintaining a positive atmosphere.
            </p>
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-start border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <Image
              src={Social}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[130px] h-[100px]"
            />
            <h1 className="text-start mt-5 font-semibold mb-2">
              Community Engagement TG/ Discord
            </h1>
            <p className="text-slate-200 text-start text-[15px]">
              Boost your projects engagement levels on Telegram and Discord.
              We will create interactive and exciting experiences.
            </p>
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-start border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <Image
              src={Content}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[120px] h-[100px]"
            />
            <h1 className="text-start mt-5 font-semibold mb-2">
              Content Writing
            </h1>
            <p className="text-slate-200 text-start text-[15px]">
              Captivate your audience with compelling content. Our skilled
              writers will create informative articles, blog posts etc.
            </p>
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-start border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <Image
              src={Web}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[100px] h-[100px]"
            />
            <h1 className="text-start mt-5 font-semibold mb-2">
              Graphic Design / Web Development
            </h1>
            <p className="text-slate-200 text-start text-[15px]">
              Make your project visually appealing with our graphics designing
              services.
            </p>
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-start border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <Image
              src={Media}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[120px] h-[100px]"
            />
            <h1 className="text-start mt-5 font-semibold mb-2">
              Social Media Management
            </h1>
            <p className="text-slate-200 text-start text-[15px]">
              Our experienced team will handle content creation, scheduling,
              engagement, and growth strategies
            </p>
          </div>
          <div className="p-4 rounded-md flex flex-col justify-center items-start border border-slate-200 hover:border-slate-600 bg-slate-700 h-[300px]">
            <Image
              src={Links}
              alt="Bg.png"
              width={700}
              height={300}
              className="w-[150px] h-[100px]"
            />
            <h1 className="text-start mt-5 font-semibold mb-2">
              Shilling/ X and TG followers
            </h1>
            <p className="text-slate-200 text-start text-[15px]">
              Drive awareness and attract attention to your project with our
              targeted shilling services.
            </p>
          </div>
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
