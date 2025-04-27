
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'Trainingslager 26./27.04.2025 in Rostock',
    image: '/news/trainingslager-rostock-2025/trainingslager1.jpg',
    content:
      'Bei bestem Wetter trainierten wir beim KfrG e.V. mit Fokus auf 200 m, 500 m und 2000 m in Vorbereitung auf die Deutsche Meisterschaft 2025 in Halle.',
    link: '/news/trainingslager-rostock-2025',
  },
];

export default function NewsPage() {
  return (
    <main className="bg-sky-950 text-stone-100 py-32 px-6 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-sky-200 mb-16 text-center uppercase"
        >
          News
        </motion.h1>

        <div className="space-y-24">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-sky-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <Link href={item.link} className="block relative group">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200} // Größer gemacht
                    height={800}
                    className="w-full h-80 md:h-[30rem] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-transparent to-transparent" />
                </div>
              

              <div className="p-6 md:p-10">
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
          ))}
        </div>
      </div>
    </main>
  );
}
