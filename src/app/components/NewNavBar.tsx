"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react" 

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
            <button onClick={() => signOut()}>Sign Out</button>
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
  return (
    <div className="px-10 py-6 w-full font-bold text-l">
      <ul className="flex justify-between items-center text-center">
        <Link href="/">
          <li className="text-2xl">Termbook</li>
        </Link>
        <div className="flex gap-10">
          <Link href="/downloads">
            <li className="ml-auto hover:bg-">Downloads</li>
          </Link>
          <Link href="/docs">
            <li className="ml-auto">Docs</li>
          </Link>
          <li className="ml-auto">
            <AuthButton />
          </li>
        </div>
      </ul>
    </div>
  );
}
