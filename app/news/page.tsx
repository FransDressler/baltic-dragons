

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'Neue Saison beginnt mit Trainingslager',
    image: '/news/news1.jpg',
    content:
      'Die Baltic Dragons starten mit einem intensiven Trainingslager an der Ostsee in die neue Saison. Teamgeist, Technik und jede Menge Spaß standen auf dem Programm.\n\nDas Training wurde von erfahrenen Coaches begleitet und fand unter idealen Wetterbedingungen statt. Neben den sportlichen Zielen stand vor allem das Zusammenwachsen als Team im Vordergrund.',
  },
  {
    title: 'Baltic Dragons holen Medaille bei internationalem Cup',
    image: '/news/news2.jpg',
    content:
      'Ein spannendes Rennen, starke Konkurrenz und eine verdiente Bronzemedaille – so lief es beim diesjährigen internationalen Drachenboot-Cup.\n\nNach einem holprigen Start kämpfte sich das Team mit beeindruckendem Einsatz nach vorne und bewies erneut seine Klasse auf dem internationalen Parkett.',
  },
  {
    title: 'Mitgliedertreffen und Sommerfest 2025 angekündigt',
    image: '/news/news3.jpg',
    content:
      'Das große Sommerfest ist zurück! Neben leckerem Essen und Musik gibt es spannende Spiele und eine Bootstaufe – save the date!\n\nAlle Mitglieder und Freunde des Vereins sind herzlich eingeladen, gemeinsam mit uns diesen besonderen Tag zu feiern. Weitere Details folgen demnächst.',
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
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={600}
                  className="w-full h-64 object-cover"
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
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
