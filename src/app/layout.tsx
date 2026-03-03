import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERA Safety | Incident Response & Emergency Management",
  description:
    "ERA Safety delivers rapid, expert incident response and emergency management solutions that protect your people, assets, and business continuity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
