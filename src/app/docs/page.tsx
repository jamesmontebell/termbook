"use client";

import "../globals.css";
import React from "react";

import { useMDXComponents } from "../../mdx-components";
import MDXContent from "./content.mdx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Particles } from "../components/particles";

export default function Page() {
  const components = useMDXComponents({});
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-10 pt-10">
      <div
        className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-700 flex shadow-lg shadow-cyan-600 justify-center opacity-98 flex-grow w-3/4  
      "
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <article
          className="prose  text-left text-white prose-headings:text-white prose-code:text-white py-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <MDXContent components={components} />
        </article>
      </div>
    </div>
  );
}
