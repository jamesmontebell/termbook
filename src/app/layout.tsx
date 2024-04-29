import React from "react";

import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import NewNavBar from "./components/NewNavBar";
import { Particles } from "../app/components/particles";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
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
      <body className="bg-[#121212] text-white">
        <Particles className="absolute -z-10 min-h-screen w-full" />
        <SessionProvider session={session}>
          <div className="flex flex-col">
            <NewNavBar />
            <main>{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

// children h-[600px]
