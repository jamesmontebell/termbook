"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileDetails() {
  const { data: session } = useSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const [journals, setJournals] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = fetch("route");
        if (!(await response).ok) {
          throw new Error("bruh");
        }
        const data = await (await response).json();
        setJournals(data);
      } catch (error) {}
    };
    fetchData();

    return () => {};
  }, []);

  return (
    <div>
      Profile Page {session.user.email} {journals}
    </div>
  );
}
