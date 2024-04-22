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
    redirect("/");
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
    <div className="p-10">
      <div
        className="grid grid-cols-5 gap-6 place-items-start h-[800px] overflow-y-scroll"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        {journals &&
          journals.map((journal, journalIndex) => (
            <PostCard journal={journal} key={journalIndex} />
          ))}
      </div>
    </div>
  );
}
