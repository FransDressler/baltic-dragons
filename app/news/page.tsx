
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const news = [
  {
    title: '11. Deutsche Drachenbootmeisterschaft 2025',
    image: '/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg',
    content:
      '2x Gold und 7x Silber! Bei der 11. Deutschen Drachenbootmeisterschaft in Halle (13.–15.06.2025) holten die Baltic Dragons den Titel als Deutscher Meister im ST Mixed 200m und 500m.',
    link: '/news/deutsche-meisterschaft-halle-2025',
  },
  {
    title: 'Trainingslager 10./11.05.2025 in Rostock',
    image: '/news/trainingslager-rostock-10-05-2025/trainingslager2.jpg',
    content:
      'Am Samstag trainierten wir im Wechsel zwischen Großboot und Smallboot – volle Konzentration auf saubere Technik und kraftvolle Schläge. Der Sonntag stand ganz im Zeichen des Großboots: Fokus auf die Rennstruktur über die unterschiedlichen Distanzen, abgestimmte Starts, starke Mittelteile und explosive Zieleinläufe.',
    link: '/news/trainingslager-rostock-10-05-2025',
  },
  {
    title: 'Trainingslager 26./27.04.2025 in Rostock',
    image: '/news/trainingslager-rostock-2025/trainingslager1.jpg',
    content:
      'Bei bestem Wetter trainierten wir beim KfrG e.V. mit Fokus auf 200 m, 500 m und 2000 m in Vorbereitung auf die Deutsche Meisterschaft 2025 in Halle.',
    link: '/news/trainingslager-rostock-2025',
  },
];

export default function NewsPage() {
  return (
    <main className="bg-sky-950 text-stone-100 py-32 px-6 md:px-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-sky-200 mb-16 text-center uppercase"
        >
          News
        </motion.h1>

        <div className="space-y-24">
          {news.map((item, index) => {
            const imageRight = index % 2 === 1;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-sky-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <Link
                  href={item.link}
                  className={`block md:flex ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className="relative md:w-1/2 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent md:bg-none" />
                  </div>

                  <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
                    <h2 className="text-3xl font-bold text-sky-300 mb-4">
                      {item.title}
                    </h2>
                    <div className="w-16 h-1 bg-sky-400 mb-6" />
                    <p className="text-lg whitespace-pre-line leading-relaxed text-stone-100">
                      {item.content}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
