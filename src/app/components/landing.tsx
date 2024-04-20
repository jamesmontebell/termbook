"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import "/src/app/globals.css";
import NewNavBar from "./NewNavBar";

export const LandingPage = () => {
  // Data AOS Animations
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="h-[100vh]">
      <NewNavBar />

      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        {/* Hero */}
        <Hero />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
