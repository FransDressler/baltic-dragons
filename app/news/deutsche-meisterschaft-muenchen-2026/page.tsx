'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Result {
  place: number;
  discipline: string;
  note?: string;
}

const article = {
  // Weiches Trennzeichen, damit das lange Wort auf schmalen Displays sauber umbricht
  title: '12. Gemeinsame Deutsche Drachenboot­meisterschaft',
  locationTime: '31. Juli – 02. August 2026 | München',
  images: [
    '/news/deutsche-meisterschaft-muenchen-2026/team.jpg',
    '/news/deutsche-meisterschaft-muenchen-2026/rennen.jpg',
    '/news/deutsche-meisterschaft-muenchen-2026/pokale.jpg',
  ],
  intro: `Die 12. Gemeinsame Deutsche Drachenbootmeisterschaft in München war für die Baltic Dragons ein voller Erfolg. Erstmals trat unser Team gleichzeitig in den Altersklassen Senior B und Senior C an. In einem stark besetzten Teilnehmerfeld konnten wir zahlreiche Top-Platzierungen erzielen und uns für die Europäischen Drachenboot-Clubmeisterschaften (ECCC) 2027 in Barcelona qualifizieren.`,
  results: [
    {
      distance: '200 Meter',
      entries: [
        { place: 2, discipline: 'Standardboot Mixed, Senior B', note: 'Deutscher Vizemeister' },
        { place: 2, discipline: 'Small Boat Women, Senior B', note: 'Deutscher Vizemeister' },
        { place: 3, discipline: 'Small Boat Open, Senior B' },
        { place: 3, discipline: 'Small Boat Mixed, Senior C' },
      ] as Result[],
    },
    {
      distance: '500 Meter',
      entries: [
        { place: 4, discipline: 'Standardboot Mixed, Senior B' },
        { place: 3, discipline: 'Small Boat Women, Senior B' },
        { place: 3, discipline: 'Small Boat Open, Senior B' },
        { place: 2, discipline: 'Small Boat Mixed, Senior C', note: 'Deutscher Vizemeister' },
      ] as Result[],
    },
    {
      distance: '2.000 Meter',
      entries: [
        { place: 3, discipline: 'Standardboot Mixed, Senior B' },
        { place: 4, discipline: 'Small Boat Women, Senior B' },
        { place: 3, discipline: 'Small Boat Open, Senior B' },
        { place: 3, discipline: 'Small Boat Mixed, Senior C' },
      ] as Result[],
    },
  ],
  outroTitle: 'Ein Team – ein gemeinsames Ziel',
  outro: `Die Ergebnisse zeigen eindrucksvoll, dass sich die intensive Vorbereitung, der Einsatz jedes Einzelnen und unser außergewöhnlicher Teamgeist ausgezahlt haben. Besonders stolz sind wir darauf, dass wir bei unserem ersten gemeinsamen Start in den Altersklassen Senior B und Senior C auf Anhieb zahlreiche Podestplätze erreichen und uns für einen internationalen Höhepunkt qualifizieren konnten.

Unser herzlicher Dank gilt allen Sportlerinnen und Sportlern, unserem Trainer- und Betreuerteam sowie unseren Familien, Freunden und Unterstützern. Eure Motivation und Unterstützung haben maßgeblich zu diesem Erfolg beigetragen.

Mit der Qualifikation für die Europäischen Drachenboot-Clubmeisterschaften (ECCC) 2027 wartet nun das nächste große Ziel auf die Baltic Dragons. Wir freuen uns darauf, unseren Verein und Deutschland in Barcelona zu vertreten und uns dort mit den besten Vereinsmannschaften Europas zu messen.

Barcelona – wir kommen! 🐉💙`,
};

const medals: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

export default function NewsArticlePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-sky-950 text-stone-100 py-32 px-6 md:px-16 min-h-screen relative">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-sky-200 mb-4 text-center uppercase break-words"
        >
          {article.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-sky-300 mb-12 text-center"
        >
          {article.locationTime}
        </motion.p>

        <div className="space-y-12">
          {article.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Deutsche Meisterschaft München 2026 Bild ${index + 1}`}
                width={1000}
                height={800}
                className="w-full h-[30rem] md:h-[40rem] object-cover"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-sky-900 rounded-xl p-6 md:p-10 shadow-xl"
          >
            <p className="text-lg whitespace-pre-line leading-relaxed text-stone-100">
              {article.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-sky-900 rounded-xl p-6 md:p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-sky-300 mb-4">
              Unsere Platzierungen
            </h2>
            <div className="w-16 h-1 bg-sky-400 mb-8" />

            <div className="space-y-8">
              {article.results.map((group) => (
                <div key={group.distance}>
                  <h3 className="text-xl md:text-2xl font-semibold text-sky-200 mb-4 uppercase tracking-wide">
                    {group.distance}
                  </h3>
                  <ul className="space-y-3">
                    {group.entries.map((entry, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 border-b border-sky-800 pb-3 last:border-b-0"
                      >
                        <span className="text-2xl leading-none w-8 shrink-0 text-center">
                          {medals[entry.place] ?? '🏅'}
                        </span>
                        <span className="text-lg leading-relaxed">
                          <span className="font-semibold text-sky-100">
                            {entry.place}. Platz
                          </span>{' '}
                          – {entry.discipline}
                          {entry.note && (
                            <span className="block text-sky-300 font-medium">
                              {entry.note}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-sky-900 rounded-xl p-6 md:p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-sky-300 mb-4">
              {article.outroTitle}
            </h2>
            <div className="w-16 h-1 bg-sky-400 mb-6" />
            <p className="text-lg whitespace-pre-line leading-relaxed text-stone-100">
              {article.outro}
            </p>
          </motion.div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full px-6"
          >
            <Image
              src={selectedImage}
              alt="Vergrößertes Bild"
              width={1600}
              height={1200}
              className="w-full h-auto rounded-xl object-contain"
            />
          </motion.div>
        </div>
      )}
    </main>
  );
}
