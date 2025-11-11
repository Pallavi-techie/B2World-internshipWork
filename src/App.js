
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactUs";
import CareerPage from "./pages/CareerPage";
import ISOPage from "./pages/ISOPage";
import ConsumerDisputePage from "./pages/ConsumerDispute";
import ServicesPage from "./pages/ServicePage";
import LoginPage from "./pages/LoginCard";

// Import your individual service pages:
import TrademarkPage from "./pages/TrademarkPage";
import Iso from "./pages/ISOPage";
import GSTRegistrationPage from "./pages/GSTRegistrationPage";
import CompanyRegistrationPage from "./pages/CompanyRegistration";
import ImportExportCodePage from "./pages/ImportExportCodePage";
import ConsumerDisputeResolutionPage from "./pages/ConsumerDispute";
import FSSAILicensePage from "./pages/FSSAILicensePage";
import ODRServicesPage from "./pages/ODRServicesPage";
import PFpage from "./pages/PFpage";

// Career pages
import CareerLayout from "./components/CareerpageComponents/pages/CareerLayout";
import CareerHome from "./components/CareerpageComponents/pages/HomePage";
import { WorkPage } from "./components/CareerpageComponents/pages/WorkPage";
import ContactUsPage from "./components/CareerpageComponents/pages/ContactUsPage";
import Media from "./components/CareerpageComponents/pages/Media";
import OurFounderPage from "./components/CareerpageComponents/pages/OurFounderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/iso" element={<ISOPage />} />
        <Route path="/consumer-dispute" element={<ConsumerDisputePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Individual service detail routes */}
        <Route path="/services/trademark-registration" element={<TrademarkPage />} />
        <Route path= "/Services/Iso" element={<Iso/>}/>
        <Route path="/services/gst-registration" element={<GSTRegistrationPage />} />
        <Route path="/services/company-registration" element={<CompanyRegistrationPage />} />
        <Route path="services/pf-esic-return-filing" element={<PFpage/>}/>
        <Route path="/services/import-export-code" element={<ImportExportCodePage />} />
        <Route path="/services/consumer-dispute-resolution" element={<ConsumerDisputeResolutionPage />} />
        <Route path="/services/fssai-license" element={<FSSAILicensePage />} />
        <Route path="/services/odr-services" element={<ODRServicesPage />} />
        <Route path="/login" element={<LoginPage />} />

         {/* Career section with nested routes */}
        <Route path="/career" element={<CareerLayout />}>
          <Route path="CareerHome" element={<CareerHome />} /> 
          <Route path="Contactus" element={<ContactUsPage/>}/>
          <Route path="work" element={<WorkPage/>}/>
          <Route path="media" element={<Media/>}/>
          <Route path="ourfounder" element={<OurFounderPage/>}/>

         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

