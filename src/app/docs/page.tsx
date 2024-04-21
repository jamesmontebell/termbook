"use client";

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
    <div>
    <div className="flex flex-col min-h-screen pb-10 pt-10 z-30 relative">
      <div
        className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-700 flex shadow-lg shadow-cyan-600 mx-20 my-0.7 justify-left opacity-98 flex-grow
      "
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <article
          className="prose my-5 mx-5 text-left text-white prose-headings:text-white prose-code:text-white"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <MDXContent components={components} />
        </article>
      </div>
    </div>
    </div>
  );
}
