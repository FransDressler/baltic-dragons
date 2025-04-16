

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const clubs = [
  {
    name: 'Wassersportclub Wismar',
    position: { top: '60%', left: '35%' },
    image: '/news/news1.jpg',
    info: 'Heimatbasis vieler Baltic Dragons. Hier findet auch das Sonntagstraining statt.',
  },
  {
    name: 'Drachenboot Rostock e.V.',
    position: { top: '40%', left: '45%' },
    image: '/news/news1.jpg',
    info: 'Starker Partnerclub mit vielen Baltic Dragons Mitgliedern.',
  },
  {
    name: 'Hanse-Paddler Lübeck',
    position: { top: '50%', left: '20%' },
    image: '/news/news1.jpg',
    info: 'Trainingspartner auf der Trave. Tolle Gemeinschaft und regelmäßige Events.',
  },
];

export default function StandortePage() {
  const [activeClub, setActiveClub] = useState(clubs[0]);

  return (
    <section className="relative w-full min-h-screen bg-sky-950 py-32 px-6 md:px-16 text-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-sky-200 mb-16 text-center uppercase">
          Das  Team  der  Baltic  Dragons ...  
        </h2>

        <div className="hidden lg:flex flex-col lg:flex-row gap-12 items-start">
          {/* Hintergrundkarte mit Marker */}
          <div className="relative w-full lg:w-2/3 h-[600px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/map-norddeutschland.jpg"
              alt="Karte Norddeutschland"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />

            {clubs.map((club, index) => (
              <button
                key={index}
                onClick={() => setActiveClub(club)}
                onMouseEnter={() => setActiveClub(club)}
                className="absolute bg-sky-500 text-xs px-3 py-1 rounded-full shadow hover:bg-sky-400 transition-all"
                style={{ top: club.position.top, left: club.position.left, transform: 'translate(-50%, -50%)' }}
              >
                {club.name}
              </button>
            ))}
          </div>

          {/* Club Info Panel */}
          <div className="w-full lg:w-1/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClub.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-sky-900 rounded-xl p-6 md:p-10 shadow-xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-sky-300 mb-4">
                  {activeClub.name}
                </h3>
                <div className="relative w-full h-56 mb-6 rounded overflow-hidden">
                  <Image
                    src={activeClub.image}
                    alt={activeClub.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-stone-100 text-base leading-relaxed">
                  {activeClub.info}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Version: Alle Clubs untereinander */}
        <div className="grid gap-12 lg:hidden">
          {clubs.map((club, i) => (
            <div key={i} className="bg-sky-900 rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-sky-300 mb-4">{club.name}</h3>
              <div className="relative w-full h-56 mb-6 rounded overflow-hidden">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-stone-100 text-base leading-relaxed">{club.info}</p>
            </div>
          ))}
        </div>

      </div>
         <h2 className="text-4xl md:text-3xl font-black text-sky-200 mt-16 text-center uppercase">
          ... vereint  unter  dem  <Link href="https://www.kanufreunde.de/" className="mb-1 block mt-6 text-sky-400 hover:text-sky-300 underline">Kanufreunde Rostocker Greif e.V. (KfRG)
          </Link>
         </h2>

    </section>
  );
}
