const steps = [
  {
    step: "01",
    title: "Immediate Contact",
    description:
      "Call our 24/7 emergency line or submit a request online. A certified ERA safety officer answers within minutes — any time, any day.",
  },
  {
    step: "02",
    title: "Rapid Assessment",
    description:
      "Our responders gather critical information about the situation, dispatch the right team, and coordinate with local emergency services in parallel.",
  },
  {
    step: "03",
    title: "On-Site Response",
    description:
      "ERA specialists arrive on scene, stabilize the environment, and take command of the incident response following established safety protocols.",
  },
  {
    step: "04",
    title: "Investigation & Reporting",
    description:
      "Post-incident, we conduct a thorough investigation, prepare all required reports, and deliver a corrective action plan to prevent recurrence.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            Our Response Process
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven four-step framework built for speed, clarity, and
            compliance — designed so you never have to figure it out alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-px bg-red-700 z-10" />
              )}

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full hover:border-red-800 transition-colors">
                <div className="text-5xl font-black text-red-700/40 mb-4 leading-none">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
