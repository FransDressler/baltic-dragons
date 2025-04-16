
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-stone-100 px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Kontakt & Impressum */}
        <div>
          <h3 className="text-xl font-semibold text-sky-300 mb-4">Kontakt</h3>
          <Link href="https://www.kanufreunde.de/" className="mb-1 block mt-6 text-sky-400 hover:text-sky-300 underline">Kanufreunde Rostocker Greif e.V. (KfRG)
          </Link>
          <p className="mb-1">Gaffelschonerweg 6,</p>
          <p className="mb-1">18055 Rostock</p>
          
          <p className="mb-1">Email: dietmar.stenzel-balticteam@web.de</p>
          <Link
            href="/impressum"
            className="block mt-6 text-sky-400 hover:text-sky-300 underline"
          >
            Impressum
          </Link>
        </div>

        {/* Kontaktformular */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-sky-300 mb-4">Schreib uns eine Nachricht</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-sky-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 col-span-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-sky-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 col-span-1"
            />
            <textarea
              placeholder="Nachricht"
              rows={4}
              className="bg-sky-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-400 text-teal-950 font-semibold px-6 py-2 rounded-md md:col-span-2"
            >
              Senden
            </button>
          </form>
        </div>
      </div>

      {/* Footer-Credit */}
      <div className="mt-16 text-center text-sm text-stone-400">
        Website Design & Umsetzung von <span className="text-sky-400">Frans Dressler</span>
      </div>
    </footer>
  );
}

