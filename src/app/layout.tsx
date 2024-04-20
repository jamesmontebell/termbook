import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";
import { Footer } from "./components/footer";
import NewNavBar from "./components/NewNavBar";

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
    <html lang="en" className="h-screen">
      <body className="bg-[#121212] text-white min-h-[100vh]">
        <SessionProvider session={session}>
          <div className="flex flex-col justify-center items-center ">
            <NewNavBar />
            <div className="h-[650px] w-screen">{children}</div>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
