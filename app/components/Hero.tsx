



'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-sky-950 overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full min-h-full bg-[url('/dragonboat-hero.jpg')] bg-cover bg-center opacity-10" />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] text-center text-stone-100 px-4 pt-[5rem] pb-10 gap-y-4 md:gap-y-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/logo-white.png"
            alt="Baltic Dragons Logo"
            width={700}
            height={200}
            className="mx-auto w-full max-w-[700px] opacity-30"
            priority
          />
        </motion.div>

        {/* Schriftzug */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl drop-shadow-xl w-full max-w-[700px] mx-auto tracking-wide text-white/30 font-black uppercase"
        >
          Baltic Dragons
        </motion.h1>

        {/* Untertitel */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-2 text-base sm:text-lg md:text-2xl max-w-2xl drop-shadow-md"
        >
          Norddeutsches Drachenbootteam mit Leidenschaft, Teamgeist und Power auf dem Wasser.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#mission"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 inline-block border-2 border-sky-200 text-sky-200 font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full shadow-lg hover:bg-sky-50 hover:text-sky-500 transition uppercase"
        >
          Mehr erfahren
        </motion.a>
      </div>
    </section>
  );
}

