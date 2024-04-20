"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../components/postCard";
import "aos/dist/aos.css";
import "../globals.css";
import AOS from "aos";

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
    <div className="">
      {/* Profile Page {session.user.email} {journals} */}
      <PostCard />
    </div>
  );
}
