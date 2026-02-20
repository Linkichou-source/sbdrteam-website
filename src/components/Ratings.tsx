export default function Ratings() {
  return (
    <section className="py-16 bg-background border-t border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif text-white mb-2">
            Ils nous notent aussi publiquement
          </h3>
          <p className="text-muted">
            La transparence fait partie de notre méthode.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Trustpilot */}
          <a
            href="https://fr.trustpilot.com/review/sbdrteam.io"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-100 border border-dark-300 rounded-xl p-6 hover:border-primary/30 transition-colors flex-1 max-w-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-semibold text-white">Trustpilot</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold text-white">4,1</span>
              <span className="text-muted">/5</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-5 h-5 bg-green-500 rounded" />
              ))}
              <div className="w-5 h-5 bg-green-500/50 rounded" />
            </div>
            <p className="text-sm text-muted">5 avis</p>
            <p className="text-primary text-sm mt-2 hover:underline">Voir les avis →</p>
          </a>

          {/* Google */}
          <a
            href="https://share.google/4nAyyZYwlUocIoVFT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-100 border border-dark-300 rounded-xl p-6 hover:border-primary/30 transition-colors flex-1 max-w-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-bold text-blue-500">G</span>
              <span className="font-semibold text-white">Google</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold text-white">5,0</span>
              <span className="text-muted">/5</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted">11 avis</p>
            <p className="text-primary text-sm mt-2 hover:underline">Voir les avis →</p>
          </a>
        </div>
      </div>
    </section>
  );
}
