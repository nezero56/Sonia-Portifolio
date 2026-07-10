"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import WorkExperience from "@/components/WorkExperience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Navbar
        mobileOpen={mobileOpen}
        onToggle={() => setMobileOpen(!mobileOpen)}
      />
      <main>
        <Hero />
        <About />
        <Expertise />
        <WorkExperience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
