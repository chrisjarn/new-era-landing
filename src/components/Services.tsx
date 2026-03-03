import { Card } from "@heroui/react";

const services = [
  {
    icon: "🚨",
    title: "Emergency Incident Response",
    description:
      "Rapid deployment of certified safety professionals the moment an incident occurs. We stabilize scenes, coordinate with emergency services, and protect your workforce.",
    highlights: ["Scene stabilization", "First responder coordination", "Hazmat containment"],
  },
  {
    icon: "📋",
    title: "Incident Investigation",
    description:
      "Thorough root cause analysis and reporting to satisfy regulatory requirements and prevent recurrence. We document everything so you're protected legally and operationally.",
    highlights: ["Root cause analysis", "OSHA recordkeeping", "Corrective action plans"],
  },
  {
    icon: "🛡️",
    title: "Crisis Management",
    description:
      "Strategic guidance during high-stakes situations — workplace accidents, environmental events, or public safety threats. We manage the crisis so you can manage your business.",
    highlights: ["Executive support", "Media & communications", "Business continuity"],
  },
  {
    icon: "📚",
    title: "Safety Training & Drills",
    description:
      "Prepare your team before disaster strikes. Our immersive training programs and tabletop exercises build real readiness across all organizational levels.",
    highlights: ["Emergency drills", "Leadership training", "Tabletop exercises"],
  },
  {
    icon: "⚖️",
    title: "Regulatory Compliance",
    description:
      "Navigate complex OSHA, EPA, and local safety regulations with confidence. We audit your programs, close gaps, and keep you inspection-ready at all times.",
    highlights: ["OSHA compliance audits", "EPA reporting", "Gap analysis"],
  },
  {
    icon: "🔍",
    title: "Risk Assessment",
    description:
      "Proactive identification and mitigation of workplace hazards before they become incidents. Our specialists evaluate facilities, processes, and procedures end-to-end.",
    highlights: ["Facility hazard surveys", "JSA development", "Risk scoring"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">
            Comprehensive Safety Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From immediate incident response to long-term prevention, ERA Safety
            is your complete partner in workplace safety and emergency
            management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-sm"
            >
              <Card.Header className="pb-0 pt-6 px-6 flex-col items-start gap-2">
                <div className="text-3xl mb-1">{service.icon}</div>
                <Card.Title className="font-bold text-slate-900 text-lg leading-snug">
                  {service.title}
                </Card.Title>
              </Card.Header>
              <Card.Content className="px-6 pt-3 pb-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
