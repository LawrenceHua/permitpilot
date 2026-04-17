import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PermitPilot AI — Know What Permits You Need",
  description: "AI-powered permit requirements navigator for home service pros. Get exactly which permits you need, how long they take, and when to apply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-slate-900 text-white py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">PP</div>
            <span className="font-semibold text-lg">PermitPilot AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/lookup/" className="hover:text-blue-400 transition">Lookup</a>
            <a href="/history/" className="hover:text-blue-400 transition">History</a>
            <a href="/#pricing" className="hover:text-blue-400 transition">Pricing</a>
            <a href="/checkout/" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition">Get Pro</a>
          </div>
        </nav>
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
          <p>&copy; 2026 PermitPilot AI. Built for licensed contractors &amp; home service pros.</p>
        </footer>
      </body>
    </html>
  );
}
