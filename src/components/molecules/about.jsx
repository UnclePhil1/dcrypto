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
            We are the most popular blockchain service provider with a good
            track record of 50+ web3 projects. We are dedicated to supporting
            your crypto projects success. Whether you are an established project
            or just starting, our team is here to help you thrive in the
            fast-paced world of cryptocurrencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
