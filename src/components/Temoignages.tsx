export default function Temoignages() {
  const testimonials = [
    {
      quote: "Très bonne expérience avec l'équipe de la SBDR Team pour une mission de montée en puissance de collaborateurs, de reprise de scripts et d'optimisations de process de prospection commerciale. Très bonne écoute et très professionnels, je les recommande à 100%.",
      author: "Sylvain C.",
      role: "CEO, Spécialiste Marketing",
      image: "https://ext.same-assets.com/379993486/1227059281.webp",
    },
    {
      quote: "SBDR avec son approche ciblée et professionnelle nous permet de contacter des prospects qualifiés. Leur travail nous a permis d'atteindre beaucoup des personnes très intéressées par notre offre.",
      author: "Arnaud de Belabre",
      role: "CEO, Manufacture de Layette",
      image: "https://ext.same-assets.com/379993486/2034915857.jpeg",
    },
    {
      quote: "Nous avons suivi une formation pour améliorer notre prospection commerciale. Formation adaptée à nos besoins, que ce soit techniquement ou humainement. Hender a su parfaitement agencer l'emploi du temps à nos contraintes.",
      author: "Emilie ADAGAS",
      role: "Présidente, ERN Elec",
      image: "https://ext.same-assets.com/379993486/3058773371.jpeg",
    },
    {
      quote: "J'ai suivi une formation à la prospection commerciale centrée sur le Emailing avec Hender. Ce formateur a su parfaitement s'adapter à nos besoins : sessions très pratiques, conviviales et à l'écoute de nos objectifs et contraintes.",
      author: "Catherine Peson",
      role: "Responsable marketing, Trin Partners",
      image: "https://ext.same-assets.com/379993486/1435333910.png",
    },
  ];

  return (
    <section className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Ce que nos clients <span className="italic text-primary">disent</span> de nous
          </h2>
          <p className="text-muted mt-4">
            Des entreprises qui ont transformé leur performance commerciale avec SBDR Team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-200 border border-dark-400 rounded-2xl p-6 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-sm text-muted mb-6 leading-relaxed line-clamp-5">
                "{testimonial.quote}"
              </p>
              <a href="#" className="text-primary text-sm hover:underline">
                Lire plus
              </a>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-dark-400">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.author}</div>
                  <div className="text-xs text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
