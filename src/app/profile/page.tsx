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

  const dummy = Array(10).fill({
    content:
      "Today is the day after winning 1st place Best Bit Camp Hack! Still kinda of in shock. This is a really big accomplishment and I'm super excited. I'll be working a little today doing some monotonous stuff, and maybe some work on Termbook? We shall see. I'm excited to create a Linkedin post about hte dub as well.",
    userEmail: "bruh",
    time: "2024-04-21",
  });

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
    <div className="p-5">
      <div
        className="p-5 grid grid-cols-5 gap-6 place-items-start h-[800px] overflow-y-scroll"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        {journals &&
          dummy.map((journal, journalIndex) => (
            <PostCard journal={journal} key={journalIndex} />
          ))}
      </div>
    </div>
  );
}
