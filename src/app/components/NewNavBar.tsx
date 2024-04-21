"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { usePathname } from "next/navigation";

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

  const ACTIVE = "ml-auto underline text-white/80";
  const UNACTIVE = "ml-auto text-white";

  return (
    <div className="px-10 py-6 w-full font-bold text-l">
      <ul className="flex justify-between items-center text-center">
        <Link href="/">
          <li className="text-2xl">Termbook</li>
        </Link>
        <div className="flex gap-10">
          <Link href="/downloads">

            <li className={pathname === "/downloads" ? ACTIVE : UNACTIVE}>
              Downloads
            </li>
          </Link>
          <Link href="/docs">
            <li className={pathname === "/docs" ? ACTIVE : UNACTIVE}>Docs</li>
          </Link>
          <li className={pathname === "/profile" ? ACTIVE : UNACTIVE}>
            <AuthButton />
          </li>
        </div>
      </ul>
    </div>
  );
}
