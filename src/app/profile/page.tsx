"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../components/postCard"
import "../globals.css"

export default function ProfileDetails() {
  const { data: session } = useSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const [journals, setJournals] = useState<string>();

  useEffect(() => {
    fetch("/api/journals")
      .then((res) => res.json())
      .then((data) => setJournals(data.name));
  }, []);

  return (
    <div>
      Profile Page {session.user.email} {journals}
      <PostCard />
    </div>
  );
}
