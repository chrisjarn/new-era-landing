const certifications = [
  "OSHA 30-Hour Certified",
  "HAZWOPER Trained",
  "ISO 45001 Aligned",
  "NIMS / ICS Compliant",
  "EPA Reporting Qualified",
  "First Aid / CPR / AED",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="bg-slate-900 rounded-lg p-10 text-white">
              <div className="text-6xl font-black text-red-600 leading-none mb-2">ERA</div>
              <div className="text-2xl font-bold text-slate-200 mb-6">
                Emergency Response Authority
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Founded by former first responders and industrial safety officers,
                ERA Safety was built on the belief that no organization should face
                an emergency alone. We bring decades of real-world experience to
                every engagement.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 bg-slate-800 rounded px-3 py-2"
                  >
                    <span className="text-green-400 font-bold text-xs">✓</span>
                    <span className="text-slate-300 text-xs font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Accent element */}
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-red-600 rounded-lg -z-10" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-slate-300 rounded-lg -z-10" />
          </div>

          {/* Right: content */}
          <div>
            <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
              About ERA Safety
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">
              Built by Responders,
              <br />
              for Responders.
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                ERA Safety was founded with a singular mission: ensure that every
                organization — regardless of size or sector — has access to
                world-class emergency response expertise when they need it most.
              </p>
              <p>
                Our team includes former firefighters, HAZMAT specialists, OSHA
                compliance officers, and crisis communication professionals. We
                don't just advise — we respond, investigate, and resolve.
              </p>
              <p>
                From oil & gas facilities to construction sites, manufacturing
                plants to office environments, ERA Safety has successfully managed
                incidents across every industry type.
              </p>
            </div>

            <div className="mt-8 flex gap-6">
              <div>
                <div className="text-3xl font-black text-slate-900">12+</div>
                <div className="text-sm text-slate-500">Years in operation</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-black text-slate-900">40+</div>
                <div className="text-sm text-slate-500">Certified specialists</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-black text-slate-900">18</div>
                <div className="text-sm text-slate-500">States covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
