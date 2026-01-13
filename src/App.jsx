import React, { useRef, useEffect, useState } from "react";
import { MenuProvider } from "./Context/MenuContext";
import { ContactProvider } from "./components/ContactForm/ContactContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Hero";
import About from "./components/AboutPage/AboutPage";
import Skills from "./components/Skills/SkillSection";
import ProjectsSection from "./components/Projects/Projects";
import Contact from "./components/ContactForm/ContactForm";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const offsetTop = section.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  // Update header height dynamically
  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);

    const handleResize = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MenuProvider>
      <ContactProvider>
        <div className="flex flex-col min-h-screen">
          <Header ref={headerRef} scrollToSection={scrollToSection} />

          <main className="flex-1">
            <Hero scrollToSection={scrollToSection} headerHeight={headerHeight} />
            <About />
            <Skills />
            <ProjectsSection />
            <Contact />
          </main>

          <Footer scrollToSection={scrollToSection} />
        </div>
      </ContactProvider>
    </MenuProvider>
  );
};

export default App;
