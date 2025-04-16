'use client';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-sky-950 text-stone-100 px-6 md:px-16 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-sky-200 mb-12 text-center uppercase">
          Impressum
        </h1>

        <div className="space-y-6 text-base md:text-lg">
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p>Kanufreunde Rostocker Greif e.V. (KfRG)<br/>
             Gaffelschonerweg 6,<br/>
             18055 Rostock
          </p>

          <p><strong>Vertreten durch:</strong><br/>
             Dietmar Stenzel
          </p>

          <p><strong>Kontakt:</strong><br/>
             E-Mail: <a href="mailto:dietmar.stenzel-balticteam@web.de" className="text-sky-400 underline">dietmar.stenzel-balticteam@web.de</a>
          </p>

          <p><strong>Haftung für Inhalte:</strong><br/>
             Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>

          <p><strong>Haftung für Links:</strong><br/>
             Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>

          <p><strong>Urheberrecht:</strong><br/>
             Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
          </p>
        </div>
      </div>
    </main>
  );
}