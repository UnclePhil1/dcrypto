import React from "react";
import Bg from "@/../../public/Images/bg.png";
import Brand from "@/../../public/Images/brand.png";
import Nft from "@/../../public/Images/nft.png";
import Cube from "@/../../public/Images/cube.png";
import Image from "next/image";
import "@/components/style.css";

const Blog = () => {
  return (
    <div>
      <div className="p-4 w-[100%] flex justify-center items-center overflow-hidden relative">
        <Image
          src={Bg}
          alt="Bg.png"
          width={700}
          height={300}
          className="lg:w-[50%] lg:h-[80%] absolute left-[-30px] lg:left-[20%] z-0 opacity-5"
        />
        <div className="text-center w-[100%]">
          <h1 className="text-[2.5em] font-semibold]">Our Blog</h1>
          <div className="bg-primary md:mx-[20%]">
            <div className="layerOne">
              <div className="rounded-bl-md rounded-br-md bg-primary">
                <Image
                  src={Brand}
                  alt="Brand.png"
                  width={700}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
                <div className="bg-slate-700 rounded-br-md rounded-bl-md flex flex-col justify-start items-start p-2 gap-4">
                  <h3 className="text-start">Ultimate Brand Building</h3>
                  <p className="text-[15px] text-slate-300">19 April 2023</p>
                </div>
              </div>
              <div className="rounded-bl-md rounded-br-md bg-primary">
                <Image
                  src={Nft}
                  alt="Brand.png"
                  width={700}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
                <div className="bg-slate-700 rounded-br-md rounded-bl-md flex flex-col justify-start items-start p-2 gap-4">
                  <h3 className="text-start">Introduction to Blockchain</h3>
                  <p className="text-[15px] text-slate-300">23 August 2023</p>
                </div>
              </div>
              <div className="rounded-bl-md rounded-br-md bg-primary">
                <Image
                  src={Cube}
                  alt="Brand.png"
                  width={700}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
                <div className="bg-slate-700 rounded-br-md rounded-bl-md flex flex-col justify-start items-start p-2 gap-4">
                  <h3 className="text-start">NFT Trading and Minting</h3>
                  <p className="text-[15px] text-slate-300">1 May 2023</p>
                </div>
              </div>
              {/* <div className="w-[100%] md:w-[250px] bg-slate-700 border border-slate-100 rounded-br-md rounded-md flex flex-col justify-start items-start p-2 gap-4">
                <h3 className="text-start">Getting Started with Defi</h3>
                <p className="text-[15px] text-slate-300">
                  If you are intrestied in defi
                </p>
              </div>
              <div className="w-[100%] md:w-[250px] bg-slate-700 border border-slate-100 rounded-br-md rounded-md flex flex-col justify-start items-start p-2 gap-4">
                <h3 className="text-start">Blockchain</h3>
                <p className="text-[15px] text-slate-300">
                  Facts about the Blockchain
                </p>
              </div>
              <div className="w-[100%] md:w-[250px] bg-slate-700 border border-slate-100 rounded-br-md rounded-md flex flex-col justify-start items-start p-2 gap-4">
                <h3 className="text-start">Crypto Wallets</h3>
                <p className="text-[15px] text-slate-300">
                  Examales and types of wallets
                </p>
              </div> */}
              {/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 w-[100%]">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
