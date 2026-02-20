export default function Expertise() {
  const expertisePoints = [
    "Expérience direction commerciale en ETI et scale-ups",
    "Formation continue aux méthodes modernes (MEDDIC, Challenger, etc.)",
    "Interventions terrain, pas de conseil en chambre",
    "Focus résultats mesurables et ROI",
  ];

  return (
    <section className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="bg-dark-200 border border-dark-400 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-white mb-4">
              Une approche issue du terrain B2B
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              SBDR accompagne des entreprises avec des modèles commerciaux solides
              mais devenus inadaptés au marché actuel.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
              Notre équipe combine expérience opérationnelle en direction commerciale
              et expertise en transformation des organisations de vente.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-white">70+</div>
                <div className="text-sm text-muted">Entreprises transformées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">+80</div>
                <div className="text-sm text-muted">Commerciaux formés</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <span className="section-label">Notre expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
              Nous connaissons les défis du commerce B2B moderne.
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Anciens directeurs commerciaux et entrepreneurs, nous avons vécu les transformations
              que vous traversez. Notre méthode combine les meilleures pratiques internationales
              et la réalité du terrain français.
            </p>

            <ul className="space-y-4">
              {expertisePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
