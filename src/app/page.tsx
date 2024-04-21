"use client";
import React from "react";
import { TracerScroll } from "./components/tracer/tracerScroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import "./globals.css";
import Image from "next/image";

export function Scroll() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="flex flex-col gap-4 px-40 h-full text-xl">
      <div className="flex gap-10 flex-col">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div
            className="border border-white font-bold bg-gradient-to-l from-fuchsia-700 via-cyan-500 to-cyan-500 text-white rounded-md text-3xl w-fit px-4 py-2 mb-3"
            style={{
              textShadow:
                "1px 1px 0 #000, -1px 1px 0 #000, 4px -4px 4px #000, -1px -1px 0 #000",
            }}
          >
            Termbook
          </div>
          <div className="text-2xl pt-3 font-medium mb-4">
            A journal that keeps you accountable
          </div>
          <Image
            src="/update.jpeg"
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg mb-10 object-cover"
          ></Image>
          <div className="pb-2">
            Just follow our verbose{" "}
            <Link
              href="/docs"
              className="text-transparent bg-clip-text bg-gradient-to-r 
  from-fuchsia-400 via-fuchsia-300 to-fuchsia-300 font-bold hover:text-fuchsia-500 "
            >
              installation instructions
            </Link>{" "}
            and get up and running with your own personal Terminal-Based Journal
            in just a few minutes.
          </div>
          <div>
            Termbook isn't just a program to make text files. It's a complete
            journaling system built to keep developers on their self-discovery
            journey.
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div
            className="border border-white font-bold bg-gradient-to-l from-fuchsia-700 via-cyan-500 to-cyan-500 text-white rounded-md text-3xl w-fit px-4 py-2 mb-3"
            style={{
              textShadow:
                "1px 1px 0 #000, -1px 1px 0 #000, 4px -4px 4px #000, -1px -1px 0 #000",
            }}
          >
            How it works
          </div>
          <div className="text-2xl pt-3 font-medium mb-4">
            We know you're busy and that's why we built Termbook around your
            schedule.
          </div>
          <Image
            src="/entry.jpeg"
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg mb-10 object-cover"
          ></Image>
          <div>
            Journaling helps you grow through{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
from-cyan-300 via-fuchsia-300 to-fuchsia-400 font-semibold"
            >
              personal reflection
            </span>{" "}
            and there's no other better way for developers to Journal than
            Termbook. Termbook
            <br />
            <br />
            features a seamless CLI interface for submitting your journals,
            ensuring you don't have to remember to go to some random website
            each day. Termbook integrates seamlessly into your daily work flow
            by prompting you once a day to write an entry of at least 50 words
            for your Journal. Our program won't let you progress until you
            submit your daily entry, so you know you won't forget. All this
            allows Termbook to you empower you with a new day's worth of
            personal growth every day.
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div
            className="border border-white font-bold bg-gradient-to-l from-fuchsia-700 via-cyan-500 to-cyan-500 text-white rounded-md text-3xl w-fit px-4 py-2 mb-3"
            style={{
              textShadow:
                "1px 1px 0 #000, -1px 1px 0 #000, 4px -4px 4px #000, -1px -1px 0 #000",
            }}
          >
            Hello Termbook
          </div>
          <div className="text-2xl pt-3 font-medium mb-4">
            Say goodbye to yoyo journaling, with Termbook you'll never miss a
            journal entry again.
          </div>
          <Image
            src="/ctrlcFail.jpeg"
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg mb-10 object-cover"
          ></Image>
          <div className="pb-2">
            Termbook{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
from-cyan-300 via-fuchsia-300 to-fuchsia-400 font-semibold"
            >
              keeps you accountable.
            </span>{" "}
            We know how hard it is to keep submitting to a Journal every day,
            but we also know how important it is to your personal growth and
            mental health. That's why we made sure you couldn't just Ctrl + C
            your way out of this one.
          </div>
          <div>
            A study published in the Journal of clinical Psychology showed
            participants who engaged in expressive writing experienced a
            significant decrease in depressive symptoms, with scores dropping by
            an average of 17% over the course of the study. The University of
            Rochester Medical Center study reported a 40% reduction in
            self-reported stress levels among participants who journaled
            regularly for at least 10 minutes a day over the course of two
            weeks. This is why we built Termbook how we did, everyone owes
            themselves these things.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <div className="min-h-[700px] relative w-[95%] flex justify-center items-center h-full pb-6 mb-20 pt-2 text-center gap-40">
        <div className="text-left px-8">
          <h1
            className="pb-4 font-extrabold tracking-tight gradient-text text-transparent text-5xl animate-gradient"
            data-aos="fade-down"
          >
            Journaling for
          </h1>
          <h1
            className="pb-4 font-extrabold tracking-tight gradient-text text-transparent animate-gradient text-5xl"
            data-aos="fade-down"
          >
            developers
          </h1>
          <p
            className="mb-8 text-lg text-white-300/40 font-medium"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Alleviate stress through journaling, this time we WON'T let you quit
          </p>
          <div
            className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Link
              className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-white hover:bg-white/80 group"
              href="/docs"
            >
              Get Started{" "}
              <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
            </Link>
          </div>
        </div>

        <div
          className="font-extrabold tracking-tight text-5xl bg-clip-text "
          data-aos="fade-down"
        >
          <Icon className="w-80 h-80" icon="bi:journal-text" />
        </div>
      </div>
      <div className="pb-5 w-[90%] scroll-wrapper mt-10 mb-10 mx-auto relative">
        <Scroll />
      </div>
    </div>
  );
}
