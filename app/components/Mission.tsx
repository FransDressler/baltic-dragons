

'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    
<section
  id="mission"
  className="relative w-full bg-sky-800 py-36 px-6 md:px-16 text-stone-100 overflow-hidden"
>

<div className="w-1 h-20 bg-sky-600 mx-auto mb-12 rounded-full opacity-40" />
  {/* Wasserzeichen */}
  <Image
    src="/baltics-logo-light.png"
    alt="Wasserzeichen"
    width={800}
    height={800}
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 blur-sm pointer-events-none"
    aria-hidden
  />

  <div className="max-w-5xl mx-auto text-center relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black text-sky-200 mb-6 uppercase"
    >
      Mission
    </motion.h2>

    {/* Linie */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-1 w-24 bg-sky-400 mx-auto mb-10 origin-left"
    />

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
    >
     Die Baltic Dragons stehen für Erfahrung, Verlässlichkeit und sportliche Ambition. Als Ü50-Team vereinen wir individuelle Stärken zu einer gemeinsamen Kraft – für Trainingslager und Wettbewerbe, die uns herausfordern und verbinden.
    </motion.p>
  </div>

<div className="w-1 h-20 bg-sky-600 mx-auto mt-12 rounded-full opacity-40" />
</section>
  );
}

