export default function Methodologie() {
  const phases = [
    {
      number: "01",
      title: "Diagnostiquer",
      subtitle: "Analyse complète de votre organisation commerciale",
      description: "Audit de vos processus, outils, équipes et résultats actuels.",
      items: ["Pipeline actuel", "Processus de vente", "Compétences équipe", "Stack technique"],
      footer: "Identifier les freins et les leviers de croissance prioritaires.",
    },
    {
      number: "02",
      title: "Structurer",
      subtitle: "Construction d'un système commercial cohérent",
      description: "Mise en place des fondations pour une performance durable.",
      items: ["Playbook commercial", "Parcours client", "Outils & CRM", "Indicateurs clés"],
      footer: "Des méthodes éprouvées adaptées à votre contexte.",
    },
    {
      number: "03",
      title: "Déployer",
      subtitle: "Accompagnement terrain et montée en puissance",
      description: "Formation, coaching et ajustements continus.",
      items: ["Formation équipes", "Coaching managers", "Suivi mensuel", "Optimisation continue"],
      footer: "Vos équipes autonomes et performantes sur le long terme.",
    },
  ];

  return (
    <section id="methodologie" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">Méthodologie</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Une approche en <span className="italic text-primary">trois phases</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            De l'audit initial au déploiement terrain, un accompagnement structuré pour des résultats mesurables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-dark-200 border border-dark-400 rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-serif text-primary">{phase.number}</span>
                <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
              </div>

              <h4 className="font-medium text-white mb-2">{phase.subtitle}</h4>
              <p className="text-sm text-muted mb-4">{phase.description}</p>

              <ul className="space-y-2 mb-6">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-dark-400">
                <p className="text-sm text-muted">{phase.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
