"use client";

import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Support from "@/components/Home/Support";
import AOS from "aos"; // Import AOS without curly braces
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Support />
        <Footer />
      </main>
    </>
  );
};

export default Home;
