'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const events = [
  {
    title: '19. Club-Crew Europameisterschaften (ECCC)',
    image: ['/erfolge/club-europameisterschaft-19-1.jpg',
           '/erfolge/club-europameisterschaft-19-2.jpg'
           ],
    locationTime: 'Ravenna, 06. - 10. September 2023',
    description: 'Teilnahme an den 19. Club-Crew Europameisterschaften mit herausragenden Leistungen.',
    achievements: [
      'Bronze, 2000m im 20er MixBoat',
      'Bronze, 2000 m im 10er SmallBoat Woman',
      'Gold, 200 m  im 10er SmallBoat Woman',
      'Gold, 500 m im 10er SmallBoat Woman'
    ],
  },
  {
    title: '14. Club-Weltmeisterschaft im Drachenboot (IDBF CCWC)',
    image: [
           '/erfolge/club-weltmeisterschaft-14-2.jpg',
           '/erfolge/club-weltmeisterschaft-14-3.jpg'],
    locationTime: 'Standiana-See, Ravenna, 03. - 08. September 2024',
    description: 'Teilnahme an der Club-Weltmeisterschaft mit wertvollen internationalen Erfahrungen.',
    achievements: [],
  },
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
            <EventBlock key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventBlock({ event, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % event.image.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [event.image.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-10 items-center`}
    >
      <div className={`order-1 lg:order-${index % 2 === 0 ? '1' : '2'} w-full h-full`}>
        <Image
          src={event.image[currentImage]}
          alt={`${event.title} Bild ${currentImage + 1}`}
          width={800}
          height={500}
          className="rounded-xl shadow-lg object-cover w-full h-full"
        />
      </div>

      <div className={`text-left order-2 lg:order-${index % 2 === 0 ? '2' : '1'} min-h-110 md:px-6`}>
        <h3 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-2">
          {event.title}
        </h3>
        <h4 className="text-lg md:text-xl text-sky-200 mb-4">
          {event.locationTime}
        </h4>
        <p className="text-lg md:text-xl text-stone-100 leading-relaxed mb-4">
          {event.description}
        </p>
        {event.achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-stone-100">
            {event.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
