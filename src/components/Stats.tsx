export default function Stats() {
  const stats = [
    { value: "+70", label: "Entreprises accompagnées" },
    { value: "+35%", label: "Conversion moyenne" },
    { value: "15 ans", label: "D'expertise terrain" },
    { value: "+80", label: "Commerciaux coachés" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-100 border border-dark-300 rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
