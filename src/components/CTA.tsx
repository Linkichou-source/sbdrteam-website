import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-label">Passez à l'action</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
          Parlons de votre{" "}
          <span className="italic text-primary">modernisation</span> commerciale.
        </h2>
        <p className="text-lg text-muted mb-4">
          30 minutes pour comprendre vos enjeux et identifier les premiers leviers d'amélioration.
        </p>
        <p className="text-muted mb-10">
          Sans engagement, 100% actionnable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="https://calendly.com/sbdrteam"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Réserver un diagnostic gratuit
          </Link>
          <Link
            href="mailto:ops@sbdrteam.io"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Nous contacter
          </Link>
        </div>

        <p className="text-sm text-muted">
          Diagnostic gratuit • Sans engagement • Réponse sous 24h
        </p>
      </div>
    </section>
  );
}
