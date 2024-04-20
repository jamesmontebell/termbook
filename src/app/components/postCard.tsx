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
  DialogPortal
} from "../components/dialog";

export default function PostCard() {
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  const toggleDialog = (id: number) => {
    setOpenDialogId(prev => prev === id ? null : id);
  };

  const cards = [
    {
      id: 1,
      date: "4-9-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?vLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?",
    },
    {
      id: 2,
      date: "5-10-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias ex atque non cupiditate ea ipsum voluptates culpa debitis aperiam a magnam, temporibus vel maiores nisi quo excepturi iure accusamus?",
    },
    {
      id: 3,
      date: "6-11-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?",
    },
    {
      id: 4,
      date: "4-9-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda hic cumque, architecto quae ut deserunt molestias maxime vitae necessitatibus repudiandae nam unde, culpa dignissimos expedita quisquam deleniti delectus quibusdam.",
    },
    {
      id: 5,
      date: "5-10-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias ex atque non cupiditate ea ipsum voluptates culpa debitis aperiam a magnam, temporibus vel maiores nisi quo excepturi iure accusamus?",
    },
    {
      id: 6,
      date: "6-11-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?",
    },
    {
      id: 7,
      date: "4-9-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda hic cumque, architecto quae ut deserunt molestias maxime vitae necessitatibus repudiandae nam unde, culpa dignissimos expedita quisquam deleniti delectus quibusdam.",
    },
    {
      id: 8,
      date: "5-10-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias ex atque non cupiditate ea ipsum voluptates culpa debitis aperiam a magnam, temporibus vel maiores nisi quo excepturi iure accusamus?",
    },
    {
      id: 9,
      date: "6-11-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?",
    },
    {
      id: 10,
      date: "4-9-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda hic cumque, architecto quae ut deserunt molestias maxime vitae necessitatibus repudiandae nam unde, culpa dignissimos expedita quisquam deleniti delectus quibusdam.",
    },
    {
      id: 11,
      date: "5-10-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias ex atque non cupiditate ea ipsum voluptates culpa debitis aperiam a magnam, temporibus vel maiores nisi quo excepturi iure accusamus?",
    },
    {
      id: 12,
      date: "6-11-2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?vLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos est porro, similique cum vitae. Consequatur nam tempore laboriosam unde asperiores alias, aliquid officiis nostrum fugiat at, ducimus iusto ipsam?",
    },
  ];
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="sm:grid sm:gap-12 sm:grid-cols-12 sm:m-5 pr-10 pl-10 sm:justify-center overflow-y-auto max-h-[calc(100vh-200px)]"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="pt-5 sm:col-span-4 mb-4 relative transition duration-500 ease-in-out transform hover:scale-105 hover:z-50"
        >
          <Card className="bg-slate-950 w-full sm:w-[450px] h-auto border border-slate-700 rounded-2xl shadow-md shadow-cyan-400/30 flex flex-col mb-10 hover:shadow-lg hover:shadow-cyan-400/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white">{card.date}</CardTitle>
            </CardHeader>
            <CardDescription className="text-white text-xl leading-relaxed m-5 line-clamp-5">
              {card.content}
            </CardDescription>
            <CardFooter className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    Show More
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-800 rounded-xl p-4">
                      <DialogDescription className="text-slate-200 tracking-wider leading-loose">{card.content}</DialogDescription>
                      <DialogClose className="text-cyan-700 font-medium">Close</DialogClose>
                    </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}