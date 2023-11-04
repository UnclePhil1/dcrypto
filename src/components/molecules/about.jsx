import React from "react";
import AboutImg from "@/../../public/Images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="py-4 px-[7%] w-[100%] min-h-[80vh] flex justify-center items-center background overflow-hidden">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-[2.5em] font-semibold]">About Us</h1>
          <p className="text-[25px] md:w-[60%] text-center">
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
