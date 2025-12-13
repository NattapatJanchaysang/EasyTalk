"use client";


import React from 'react'
import { motion } from "motion/react";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import ColourfulText from './ui/colourful-text';
import Mainspace from './Mainspace';
import { BackgroundLines } from './ui/background-lines';
import { Mic } from 'lucide-react';


export default function Hero() {
  return (
    <BackgroundLines>
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen px-24 lg:px-40 mx-auto">
      <div>
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Welcome to"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-pink-600"
              >
                <ColourfulText text="EasyTalk" />
              </motion.span>
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          AI ติวเตอร์ภาษาอังกฤษ สุดเฟรนด์ลี่ ที่พร้อมเป็น เพื่อนฝึกคุย ช่วยพัฒนาทักษะการสื่อสารของคุณ พร้อมให้คำแนะนำด้าน ไวยากรณ์ และ จุดที่ต้องปรับปรุงอื่น ๆ แบบฟรี ๆ ตลอด 24 ชั่วโมง
        </motion.p> 
      </div>
      </div>
      <div>
        <Mainspace />
      </div>
    </div>
      
    </BackgroundLines>
  );
}

 