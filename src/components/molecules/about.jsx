import React from "react";
import Bg from "@/../../public/Images/bg.png";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="p-4 w-[100%] min-h-[80vh] flex justify-center items-center background overflow-hidden">
        <Image
          src={Bg}
          alt="Bg.png"
          width={700}
          height={300}
          className="lg:w-[50%] lg:h-[80%] absolute top-[100px] left-[-30px] lg:left-[20%]"
        />
        <div className="lg:w-[60%] text-center">
          <h1 className="text-[2.5em] font-semibold]">About Us</h1>
          <p className="text-[20px]">
            Our vision is to help projects that have 
            problems with the usual high cost of marketing while
            still giving them top-notch community Management services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
