"use client";

import { Icon } from "@iconify/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css";
import React from "react";

export default function Downloads() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex h-[calc(100vh-75px] justify-center items-center flex-col gap-6 p-14">
      <div className="p-10 flex flex-col justify-center items-center gap-6 w-3/4 ">
        <div className="text-5xl" data-aos="fade-down" data-aos-delay="200">
          Download Termbook
        </div>
        <div className="pb-6" data-aos="fade-down" data-aos-delay="200">
          Free and built with love, care... and not a lot of sleep.
        </div>
        <div
          className="flex h-full justify-center items-center gap-x-40  p-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="flex flex-col gap-10 ">
            <div className="text-[100px] flex justify-center items-center">
              <Icon icon="devicon:windows8" />
            </div>
            <div className="flex flex-col gap-4 w-full justify-evenly">
              <a
                href="https://termbook.s3.amazonaws.com/termbook_windows32.exe"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center text-center w-36 transition-colors ease-in-out"
              >
                Download
                <br />
                x32
              </a>
              <a
                href="https://termbook.s3.amazonaws.com/termbook_window64.exe"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center text-center w-36 transition-colors ease-in-out"
              >
                Download
                <br />
                x64
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-[100px] flex justify-center items-center">
              <Icon icon="devicon:linux" />
            </div>
            <div className="flex flex-col gap-4 w-full justify-evenly">
              <a
                href="https://termbook.s3.amazonaws.com/termbook_linux32"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center text-center w-36 transition-colors ease-in-out"
              >
                Download
                <br />
                x32
              </a>
              <a
                href="https://termbook.s3.amazonaws.com/termbook_linux64"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center text-center w-36 transition-colors ease-in-out"
              >
                Download
                <br />
                x64
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-[100px] flex justify-center items-center">
              <Icon icon="wpf:mac-os" />
            </div>
            <div className="flex flex-col gap-4 w-full justify-evenly">
              <a
                href="https://termbook.s3.amazonaws.com/termbook_appleintel"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center text-center w-36 transition-colors ease-in-out"
              >
                Download Intel Chip
              </a>
              <a
                href="https://termbook.s3.amazonaws.com/termbook_applesilicon"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center text-center w-36 transition-colors ease-in-out"
              >
                Download Apple Silicon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
