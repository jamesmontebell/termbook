"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../components/postCard";
import "aos/dist/aos.css";
import "../globals.css";
import React from "react";

type Journal = {
  content: string;
  userEmail: string;
  time: string;
};

export default function ProfileDetails() {
  const { data: session } = useSession();
  const [journals, setJournals] = useState<Journal[]>();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch("profile/api/journals");
      const data = await response.json();
      setJournals(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="">
      {/* {entries ? entries[0].content : null} */}

      {journals && <PostCard journals={journals} />}
    </div>
  );
}
