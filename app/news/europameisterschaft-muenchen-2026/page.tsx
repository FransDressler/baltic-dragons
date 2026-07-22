'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const article = {
  title: 'Erfolgreiche Europameisterschaft für unsere Baltic Dragons',
  images: [
    '/news/europameisterschaft-muenchen-2026/europameisterschaft.jpeg',
  ],
  content: `Besser spät als nie: Mit großer Freude gratulieren wir unseren acht Baltic Dragons, die unseren Verein bei der 16. IDBF Drachenboot-Europameisterschaft (ENC 2026) in München-Oberschleißheim vertreten haben, zu ihren herausragenden Erfolgen.

Vom 8. bis 12. Juli 2026 trafen sich auf der historischen Olympia-Regattastrecke mehr als 1.800 Athletinnen und Athleten aus 28 Nationen, um in spannenden Wettkämpfen um die Europameistertitel zu paddeln. Bei hervorragenden Wetterbedingungen lieferten sich die Nationalteams vier Tage lang packende Rennen auf höchstem sportlichen Niveau.

Unsere acht Baltic Dragons gingen in verschiedenen Altersklassen für die deutsche Nationalmannschaft an den Start und kehren mit einer beeindruckenden Medaillenausbeute zurück:

🥇 14 Goldmedaillen
🥈 16 Silbermedaillen
🥉 16 Bronzemedaillen

Diese außergewöhnlichen Erfolge sind das Ergebnis von großem Trainingsfleiß, Teamgeist und Leidenschaft für den Drachenbootsport. Wir sind stolz, dass unsere Sportlerinnen und Sportler den Verein auf internationaler Bühne so erfolgreich vertreten haben und gratulieren herzlich zu diesen großartigen Leistungen.

Herzlichen Glückwunsch – wir sind stolz auf euch! 🐉🏆💙❤️`,
};

export default function NewsArticlePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-sky-950 text-stone-100 py-32 px-6 md:px-16 min-h-screen relative">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-sky-200 mb-12 text-center uppercase"
        >
          {article.title}
        </motion.h1>

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
                alt={`Europameisterschaft Bild ${index + 1}`}
                width={1000}
                height={800}
                className="w-full h-[30rem] md:h-[40rem] object-cover"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: article.images.length * 0.1 }}
            className="bg-sky-900 rounded-xl p-6 md:p-10 shadow-xl"
          >
            <p className="text-lg whitespace-pre-line leading-relaxed text-stone-100">
              {article.content}
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
