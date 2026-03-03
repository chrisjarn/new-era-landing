const footerLinks = {
  Services: [
    "Emergency Response",
    "Incident Investigation",
    "Crisis Management",
    "Safety Training",
    "Regulatory Compliance",
    "Risk Assessment",
  ],
  Company: ["About ERA Safety", "Our Team", "Careers", "Case Studies", "Blog"],
  Resources: [
    "OSHA Resources",
    "Emergency Checklist",
    "Safety Templates",
    "Industry Reports",
    "Contact Us",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-black text-sm">E</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                ERA<span className="text-red-500 ml-1">Safety</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Expert incident response and emergency management — protecting
              people, assets, and business continuity around the clock.
            </p>
            <div className="bg-red-900/30 border border-red-800/50 rounded-lg px-4 py-3">
              <div className="text-red-400 font-bold text-xs uppercase tracking-wide mb-1">
                Emergency Hotline
              </div>
              <div className="text-white font-mono font-bold">1-800-ERA-SAFE</div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-red-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} ERA Safety. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
