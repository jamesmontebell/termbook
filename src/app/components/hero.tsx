import { Icon } from "@iconify/react/dist/iconify.js";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-y-10">
      <div className="flex justify-center items-center text-center gap-40 p-6">
        <div className="text-left">
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
      <div className="animate-bounce">
        <Icon className="w-10 h-10" icon="mdi:arrow-down" />
      </div>
    </div>
  );
}
