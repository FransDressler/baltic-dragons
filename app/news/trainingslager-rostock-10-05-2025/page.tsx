'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const article = {
  title: 'Trainingslager 26./27.04.2025 in Rostock',
  images: [
    '/news/trainingslager-rostock-10-05-2025/trainingslager2.jpg',
    '/news/trainingslager-rostock-10-05-2025/trainingslager1.jpg',
   
  ],
  content: `
    Volle Kraft voraus Richtung Meisterschaft!

    Bei bestem Paddelwetter fand am 10. und 11. Mai unser letztes Trainingslager vor der Deutschen Drachenbootmeisterschaft im Juni statt. In Rostock hieß es für unser Team noch einmal: alles geben, Technik verfeinern und als Mannschaft zusammenwachsen.

    Am Samstag trainierten wir im Wechsel zwischen Großboot und Smallboot – volle Konzentration auf saubere Technik und kraftvolle Schläge. Der Sonntag stand ganz im Zeichen des Großboots: Fokus auf die Rennstruktur über die unterschiedlichen Distanzen, abgestimmte Starts, starke Mittelteile und explosive Zieleinläufe.

    Neben den sportlichen Aspekten kam auch die Teambildung nicht zu kurz – auf dem Wasser und an Land wurde der Teamgeist weiter gestärkt. Mit Rückenwind aus Rostock sind wir nun bereit für das große Saisonhighlight!

    Wir sind ein Team - Baltic Dragons! Wir sind bereit! Auf nach Halle zur Meisterschaft!

  `,
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
                alt={`Trainingslager Bild ${index + 1}`}
                width={1000}
                height={800} // <- Bild deutlich höher gemacht!
                className="w-full h-[30rem] md:h-[40rem] object-cover" // <- Höhe angepasst
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

      {/* Lightbox Overlay */}
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
