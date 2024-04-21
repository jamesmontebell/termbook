"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { usePathname } from "next/navigation";
import "../globals.css";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex gap-7">
          <button>
            <Link href="/profile">{session?.user?.name}</Link>
          </button>
          <Link href="/">
            <button className="text-white" onClick={() => signOut()}>
              Sign Out
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function NewNavBar() {
  const pathname = usePathname();

  const ACTIVE = "ml-auto underline text-fuchsia-400/80";
  const UNACTIVE = "ml-auto text-white";

  return (
    <div className="px-10 py-6 w-full font-bold text-l">
      <ul className="flex justify-between items-center text-center">
        <Link href="/">
          <li className="hover:opacity-80 text-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r bg-clip-text from-fuchsia-500 via-cyan-500 to-cyan-500 transition-opacity duration-300">
            Termbook
          </li>
        </Link>
        <div className="flex gap-10">
        <Link href="/about">
            <li className="hover:shadow-md hover:border-b-1 hover:border-fuchsia-500">
              About
            </li>
          </Link>
          <Link href="/downloads">
            <li className="hover:shadow-md hover:border-b-1 hover:border-fuchsia-500">
              Downloads
            </li>
          </Link>
          <Link href="/docs">
            <li className="hover:shadow-md hover:border-b-1 hover:border-fuchsia-500">
              Docs
            </li>
          </Link>
          <li className="hover:shadow-md hover:border-b-1 hover:border-fuchsia-500">
            <AuthButton />
          </li>
        </div>
      </ul>
    </div>
  );
}
