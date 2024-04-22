"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Button } from "../components/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
  DialogPortal,
} from "../components/dialog";

type Journal = {
  content: string;
  userEmail: string;
  time: string;
};

type JournalEntryProps = {
  journal: Journal;
};

export default function PostCard({ journal }: JournalEntryProps) {
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  const toggleDialog = (id: number) => {
    setOpenDialogId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Card className="bg-zinc-950 sm:w-[300px] border border-zinc-700 rounded-2xl shadow-md shadow-blue-400/30 flex flex-col hover:shadow-lg hover:shadow-blue-500/30 transition duration-500 ease-in-out transform hover:scale-105 hover:z-50">
      <CardHeader className="">
        <CardTitle className="text-white">
          {journal.time.split("T")[0]}
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-white w-full text-xl p-5 h-[160px] line-clamp-5">
        {journal.content}
      </CardDescription>
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Show More</Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-800 rounded-xl p-4">
            <DialogDescription className="text-slate-200 tracking-wider leading-loose">
              {journal.content}
            </DialogDescription>
            <DialogClose className="text-cyan-700 font-medium">
              Close
            </DialogClose>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
