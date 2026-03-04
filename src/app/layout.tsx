import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campsite — Teamwork, meet deep work",
  description:
    "The new standard for thoughtful team communication — replace noisy chats with focused, organized posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <div className="relative flex min-h-[100svh] flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
