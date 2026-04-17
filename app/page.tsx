import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Spring permit season is here — HVAC, decks, electrical upgrades
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Know What Permits You Need
          <br />
          <span className="text-blue-400">Before You Start the Job</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          PermitPilot AI tells independent plumbers, electricians, HVAC pros, and contractors exactly which permits they need — based on their trade, location, and job type.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/lookup/" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
            Start Permit Lookup — Free
          </Link>
          <Link href="#how-it-works" className="border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-medium transition">
            See How It Works
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-slate-800/50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">The Permit Problem Is Real</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⏱️", title: "Weeks of Research", desc: "Contractors spend 2–4 weeks learning permit requirements for each new job type. That's time not spent billing." },
              { icon: "💸", title: "$500–$5,000 Fines", desc: "Working without a required permit = fines, forced tear-outs, and insurance claim denials. One fine = 10x the cost of PermitPilot." },
              { icon: "📋", title: "Conflicting Information", desc: "Google yields 5 different answers for the same permit question. PermitPilot gives you one authoritative answer." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">3 Steps to Permit Clarity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enter Job Details", desc: "Select your trade (HVAC, Plumbing, Electrical, General Contracting), job type (new install, repair, replacement), and ZIP code." },
              { step: "2", title: "Get Permit List", desc: "PermitPilot returns a ranked list of required permits — federal, state, county, and city — with fees, processing times, and urgency flags." },
              { step: "3", title: "Download & Start", desc: "Export a one-page PDF checklist with permit names, application URLs, fees, and deadlines. You're ready to apply." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-slate-900 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Everything You Need to Stay Compliant</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Permit Requirements Lookup", desc: "Select your trade + job type + ZIP → get a ranked list of required permits with issuing authority and validity period." },
              { title: "Timeline & Urgency Engine", desc: "Processing times (e.g., '5–10 business days'), fee ranges, and seasonal urgency flags. Apply before the deadline." },
              { title: "PDF Checklist Export", desc: "Download a one-page permit checklist per job with application URLs, fees, and deadlines. No more missed permits." },
              { title: "Job History", desc: "All your past permit lookups saved locally. Re-run for recurring job types without re-entering details." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-lg shrink-0">✓</div>
                <div>
                  <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-center mb-12">One avoided permit fine pays for months of PermitPilot.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-900 font-semibold text-lg mb-1">Free</h3>
              <div className="text-4xl font-bold text-slate-900 mb-4">$0<span className="text-base font-normal text-slate-500">/mo</span></div>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>✓ 2 permit lookups/month</li>
                <li>✓ Basic requirements list</li>
                <li>✓ Urgency flags</li>
                <li>✗ No PDF export</li>
              </ul>
              <Link href="/lookup/" className="block text-center border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                Get Started
              </Link>
            </div>
            {/* Starter */}
            <div className="border-2 border-blue-500 rounded-xl p-6 bg-blue-50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">MOST POPULAR</div>
              <h3 className="text-slate-900 font-semibold text-lg mb-1">Starter</h3>
              <div className="text-4xl font-bold text-slate-900 mb-4">$19<span className="text-base font-normal text-slate-500">/mo</span></div>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>✓ 20 permit lookups/month</li>
                <li>✓ Full permit list</li>
                <li>✓ PDF checklist export</li>
                <li>✓ 1 trade type</li>
                <li>✓ Urgency + timeline data</li>
              </ul>
              <Link href="/checkout/?plan=starter" className="block text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Get Starter — $19/mo
              </Link>
            </div>
            {/* Pro */}
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-slate-900 font-semibold text-lg mb-1">Pro</h3>
              <div className="text-4xl font-bold text-slate-900 mb-4">$49<span className="text-base font-normal text-slate-500">/mo</span></div>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>✓ Unlimited permit lookups</li>
                <li>✓ All trade types</li>
                <li>✓ PDF export with app URLs</li>
                <li>✓ Priority processing info</li>
                <li>✓ Seasonal deadline alerts</li>
              </ul>
              <Link href="/checkout/?plan=pro" className="block text-center border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                Get Pro — $49/mo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">vs. The Alternatives</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-700 font-semibold">Tool</th>
                  <th className="text-center py-3 px-4 text-slate-700 font-semibold">Price</th>
                  <th className="text-center py-3 px-4 text-slate-700 font-semibold">Permit Focus</th>
                  <th className="text-center py-3 px-4 text-slate-700 font-semibold">PDF Export</th>
                  <th className="text-center py-3 px-4 text-slate-700 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-blue-700">PermitPilot AI</td>
                  <td className="text-center py-3 px-4 text-green-700 font-medium">$19–49/mo</td>
                  <td className="text-center py-3 px-4">✅ Core feature</td>
                  <td className="text-center py-3 px-4">✅ Yes</td>
                  <td className="text-center py-3 px-4">1-person shops</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 text-slate-600">Jobber</td>
                  <td className="text-center py-3 px-4 text-slate-500">$149+/mo</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ CRM focus</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ No</td>
                  <td className="text-center py-3 px-4 text-slate-500">Larger crews</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 text-slate-600">Housecall Pro</td>
                  <td className="text-center py-3 px-4 text-slate-500">$199+/mo</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ CRM focus</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ No</td>
                  <td className="text-center py-3 px-4 text-slate-500">Enterprise</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 text-slate-600">permitplace.com</td>
                  <td className="text-center py-3 px-4 text-slate-500">$200+/mo</td>
                  <td className="text-center py-3 px-4">✅ Focused</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ No</td>
                  <td className="text-center py-3 px-4 text-slate-500">CO pros</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-600">Google Search</td>
                  <td className="text-center py-3 px-4 text-slate-500">Free</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ Conflicting</td>
                  <td className="text-center py-3 px-4 text-slate-400">❌ No</td>
                  <td className="text-center py-3 px-4 text-slate-500">Anyone (unreliable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stop Guessing. Start Permitting.</h2>
          <p className="text-blue-100 text-lg mb-8">One avoided fine pays for a year of PermitPilot. Get started free in 60 seconds.</p>
          <Link href="/lookup/" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
            Run Your First Permit Lookup
          </Link>
        </div>
      </section>
    </div>
  );
}
