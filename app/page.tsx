import Bento from "@/components/landing/Bento";
import Booking from "@/components/landing/Booking";
import CaseStudies from "@/components/landing/CaseStudies";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Showcase from "@/components/landing/Showcase";
import React from "react";


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CaseStudies/>
    <Booking/>
    <Showcase/>
    <Bento/>
    <Faq/>
    <Footer/>
    </>
  )
};

export default Home;
