import Link from "next/link";
import Image from "next/image";

export default function Scroll() {
  return (
    <div className="flex flex-col gap-4 px-40 py-10 h-full text-xl">
      <div className="flex gap-10 flex-col">
        <div className="flex flex-col justify-center items-center">
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
        <div className="flex flex-col justify-center items-center">
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
        <div className="flex flex-col justify-center items-center">
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
