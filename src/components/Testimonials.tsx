import { Card } from "@heroui/react";

const testimonials = [
  {
    quote:
      "ERA Safety had a team on-site within 20 minutes of our call. They took complete control of the situation, coordinated with the fire department, and had our facility back to safe operations by end of day. Truly exceptional.",
    author: "Marcus T.",
    role: "VP of Operations",
    company: "MidWest Industrial Corp.",
    initials: "MT",
  },
  {
    quote:
      "After a serious forklift incident, we didn't know where to start. ERA handled the OSHA investigation documentation, walked us through every step, and our corrective action plan is now a model for the whole region.",
    author: "Sandra K.",
    role: "EHS Manager",
    company: "Apex Manufacturing",
    initials: "SK",
  },
  {
    quote:
      "We've been retaining ERA Safety for three years now. Their annual risk assessments and training programs have dramatically reduced our near-miss incidents. The team is professional, thorough, and genuinely cares.",
    author: "James O.",
    role: "Site Safety Director",
    company: "Pinnacle Construction Group",
    initials: "JO",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Hear from the safety and operations leaders who&apos;ve relied on ERA
            Safety during their most critical moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.author} className="border border-slate-100 shadow-sm rounded-sm">
              <Card.Content className="p-6 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                <blockquote className="text-slate-600 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                    <div className="text-slate-400 text-xs">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
