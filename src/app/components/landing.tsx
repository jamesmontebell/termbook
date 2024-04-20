"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Hero } from "./hero";
// import { Footer } from "./footer";
import '../globals.css';



export const LandingPage = () => {  
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 800,
            easing: "ease-in-out",
            once: true,
        })
    })
    
    return (
        <div>
          <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">

            {/* Hero */}
            <Hero />
          </div>
          <Footer />
        </div>
    );
}