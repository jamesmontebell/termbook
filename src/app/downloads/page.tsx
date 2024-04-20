"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import AOS from "aos";

export default function Downloads() {
  const { data: session } = useSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-full flex-col gap-6">
      <div className="text-5xl" data-aos="fade-down" data-aos-delay="200">
        Download Termbook
      </div>
      <div data-aos="fade-down" data-aos-delay="200">
        Free and built with love, care... and not a lot of sleep.
      </div>
      <div className="w-3/4 flex justify-center items-center">
        <div
          className="flex h-full p-10 w-3/4 justify-center items-center gap-[200px]"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="text-[100px]">
            <Icon icon="devicon:windows8" />
          </div>
          <div className="text-[100px]">
            <Icon icon="devicon:linux" />
          </div>
          <div className="text-[100px]">
            <Icon icon="wpf:mac-os" />
          </div>
        </div>
      </div>
      <div className="flex gap-[160px] " data-aos="fade-down">
        <div className="flex flex-col gap-4 w-full justify-evenly">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Download
            <br />
            x32
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Download
            <br />
            x64
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full justify-around p-1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Download
            <br />
            x32
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Download
            <br />
            x64
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full justify-around">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Download Intel chip
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Download Apple silicon
          </button>
        </div>
      </div>
    </div>
  );
}
