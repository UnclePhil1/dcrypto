'use client'
import React,{ useEffect, useState } from "react";
import '../style.css'
import Arrow from '@/../../public/Images/arrow.png'
import Image from "next/image";

const BackButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= document.documentElement.clientHeight - 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="backButton" style={{ display: showButton ? "block" : "none" }}>
      <Image src={Arrow} alt="arrow.png" width={700} height={300} className="w-[40px] h-[50px]"/>
    </button>
  );
};

export default BackButton;
