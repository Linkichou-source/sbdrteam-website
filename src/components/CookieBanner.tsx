interface CookieBannerProps {
  onAccept: () => void;
  onRefuse: () => void;
}

export default function CookieBanner({ onAccept, onRefuse }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-dark-100 border border-dark-300 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-dark-200 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">Nous utilisons des cookies</h4>
            <p className="text-sm text-muted">
              Nous utilisons des cookies pour vous offrir la meilleure expérience sur notre site et mesurer
              l'audience du site. En cliquant sur Accepter, vous autorisez SBDR Team à recueillir vos données
              de navigation pour améliorer le site.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={onRefuse}
              className="px-5 py-2.5 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={onAccept}
              className="px-5 py-2.5 bg-primary text-black rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
