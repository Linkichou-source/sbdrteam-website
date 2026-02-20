import Link from "next/link";

export default function Resultats() {
  const caseStudies = [
    {
      category: "Manufacturing B2B",
      company: "ETI Industrielle",
      result: "+47% de taux de conversion",
      description: "Restructuration complète du cycle de vente et formation de l'équipe de 12 commerciaux.",
      metrics: [
        { label: "Cycle de vente", value: "-30%" },
        { label: "Pipeline", value: "+120%" },
        { label: "Win rate", value: "+47%" },
      ],
    },
    {
      category: "Services B2B",
      company: "Éditeur SaaS",
      result: "Pipeline x3 en 6 mois",
      description: "Mise en place d'une stratégie outbound structurée et coaching des SDR.",
      metrics: [
        { label: "Leads qualifiés", value: "x3" },
        { label: "RDV/mois", value: "+85%" },
        { label: "CAC", value: "-25%" },
      ],
    },
    {
      category: "Services professionnels",
      company: "Cabinet de conseil",
      result: "Organisation commerciale modernisée",
      description: "Passage d'une approche opportuniste à un système commercial prévisible.",
      metrics: [
        { label: "Forecast accuracy", value: "90%" },
        { label: "Deals perdus", value: "-40%" },
        { label: "Panier moyen", value: "+35%" },
      ],
    },
  ];

  return (
    <section id="resultats" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label">Résultats</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Des transformations mesurables.
            </h2>
            <p className="text-muted mt-2">
              Ce que nos clients ont obtenu en travaillant avec SBDR.
            </p>
          </div>
          <Link
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors text-sm"
          >
            Voir tous les cas
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-dark-100 border border-dark-300 rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="text-xs text-muted uppercase tracking-wider mb-1">{study.category}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{study.company}</h3>
              <p className="text-xl font-serif text-primary mb-4">{study.result}</p>
              <p className="text-sm text-muted mb-6">{study.description}</p>

              <div className="pt-4 border-t border-dark-400 space-y-2">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-muted">{metric.label} :</span>
                    <span className="text-white font-medium">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
