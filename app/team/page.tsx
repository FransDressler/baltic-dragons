'use client';
import { MapPin } from 'lucide-react'; // schönes minimalistisches Icon
import Link from 'next/link';

const teams = [
  {
    name: 'Kanufreunde Rostocker Greif e.V. (KfRG)',
    location: 'Rostock',
    description: 'Starkes Heimatteam und organisatorische Heimat der Baltic Dragons.',
  },
  {
    name: 'SV Breitling e.V. Rostock',
    location: 'Rostock',
    description: 'Partnerverein in Rostock mit vielen aktiven Paddlern.',
  },
  {
    name: 'Stralsunder Kanu Club e.V.',
    location: 'Stralsund',
    description: 'Repräsentiert die Baltic Dragons in Stralsund.',
  },
  {
    name: 'SCN Sportclub Neubrandenburg e.V.',
    location: 'Neubrandenburg',
    description: 'Ambitioniertes Einzelteam im Herzen Mecklenburgs.',
  },
  {
    name: 'WSAP Hamburg',
    location: 'Hamburg',
    description: 'Die Baltic Dragons Crew in der Hansestadt.',
  },
  {
    name: 'Kanusportverein Güstrow 1990 e.V.',
    location: 'Güstrow',
    description: 'Tradition und Leidenschaft auf dem Inselsee.',
  },
  {
    name: 'Hannoverscher Kanu-Club von 1921 (HKC)',
    location: 'Hannover',
    description: 'Baltic Dragons Kraft aus Niedersachsen.',
  },
];

export default function TeamsPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-sky-950 via-sky-900 to-sky-950 py-20 px-6 md:px-16 text-stone-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-sky-200 mb-16 uppercase tracking-wide">
          Unsere Teams
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group bg-sky-900/50 border border-sky-700/30 rounded-2xl p-8 shadow-xl backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl hover:border-sky-400"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-sky-300">{team.name}</h3>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sky-400 text-sm">
                <MapPin size={16} />
                <span>{team.location}</span>
              </div>
              <div className="h-px w-full bg-sky-700/20 mb-4" />
              <p className="text-stone-200 leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-sky-400 text-center mt-20">
          ... vereint unter dem{' '}
          <Link href="https://www.kanufreunde.de/" className="underline hover:text-sky-300">
            Kanufreunde Rostocker Greif e.V.
          </Link>
        </h2>
      </div>
    </section>
  );
}
