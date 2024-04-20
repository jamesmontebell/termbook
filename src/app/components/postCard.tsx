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

type PostCardProps = {
  journals: Journal[];
};

export default function PostCard({ journals }: PostCardProps) {
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
    <div
      className="sm:grid sm:gap-12 sm:grid-cols-12 sm:m-5 sm:justify-center overflow-y-auto max-h-[calc(100vh-200px)] p-16"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      {journals.map((card, cardIndex) => (
        <div
          key={cardIndex}
          className="pt-5 sm:col-span-4 relative transition duration-500 ease-in-out transform hover:scale-105 hover:z-50"
        >
          <Card className="bg-slate-950 w-full min-h-[300px] sm:w-[300px] h-auto border border-slate-700 rounded-2xl shadow-md shadow-cyan-400/30 flex flex-col mb-10 hover:shadow-lg hover:shadow-cyan-400/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white">
                {card.time.split("T")[0]}
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-white text-xl leading-relaxed m-5 line-clamp-5">
              {card.content}
            </CardDescription>
            <CardFooter className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Show More</Button>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-800 rounded-xl p-4">
                  <DialogDescription className="text-slate-200 tracking-wider leading-loose">
                    {card.content}
                  </DialogDescription>
                  <DialogClose className="text-cyan-700 font-medium">
                    Close
                  </DialogClose>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
