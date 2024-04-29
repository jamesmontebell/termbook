"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import "./globals.css";
import Scroll from "./components/scroll";
import Hero from "./components/hero";

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <div className="pb-5 w-[90%] pt-28">
        <Scroll />
      </div>
    </div>
  );
}
