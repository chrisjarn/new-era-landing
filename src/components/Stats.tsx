const stats = [
  { value: "500+", label: "Incidents Managed", sub: "across all industry sectors" },
  { value: "15 min", label: "Avg. Response Time", sub: "from first call to mobilization" },
  { value: "98%", label: "Client Retention Rate", sub: "year over year" },
  { value: "24/7", label: "Always Available", sub: "365 days a year" },
];

export default function Stats() {
  return (
    <section className="bg-red-600 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-black mb-1">{stat.value}</div>
              <div className="font-bold text-sm uppercase tracking-wide mb-1">{stat.label}</div>
              <div className="text-red-200 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
