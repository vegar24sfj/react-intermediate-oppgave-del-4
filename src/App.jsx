import React, { useRef, useEffect, useState } from "react";
import { MenuProvider } from "./Context/MenuContext";
import { ContactProvider } from "./components/ContactForm/ContactContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutPage/AboutPage";
import Skills from "./components/Skills/SkillSection";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactForm/ContactForm";

const App = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(76); // fallback

  // Scroll to section (ID må matche section id)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Mål header-høyde dynamisk (kun for Hero padding)
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MenuProvider>
      <ContactProvider>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header ref={headerRef} scrollToSection={scrollToSection} />

          {/* Main content */}
          <main className="flex-1">
            <Hero
              scrollToSection={scrollToSection}
              headerHeight={headerHeight}
            />

            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </ContactProvider>
    </MenuProvider>
  );
};

export default App;
