import React from "react";
import Hero from "../Hero/Hero";

const Home = ({ scrollToSection }) => {
  return (
    <section id="home">
      <Hero scrollToSection={scrollToSection} />
    </section>
  );
};

export default Home;
