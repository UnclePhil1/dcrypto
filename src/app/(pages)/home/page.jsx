import About from '@/components/molecules/about';
import Blog from '@/components/molecules/blog';
import Contact from '@/components/molecules/contact';
import Footer from '@/components/molecules/footer';
import Introduction from '@/components/molecules/introduction';
import Navbar from '@/components/molecules/navbar';
import Offers from '@/components/molecules/offers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Telegram from '@/../../public/Images/tele.png';


const Landing = () => {

    return (
        <div className="w-[100%]">
            <Navbar />
            <Introduction />
            <About />
            <Offers />
            <Blog />
            <Contact />
            <Footer />
            <Link href={'https://t.me/D_Crypto_Workforce'} className="fixed z-20 bottom-[50px] right-[-30px] w-[130px] h-[130px]">
                <Image src={Telegram} alt='telegram.png' width={700} height={300} className="w-[100%] h-[100%]"/>
            </Link>
        </div>
    )
}

export default Landing;