import React from 'react';
import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
import HeroSection from '../components/PFcomponents/HeroSection';
import PFReturnFilingSection from '../components/PFcomponents/PFReturnFilingSection';
import PenaltySection from '../components/PFcomponents/PenaltySection';
import BenefitsSection from '../components/PFcomponents/BenefitsSection';
import ESIReturnFilingSection from '../components/PFcomponents/ESIReturnFilingSection';
import ESIBenefitsSection from '../components/PFcomponents/ESIBenefitsSection';
import PackageDetailsSection from '../components/PFcomponents/PackageDetailsSection';
import HowWeWorkSection from '../components/PFcomponents/HowWeWorkSection';
import PopularServices from '../components/PFcomponents/PopularServices';
import CEOSection from '../components/homepage-comonent/CEOSection';
import WhyUs from '../components/PFcomponents/WhyUs';
import FAQSection from '../components/PFcomponents/FAQSection';
import Footer from '../components/pagesCommonComponents/Footer';

const PFpage = () => {
  return (
    <div>
        <HeaderNavbar/>
        <HeroSection/>
        <PFReturnFilingSection/>
        <PenaltySection/>
        <BenefitsSection/>
        <ESIReturnFilingSection/>
        <ESIBenefitsSection/>
        <PackageDetailsSection/>
        <HowWeWorkSection/>
        <CEOSection/>
        <PopularServices/>
        <WhyUs/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default PFpage