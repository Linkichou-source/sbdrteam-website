"use client";

import { useState } from "react";
import Link from "next/link";

const pillars = [
  {
    id: "prospection",
    title: "Prospection structurée",
    description: "Mise en place d'un système de génération de leads prévisible et reproductible.",
    items: [
      { title: "Ciblage ICP", desc: "Définition précise de vos clients idéaux" },
      { title: "Séquences outbound", desc: "Emails et appels structurés et personnalisés" },
      { title: "LinkedIn Sales", desc: "Prospection sociale optimisée" },
      { title: "Lead scoring", desc: "Priorisation intelligente des opportunités" },
    ],
  },
  {
    id: "cycle",
    title: "Cycle de vente moderne",
    description: "Optimisation de chaque étape du parcours d'achat de vos clients.",
    items: [
      { title: "Discovery call", desc: "Qualification approfondie des besoins" },
      { title: "Démonstration", desc: "Présentation orientée valeur" },
      { title: "Négociation", desc: "Techniques de closing efficaces" },
      { title: "Suivi", desc: "Relances automatisées et pertinentes" },
    ],
  },
  {
    id: "competence",
    title: "Montée en compétence",
    description: "Formation continue de vos équipes aux meilleures pratiques.",
    items: [
      { title: "Coaching individuel", desc: "Accompagnement personnalisé" },
      { title: "Ateliers collectifs", desc: "Partage de bonnes pratiques" },
      { title: "Playbooks", desc: "Documentation des processus" },
      { title: "Certifications", desc: "Validation des compétences" },
    ],
  },
  {
    id: "pilotage",
    title: "Pilotage commercial",
    description: "Mise en place d'indicateurs et de rituels de performance.",
    items: [
      { title: "KPIs", desc: "Indicateurs clés de performance" },
      { title: "Dashboard", desc: "Visualisation en temps réel" },
      { title: "Rituels", desc: "Points réguliers et structurés" },
      { title: "Forecast", desc: "Prévisions fiables et actionnables" },
    ],
  },
];

export default function Approche() {
  const [activeTab, setActiveTab] = useState("prospection");
  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="approche" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <span className="section-label">Notre approche</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
              Restaurez une machine commerciale performante.
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Nous intervenons sur les quatre piliers de la performance commerciale B2B
              pour créer un système cohérent et scalable.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="https://calendly.com/sbdrteam"
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                Diagnostic gratuit
              </Link>
              <Link
                href="#resultats"
                className="inline-flex items-center text-muted hover:text-white transition-colors"
              >
                Voir nos cas clients
              </Link>
            </div>

            {/* Tabs */}
            <div className="space-y-2">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`block w-full text-left text-lg font-medium transition-colors ${
                    activeTab === pillar.id ? "text-white" : "text-muted hover:text-white/70"
                  }`}
                >
                  {pillar.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right column - Active pillar details */}
          <div className="bg-dark-100 border border-dark-300 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{activePillar.title}</h3>
                <p className="text-sm text-muted">{activePillar.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {activePillar.items.map((item, index) => (
                <div key={index} className="bg-dark-200 border border-dark-400 rounded-xl p-4">
                  <h4 className="font-medium text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="#methodologie"
              className="inline-flex items-center mt-6 px-4 py-2 bg-dark-200 border border-dark-400 rounded-lg text-white hover:bg-dark-300 transition-colors text-sm"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
