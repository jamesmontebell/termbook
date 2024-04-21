import React from "react";

import { getServerSession } from "next-auth";
import { TracerScroll } from "./components/tracer/tracerScroll";
import SessionProvider from "./components/SessionProvider";
import { Footer } from "./components/footer";
import NewNavBar from "./components/NewNavBar";
import { Particles } from "../app/components/particles";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Termbook",
  description: "Journaling for developers",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="bg-[#121212] text-white min-h-[100vh] flex flex-col">
        <Particles className="absolute inset-0 -z-10 h-full w-full" />
        <SessionProvider session={session}>
          <div className="flex flex-col justify-center items-center ">
            <NewNavBar />
            <main className="flex-grow">
              {children}
            </main>
            <div className="mt-auto">
            <Footer />
            </div>
            </div>
        </SessionProvider>
      </body>
    </html>
  );
}


// children h-[600px]