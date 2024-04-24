import React from "react";
import Navbar from "../../Components/shared/navbar/Navbar";
import Hero from "../../Components/shared/hero/home";
import Section_One from "./sec_one";
import Footer from "../../Components/shared/footer/Footer";
import TopPicks from "./TopPicks";
import Shell from "./Shell";

export default function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section_One />
      <TopPicks />
      <Shell />
      <Footer />
    </div>
  );
}
