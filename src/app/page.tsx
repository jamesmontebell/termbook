"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { Particles } from "../app/components/Particles";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="h-[100vh]">
      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        <div className="pt-20">
          <Particles className="absolute inset-0 -z-10" />
          <div className="text-center px-8">
            <h1
              className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400"
              data-aos="fade-down"
            >
              Welcome to TermBook
            </h1>
            <p
              className="mb-8 text-lg text-zinc-300/40 font-medium"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Alleviate Stress Through Journaling, this time we WON'T let you
              quit
            </p>
            <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link
                className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                href="#calendly"
              >
                Sign Up Now{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
