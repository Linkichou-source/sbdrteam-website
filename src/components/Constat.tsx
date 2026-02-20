import Link from "next/link";

export default function Constat() {
  const symptoms = [
    "Pipeline commercial peu prévisible",
    "Prospection inefficace ou inexistante",
    "Cycle de vente trop long",
    "Équipe commerciale désorganisée",
    "Perte de deals sur des concurrents mieux préparés",
    "Dépendance au bouche-à-oreille",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <span className="section-label">Le constat</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
              Votre modèle commercial a fait ses preuves.
              <br />
              <span className="text-muted">Mais il n'est plus adapté.</span>
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              Les cycles de vente s'allongent. Les prospects sont plus difficiles à engager.
              Vos commerciaux travaillent dur, mais les résultats ne suivent plus.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
              Ce n'est pas un problème de talent. C'est un problème de méthode et
              d'organisation face à un marché B2B qui a profondément changé.
            </p>
            <Link
              href="#approche"
              className="inline-flex items-center px-6 py-3 bg-dark-200 border border-dark-400 rounded-full text-white hover:bg-dark-300 transition-colors"
            >
              Identifier vos freins commerciaux
            </Link>
          </div>

          {/* Right column - Symptoms */}
          <div className="bg-dark-100 border border-dark-300 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Les symptômes que vous reconnaissez
            </h3>
            <ul className="space-y-4">
              {symptoms.map((symptom, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-muted">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
