import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import PackagesSection from "./components/PackagesSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <PackagesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
