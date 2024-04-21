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
            <li
              className={
                pathname === "/about"
                  ? "shadow-md underline decoration-fuchsia-500 underline-offset-4"
                  : "hover:shadow-md hover:underline hover:decoration-fuchsia-500 hover:underline-offset-4"
              }
            >
              About
            </li>
          </Link>
          <Link href="/downloads">
            <li
              className={
                pathname === "/downloads"
                  ? "shadow-md underline decoration-fuchsia-500 underline-offset-4"
                  : "hover:shadow-md hover:underline hover:decoration-fuchsia-500 hover:underline-offset-4"
              }
            >
              Downloads
            </li>
          </Link>
          <Link href="/docs">
            <li
              className={
                pathname === "/docs"
                  ? "shadow-md underline decoration-fuchsia-500 underline-offset-4"
                  : "hover:shadow-md hover:underline hover:decoration-fuchsia-500 hover:underline-offset-4"
              }
            >
              Docs
            </li>
          </Link>
          <li
            className={
              pathname === "/profile"
                ? "shadow-md underline decoration-fuchsia-500 underline-offset-4"
                : "hover:shadow-md hover:underline hover:decoration-fuchsia-500 hover:underline-offset-4"
            }
          >
            <AuthButton />
          </li>
        </div>
      </ul>
    </div>
  );
}
