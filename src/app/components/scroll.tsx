"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

import "../globals.css";
import Image from "next/image";

export default function Scroll() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const HEADER =
    "font-extrabold gradient-text text-transparent animate-gradient text-5xl w-fit py-4";
  const SUBHEADER = "text-2xl pt-3 font-medium";
  const LINKS = "gradient-text text-transparent animate-gradient";
  return (
    <div className="flex flex-col gap-4 px-40 h-full text-xl">
      <div
        className="flex gap-10 flex-col"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div className="flex justify-center items-center gap-3 p-10">
          <div className="flex flex-col">
            <div className={HEADER}>Termbook</div>
            <div className={SUBHEADER}>
              A journal that keeps you accountable
            </div>
            <div className="pb-2">
              Just follow our verbose{" "}
              <Link href="/docs" className={LINKS}>
                installation instructions
              </Link>{" "}
              and get up and running with your own personal Terminal-Based
              Journal in just a few minutes.
            </div>
            <div>
              Termbook isn't just a program to make text files. It's a complete
              journaling system built to keep developers on their self-discovery
              journey.
            </div>
          </div>
          <Image
            src="/update.jpeg"
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg object-cover w-1/3"
          ></Image>
        </div>
        <div className="flex justify-center items-center gap-3 p-10">
          <div className="flex flex-col">
            <div className={HEADER}>How it works</div>
            <div className={SUBHEADER}>
              We know you're busy and that's why we built Termbook around your
              schedule.
            </div>
            <div>
              Journaling helps you grow through{" "}
              <span className={LINKS}>personal reflection</span> and there's no
              other better way for developers to Journal than Termbook. Termbook
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
          <Image
            src="/entry.jpeg"
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg object-cover w-1/2"
          ></Image>
        </div>
        <div className="flex justify-center items-center gap-3 p-10">
          <div className="flex flex-col">
            <div className={HEADER}>Hello Termbook</div>
            <div className={SUBHEADER}>
              Say goodbye to yoyo journaling, with Termbook you'll never miss a
              journal entry again.
            </div>
            <div className="pb-2">
              Termbook <span className={LINKS}>keeps you accountable.</span> We
              know how hard it is to keep submitting to a Journal every day, but
              we also know how important it is to your personal growth and
              mental health. That's why we made sure you couldn't just Ctrl + C
              your way out of this one.
            </div>
            <div>
              A study published in the Journal of clinical Psychology showed
              participants who engaged in expressive writing experienced a
              significant decrease in depressive symptoms, with scores dropping
              by an average of 17% over the course of the study. The University
              of Rochester Medical Center study reported a 40% reduction in
              self-reported stress levels among participants who journaled
              regularly for at least 10 minutes a day over the course of two
              weeks. This is why we built Termbook how we did, everyone owes
              themselves these things.
            </div>
          </div>
          <Image
            src="/ctrlcFail.jpeg"
            alt="blog thumbnail"
            height="1000"
            width="1000"
            className="rounded-lg object-cover w-1/2"
          ></Image>
        </div>
      </div>
    </div>
  );
}
