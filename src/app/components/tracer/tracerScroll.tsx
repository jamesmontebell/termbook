"use client";
import "../../globals.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { Particles } from "../particles";

export function TracerScroll() {
  return (
    <TracingBeam className="-px-6">
      <Particles />
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2
              className="border border-white font-bold bg-gradient-to-l from-fuchsia-700 via-cyan-500 to-cyan-500 text-white rounded-md text-3xl w-fit px-4 py-2 mb-3"
              style={{
                textShadow:
                  "1px 1px 0 #000, -1px 1px 0 #000, 4px -4px 4px #000, -1px -1px 0 #000",
              }}
            >
              {item.badge}
            </h2>

            <p className="text-2xl pt-3 font-medium mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "A Journal That Keeps You Accountable.",
    description: (
      <div className="text-white">
        <p className="text-white font-semibold">
          Just follow our verbose{" "}
          <u>
            <Link
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r 
  from-fuchsia-400 via-fuchsia-300 to-fuchsia-300 font-bold "
            >
              installation instructions
            </Link>
          </u>{" "}
          and get up and running with your own personal Terminal-Based Journal
          in just a few minutes.
        </p>
        <p></p>
        <p className="font-semibold">
          Termbook isn't just a program to make text files. It's a complete
          journaling system built to keep developers on their self-discovery
          journey.
        </p>
      </div>
    ),
    badge: "Termbook",
    image: "/update.jpeg",
  },
  {
    title:
      "We Know You're Busy, and That's Why We Built Termbook Around YOUR Schedule.",
    description: (
      <div className="text-white">
        <p className="text-white font-semibold">
          Journaling helps you grow through{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
from-cyan-300 via-fuchsia-300 to-fuchsia-400 font-semibold"
          >
            personal reflection
          </span>{" "}
          and there's no other better way for developers to Journal than Termbook.
        </p>
        <p></p>
        <p className="font-semibold">
          Termbook features a seamless CLI interface for submitting your
          journals, ensuring you don't have to remember to go to some random
          website each day. Termbook integrates seamlessly into your daily work
          flow by prompting you once a day to write an entry of at least 50
          words for your Journal. Our program won't let you progress until you
          submit your daily entry, so you know you won't forget. All this allows
          Termbook to you empower you with a new day's worth of personal growth
          every day.
        </p>
      </div>
    ),
    badge: "How it Works",
    image: "/entry.jpeg",
  },
  {
    title:
      "Say Goobye to YoYo Journaling, with Termbook You'll Never Miss a Journal Entry Again.",
    description: (
      <div className="text-white">
        <p className="text-white font-semibold">
          Termbook{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
from-cyan-300 via-fuchsia-300 to-fuchsia-400 font-semibold"
          >
            keeps you accountable
          </span>{""}.  We know how hard it is to keep submitting to a Journal every day, but we also know how important it is to your personal growth and mental health. That's why we made sure you couldn't just Ctrl + C your way out of this one.
        </p>
        <p></p>
        <p className="font-semibold">
          A study published in the Journal of clinical Psychology showed
          participants who engaged in expressive writing experienced a
          significant decrease in depressive symptoms, with scores dropping by an
          average of 17% over the course of the study. The University of
          Rochester Medical Center study reported a 40% reduction in self-reported
          stress levels among participants who journaled regularly for at least 10
          minutes a day over the course of two weeks. This is why we built Termbook how we did, everyone owes themselves these things.
        </p>
      </div>
    ),
    badge: "Hello Termbook.",
    image: "/ctrlcFail.jpeg",
  },
];
