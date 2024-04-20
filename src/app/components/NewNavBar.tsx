"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
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
            <li className="ml-auto">Downloads</li>
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
