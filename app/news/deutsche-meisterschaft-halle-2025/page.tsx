'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const article = {
  title: '11. Deutsche Drachenbootmeisterschaft in Halle',
  images: [
    '/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg',
  ],
  content: `11. Deutsche Drachenbootmeisterschaft in Halle (13.–15.06.2025) – ein Wochenende voller Power, Teamgeist und Emotionen!

Unser Ergebnis? Einfach unglaublich!

ST Mixed 200m – Gold | Deutscher Meister
SM Open 200m – Silber | Vizemeister
SM Damen 200m – Silber | Vizemeister
ST Mixed 500m – Gold | Deutscher Meister
SM Open 500m – Silber | Vizemeister
SM Damen 500m – Silber | Vizemeister
ST Mixed 2000m – Silber | Vizemeister
SM Open 2000m – Silber | Vizemeister
SM Damen 2000m – Silber | Vizemeister

Wir sind einfach nur happy – das harte Training hat sich sowas von ausgezahlt!

Riesendank an den 1. Hallerschen Drachenbootverein für die mega organisierte Meisterschaft!
Ein fettes Dankeschön auch an unsere Supporter Kerstin & Andrea – ohne euch geht gar nichts!
Und natürlich: DANKE an unseren Coach Dietmar – die Quälerei, dein Einsatz und selbst die Max-Mustermann-Filme haben gefruchtet!`,
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
                alt={`Deutsche Meisterschaft Bild ${index + 1}`}
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
