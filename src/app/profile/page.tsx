"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../components/postCard";
import "aos/dist/aos.css";
import "../globals.css";
import React from "react";
import { Particles } from "../components/particles";
import AOS from "aos";

export default function ProfileDetails() {
  const { data: session } = useSession();
  const [entries, setEntries] = useState([]);
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(
        "http://localhost:3000/profile/api/journals"
      );
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="">
      {/* <Particles className="absolute inset-0 -z-10 h-full w-full" /> */}

      {/* Profile Page {session.user.email} {journals} */}
      <PostCard />
    </div>
  );
}
