"use client";

import React from "react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css";

export default function Page() {
  // const components = useMDXComponents({});
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-10 pt-10 z-30 relative">
      <div
        className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border rounded-lg border-cyan-700 flex shadow-lg shadow-cyan-600 mx-20 my-0.7 justify-left opacity-98 flex-grow
      "
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <article
          className="my-5 mx-5"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div>
          <h1
          className="pb-10 font-extrabold tracking-tight text-transparent text-5xl bg-gradient-to-r bg-clip-text from-fuchsia-500 via-cyan-500 to-cyan-500"
          data-aos="fade-down"
        >
            About Termbook
          </h1>
          <h2 className="pb-4 text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-cyan-300 via-cyan-50 to-cyan-50">
            Inspiration
          </h2>
          <div className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border rounded-lg border-cyan-700 flex shadow-inner shadow-slate-600">
          <p className="pb-4 text-lg text-white tracking-wide leading-loose mx-10 my-5">
          Our team agreed journaling makes us feel better. From stress relief, to self reflection, to improved ability to communicate and express ourselves - the benefits of journaling are incredible. But it can be very hard for busy developers to remember to journal - even if it would greatly benefit their mental health. 
          </p>
          </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// return (
//   <div className="flex flex-col min-h-screen pb-10 pt-10 z-30 relative">
//     <div
//       className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-700 flex shadow-lg shadow-cyan-600 mx-20 my-0.7 justify-left opacity-98 flex-grow
//     "
//       data-aos="fade-down"
//       data-aos-delay="200"
//     >
//       <article
//         className="prose my-5 mx-5 text-left text-white prose-headings:text-white prose-code:text-white"
//         data-aos="fade-down"
//         data-aos-delay="400"
//       >
//         <MDXContent components={components} />
//       </article>
//     </div>
//   </div>
// );


// <!-- # **Inspiration**
// Our team shares the belief that **journaling** is great for ones **mental health**. From stress relief, to self reflection, to improved ability to communicate and express ourselves - the benefits of journaling are incredible. As great as journaling is it can be very **hard for busy developers to remember to journal every day** - even if it would greatly **benefit their mental health**, so we wanted to develop a way to integrate into their workflow and keep them committed.
// <br></br>

// # **What it does**
// **Termbook** is a complete journaling system to **keep developers on the journaling journey**. Each time you open your terminal - you will be prompted to enter a journal entry for the day (unless you already have). Our program will force you to write at least **50 words** so you can unburden and reflect. You can then use a **cloud based web app** to view all your **previous entries**. You can use the github account you use every day with our service! We have **fantastic docs** and **cross platform support** so no matter who you are, you can get started journaling with us. -->