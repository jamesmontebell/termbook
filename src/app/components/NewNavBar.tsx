"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { usePathname } from "next/navigation";
import "../globals.css";

const ACTIVE = "shadow-md underline decoration-blue-500 underline-offset-4";
const UNACTIVE =
  "hover:shadow-md hover:underline hover:decoration-blue-500 hover:underline-offset-4";

function AuthButton() {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (session) {
    return (
      <>
        <div className="flex gap-7">
          <button className={pathname === "/profile" ? ACTIVE : UNACTIVE}>
            <Link href="/profile">{session?.user?.name}</Link>
          </button>
          <button className={UNACTIVE} onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <button
        className={pathname != "/" ? ACTIVE : UNACTIVE}
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}

export default function NewNavBar() {
  const pathname = usePathname();

  return (
    <div className="px-10 py-6 w-full font-bold text-l h-[75px] sticky top-0 left-0 z-50 bg-zinc-950/50">
      <ul className="flex justify-between items-center text-center">
        <Link href="/">
          <li
            className={
              pathname === "/"
                ? "text-2xl shadow-md underline decoration-blue-500 underline-offset-4"
                : " text-2xl hover:shadow-md hover:underline hover:decoration-blue-500 hover:underline-offset-4"
            }
          >
            Termbook
          </li>
        </Link>
        <div className="flex gap-10">
          <Link href="/about">
            <li className={pathname === "/about" ? ACTIVE : UNACTIVE}>About</li>
          </Link>
          <Link href="/downloads">
            <li className={pathname === "/downloads" ? ACTIVE : UNACTIVE}>
              Downloads
            </li>
          </Link>
          <Link href="/docs">
            <li className={pathname === "/docs" ? ACTIVE : UNACTIVE}>Docs</li>
          </Link>
          <li>
            <AuthButton />
          </li>
        </div>
      </ul>
    </div>
  );
}
