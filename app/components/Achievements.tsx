'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: 'Teameuropameisterschaft 2023',
    image: '/erfolge/europameisterschaft-2023.jpg',
    description:
      'Silber in der 500m Mixed-Klasse. Ein historischer Erfolg mit starker Teamleistung.',
  },
  {
    title: 'Deutsche Meisterschaft 2024',
    image: '/erfolge/deutsche-meisterschaft-2024.jpg',
    description:
      'Gold über 200m und Bronze über 2000m. Baltic Dragons on fire!',
  },
  // Weitere Events einfach hier ergänzen
];

export default function AchievementsSection() {
  return (
    <section
      id="erfolge"
      className="relative w-full bg-sky-900 py-36 px-6 md:px-16 text-stone-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-sky-200 mb-16 uppercase"
        >
          Erfolge
        </motion.h2>

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-10 items-center`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-full h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={800}
                      height={500}
                      className="rounded-xl shadow-lg object-cover w-full h-auto"
                    />
                  </div>
                  <div className="text-left md:px-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-lg md:text-xl text-stone-100 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-left md:pr-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-lg md:text-xl text-stone-100 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="w-full h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={800}
                      height={500}
                      className="rounded-xl shadow-lg object-cover w-full h-auto"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
