"use client";

import { Button } from "@heroui/react";

const industries = [
  "Oil & Gas",
  "Construction",
  "Manufacturing",
  "Chemical / Petrochemical",
  "Mining",
  "Transportation / Logistics",
  "Healthcare",
  "Government / Municipal",
  "Other",
];

const inputCls =
  "border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="text-white">
            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6">
              Ready to Respond.
              <br />
              <span className="text-red-500">Right Now.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              Whether you&apos;re in the middle of an active incident or building
              your emergency preparedness program, ERA Safety is ready to help.
              Fill out the form and we&apos;ll respond within minutes.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Emergency Hotline</div>
                  <div className="text-red-400 font-mono font-bold text-lg">1-800-ERA-SAFE</div>
                  <div className="text-slate-500 text-sm">Available 24 hours, 365 days</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Email</div>
                  <div className="text-red-400 font-mono">response@erasafety.com</div>
                  <div className="text-slate-500 text-sm">For non-emergency inquiries</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Headquarters</div>
                  <div className="text-slate-400 text-sm">
                    Houston, TX — with regional offices in
                    <br />
                    Denver, Chicago, and Atlanta
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Request a Response or Consultation
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" placeholder="John" required className={inputCls} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" placeholder="Smith" required className={inputCls} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Company</label>
                <input type="text" placeholder="Your company name" required className={inputCls} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" placeholder="john@company.com" required className={inputCls} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className={inputCls} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Industry</label>
                <select className={inputCls + " bg-white text-slate-700"}>
                  <option value="">Select your industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Describe Your Situation</label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe the incident or the services you need..."
                  className={inputCls + " resize-none"}
                />
              </div>

              <Button
                type="submit"
                variant="danger"
                size="lg"
                fullWidth
                className="font-bold text-base rounded-md"
              >
                Submit Request
              </Button>

              <p className="text-center text-slate-400 text-xs">
                For active emergencies, call our hotline immediately.
                <br />
                Form responses are monitored 24/7.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
