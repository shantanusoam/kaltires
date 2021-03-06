import React, { useState } from 'react';
import ContactSection from '../components/ContactSection';
import DAboutSection from '../components/DAboutSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import QuoteAtEnd from '../components/QuoteAtEnd';
import Sidebar from '../components/Sidebar';
import TestimonialSection from '../components/TestimonialSection';
import UAboutSection from '../components/UAboutSection';
import WCUSection from '../components/WCUSection';
import WWOSection from '../components/WWOSection';
import FooterSection from '../components/FooterSection';
import Stickbar from '../components/Stickbar';
import ContactMap from '../components/ContactMap';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle} bg={false}></Navbar>
      <HeroSection></HeroSection>
      {/* <UAboutSection></UAboutSection> */}
      <DAboutSection></DAboutSection>
      {/* <TestimonialSection></TestimonialSection> */}
      <WWOSection></WWOSection>
      <WCUSection></WCUSection>
      <ContactMap></ContactMap>
      <QuoteAtEnd></QuoteAtEnd>

      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </>
  );
};

export default Home;
