"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Circle from '../components/ui/Circle';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4">

      <div className='absolute inset-0 flex items-center justify-center z-0'>
        <Circle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
        }}
        className="relative z-10 w-full max-w-md text-center flex flex-col items-center gap-8"
      >
        <div className="flex justify-center items-center w-full mb-8">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 max-[700px]:text-[1.5rem]">
            CHATBOT PFR AI
          </h1>
          <p className="text-gray-300 text-lg max-[700px]:text-[0.875rem]">
            Para começar, clique no botão abaixo:
          </p>
        </div>

        <Link
          href="/login"
          className="relative inline-block group font-semibold text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 max-[700px]:w-[10rem]"
        >
          <span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-transform duration-500 group-hover:translate-x-1 max-[700px]:text-[0.65rem]">
                Let's get started
              </span>
              <svg
                className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </span>
        </Link>
      </motion.div>
    </main>
  );
}