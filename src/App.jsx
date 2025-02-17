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

      // Adjust the scroll position to account for any top margin/padding in the section or content
      const sectionTop = sectionElement.offsetTop;

      // Scroll to the section, with offset for fixed header and optional adjustments
      window.scrollTo({
        top: sectionTop - headerHeight, // Subtract header height to avoid overlap
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
