import About from '@/components/molecules/about';
import Blog from '@/components/molecules/blog';
import Footer from '@/components/molecules/footer';
import Introduction from '@/components/molecules/introduction';
import Navbar from '@/components/molecules/navbar';
import Offers from '@/components/molecules/offers';
import React from 'react'


const Landing = () => {

    return (
        <div>
            <Navbar />
            <Introduction />
            <About />
            <Offers />
            <Blog />
            <Footer />
        </div>
    )
}

export default Landing;