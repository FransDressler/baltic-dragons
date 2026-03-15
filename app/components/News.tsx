
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    title: '11. Deutsche Drachenbootmeisterschaft 2025',
    image: '/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg',
    description:
      '2x Gold, 7x Silber bei der 11. Deutschen Drachenbootmeisterschaft in Halle! Deutscher Meister im ST Mixed 200m und 500m.',
    link: '/news/deutsche-meisterschaft-halle-2025',
  },
  {
    title: 'Trainingslager 26./27.04.2025 in Rostock',
    image: '/news/trainingslager-rostock-2025/trainingslager1.jpg',
    description:
      'Bei bestem Wetter trainierten wir beim KfrG e.V. mit Fokus auf 200 m, 500 m und 2000 m in Vorbereitung auf die Deutsche Meisterschaft 2025 in Halle.',
    link: '/news/trainingslager-rostock-2025',
    
  },
  {
    title: 'Trainingslager 10./11.05.2025 in Rostock',
    image: '/news/trainingslager-rostock-10-05-2025/trainingslager2.jpg',
    description:
      'Am Samstag trainierten wir im Wechsel zwischen Großboot und Smallboot – volle Konzentration auf saubere Technik und kraftvolle Schläge. Der Sonntag stand ganz im Zeichen des Großboots: Fokus auf die Rennstruktur über die unterschiedlichen Distanzen, abgestimmte Starts, starke Mittelteile und explosive Zieleinläufe.',
    link: '/news/trainingslager-rostock-10-05-2025',
    
  }
  
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="relative w-full bg-sky-950 py-36 px-6 md:px-16 text-stone-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-sky-200 mb-16 uppercase"
        >
          News
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-sky-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-sky-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-200 mb-4 text-base">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="text-sky-400 hover:text-sky-300 font-medium"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

