"use client";

import { Chip, Button } from "@heroui/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(239,68,68,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <Chip color="danger" size="sm" className="uppercase tracking-widest font-semibold text-xs">
            24/7 Emergency Response
          </Chip>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          When Every Second
          <br />
          <span className="text-red-500">Counts</span>, We Respond.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          ERA Safety delivers rapid, expert incident response and emergency
          management solutions that protect your people, assets, and business
          continuity — day or night.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md text-base transition-colors w-full sm:w-auto"
          >
            Request Emergency Response
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-slate-500 hover:border-red-500 text-slate-200 hover:text-red-400 font-semibold px-8 py-4 rounded-md text-base transition-colors w-full sm:w-auto"
          >
            View Our Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold text-lg">✓</span>
            <span>Certified OSHA Specialists</span>
          </div>
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold text-lg">✓</span>
            <span>ISO 45001 Compliant</span>
          </div>
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold text-lg">✓</span>
            <span>Average 15-Min Response</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-red-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
