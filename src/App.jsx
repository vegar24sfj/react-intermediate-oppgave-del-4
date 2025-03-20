import React from "react";
import { MenuProvider } from "./Context/MenuContext";
import { ContactProvider } from "./components/ContactForm/ContactContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/AboutPage/AboutPage";
import Skills from "./components/Skills/SkillSection";
import ProjectsSection from "./components/Projects/Projects";
import Contact from "./components/ContactForm/ContactForm";

const App = () => {
  // Scroll function moved inside the App component
  const scrollToSection = (section) => {
    const sectionRefs = {
      home: "home",
      about: "about",
      skills: "skills",
      projects: "projects",
      contact: "contact",
    };
  
    const sectionElement = document.getElementById(sectionRefs[section]);
  
    if (sectionElement) {
      // Get the height of the fixed header
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  
      // Define additional margin for mobile (you can adjust the value as needed)
      const mobileOffset = 20; // Example value, adjust as needed
  
      // Check if it's a mobile device
      const isMobile = window.innerWidth <= 768; // Consider mobile as screens <= 768px
      const sectionTop = sectionElement.offsetTop;
  
      window.scrollTo({
        top: isMobile
          ? sectionTop - mobileOffset // Add a gap on mobile
          : sectionTop - headerHeight, // Use header height for non-mobile
        behavior: "smooth",
      });
    }
  };  

  return (
    <MenuProvider>
      <ContactProvider>
        <div className="flex flex-col min-h-screen">
          <Header scrollToSection={scrollToSection} />
          {/* Main content area */}
          <div className="flex-1">
            <Home scrollToSection={scrollToSection} />
            <div>
              <About />
            </div>
            <div>
              <Skills />
            </div>
            <div>
              <ProjectsSection />
            </div>
            <div>
              <Contact />
            </div>
          </div>
          <Footer />
        </div>
      </ContactProvider>
    </MenuProvider>
  );
};

export default App;
