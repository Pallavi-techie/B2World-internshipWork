import React from 'react'
import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
import Footer from '../components/pagesCommonComponents/Footer';
import ServicesSection from '../components/allservice-components/ServicesSections';

const ServicePage = () => {
  return (
    <div>
        <HeaderNavbar/>
       <ServicesSection/>
        <Footer/>
    </div>
  )
}

export default ServicePage