import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 border border-white/20 rounded-full text-sm text-muted mb-8">
          Structuration & Performance Commerciale
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
          Modernisez votre{" "}
          <span className="italic text-primary">performance</span>
          <br />
          commerciale B2B
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10">
          Coaching, formation et structuration pour les entreprises dont la manière de vendre ne suit plus
          le rythme du marché.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://calendly.com/sbdrteam"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            Réserver un diagnostic gratuit
          </Link>
          <Link
            href="#approche"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Découvrir notre approche
          </Link>
        </div>
      </div>

      {/* Trust section */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <p className="text-center text-muted text-sm mb-8">
          Des entreprises B2B nous font confiance pour structurer leur performance commerciale
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted mb-8">
          {["INDUSTRIES", "SERVICES B2B", "ETI", "PME", "STARTUPS B2B", "DISTRIBUTION"].map((cat) => (
            <span key={cat} className="hover:text-white cursor-pointer transition-colors">
              {cat}
            </span>
          ))}
        </div>

        {/* Logos marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {[
              "https://ext.same-assets.com/379993486/2169822112.svg",
              "https://ext.same-assets.com/379993486/3260331335.webp",
              "https://ext.same-assets.com/379993486/1564759282.png",
              "https://ext.same-assets.com/379993486/3818595656.png",
              "https://ext.same-assets.com/379993486/2723962841.webp",
              "https://ext.same-assets.com/379993486/999588714.png",
              "https://ext.same-assets.com/379993486/3049181554.png",
              "https://ext.same-assets.com/379993486/2353787282.png",
              "https://ext.same-assets.com/379993486/1273241717.png",
              "https://ext.same-assets.com/379993486/2864245966.png",
              "https://ext.same-assets.com/379993486/2202957471.png",
              "https://ext.same-assets.com/379993486/3968761964.png",
              // Duplicate for seamless loop
              "https://ext.same-assets.com/379993486/2169822112.svg",
              "https://ext.same-assets.com/379993486/3260331335.webp",
              "https://ext.same-assets.com/379993486/1564759282.png",
              "https://ext.same-assets.com/379993486/3818595656.png",
              "https://ext.same-assets.com/379993486/2723962841.webp",
              "https://ext.same-assets.com/379993486/999588714.png",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client logo"
                className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
