"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, CheckCircle, ShieldCheck, ArrowRight, DollarSign, FileText, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calculator className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold text-slate-900">TipTrail AI</span>
          </div>
          <nav className="flex gap-4">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-medium px-2.5 py-2 h-8 gap-1.5 hover:bg-slate-100 text-slate-700">Features</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-medium px-2.5 py-2 h-8 gap-1.5 hover:bg-slate-100 text-slate-700">Pricing</a>
            <Link href="/calculate"><Button variant="outline">Dashboard</Button></Link>
            <Link href="/calculate"><Button>Try Free</Button></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Built for Independent Restaurants</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Stop Excel. Stop Guessing.
            <br />
            <span className="text-amber-600">Calculate Fair Tips</span>
            <br />
            in Seconds
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            TipTrail AI calculates tip pool allocations per employee, checks California DLSE compliance, and generates downloadable PDF records — all in one click.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/calculate"><Button size="lg" className="bg-amber-500 hover:bg-amber-600"><Calculator className="mr-2 h-4 w-4" />Try Free — No Sign Up</Button></Link>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-sm font-medium whitespace-nowrap transition-all h-9 gap-1.5 px-2.5">View Pricing<ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <DollarSign className="h-10 w-10 text-amber-500 mb-2" />
              <CardTitle>Fair Tip Splits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Enter total tips and employee hours. TipTrail divides everything proportionally — servers, bartenders, bussers, and back-of-house.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="h-10 w-10 text-green-500 mb-2" />
              <CardTitle>CA DLSE Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Automatic compliance checker validates your tip pool against California Labor Code §351. Know before you file.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>PDF Export in 1 Click</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Generate a DLSE-compliant weekly tip report PDF with employee breakdown. Ready to file or hand to your accountant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="text-slate-600 mt-2">Three steps from chaos to compliant</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-700">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Enter Weekly Tips</h3>
              <p className="text-slate-600 text-sm">Input total tips collected (cash + digital) and each employee's hours worked for the week.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-700">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Fair Allocations</h3>
              <p className="text-slate-600 text-sm">TipTrail calculates $ per hour for every employee with your custom tip-out ratios.</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-700">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Download & Stay Compliant</h3>
              <p className="text-slate-600 text-sm">Export a PDF report and run the CA DLSE compliance checker — all in one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-500" />
                Why Tip Compliance Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">CA DLSE fines can reach $10,000 per violation</p>
                    <p className="text-sm text-slate-600">Improper tip pools, tip credits, and missing records are the top citations during labor audits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">3-year record-keeping requirement</p>
                    <p className="text-sm text-slate-600">California requires restaurants to retain tip records for 3 years. TipTrail auto-archives every calculation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">IRS Form 8027 for large restaurants</p>
                    <p className="text-sm text-slate-600">Restaurants with $500K+ annual gross must file 8027 annually. TipTrail generates your allocation summary.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Simple, Honest Pricing</h2>
            <p className="text-slate-600 mt-2">No surprise fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Try it out risk-free</CardDescription>
                <div className="text-3xl font-bold mt-4">$0<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>2 calculations/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Up to 5 employees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic tip-out ratios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>PDF export (watermarked)</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span className="h-5 w-5">✗</span>
                    <span>CA compliance checker</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span className="h-5 w-5">✗</span>
                    <span>History logs</span>
                  </li>
                </ul>
                <Link href="/calculate"><Button variant="outline" className="w-full mt-6">Get Started</Button></Link>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="border-amber-500 border-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>For growing restaurants</CardDescription>
                  </div>
                  <Badge className="bg-amber-500">Popular</Badge>
                </div>
                <div className="text-3xl font-bold mt-4">$19<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>5 calculations/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Up to 20 employees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom tip-out ratios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>PDF export (no watermark)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>CA DLSE compliance checker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>3-month history</span>
                  </li>
                </ul>
                <a href="/checkout?plan=starter" className="inline-flex items-center justify-center rounded-lg border border-transparent bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium whitespace-nowrap transition-all h-8 gap-1.5 px-2.5 mt-6 w-full text-center">Subscribe — Starter</a>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For multi-location owners</CardDescription>
                <div className="text-3xl font-bold mt-4">$49<span className="text-lg font-normal text-slate-500">/mo</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited employees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited locations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Weekly email reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>IRS Form 8027 generator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a href="/checkout?plan=pro" className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-sm font-medium whitespace-nowrap transition-all h-8 gap-1.5 px-2.5 mt-6 w-full text-center">Subscribe — Pro</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Note */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="py-6">
              <p className="text-slate-700 text-sm">
                <strong>vs. the competition:</strong> 7shifts starts at $150/mo. HotSchedules at $200/mo. TipTrail delivers purpose-built tip pooling and CA compliance at $19-49/mo — a fraction of the cost for independent owners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Calculator className="h-6 w-6 text-amber-500" />
              <span className="text-lg font-bold text-white">TipTrail AI</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>CA DLSE compliant tip pooling for independent restaurants</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            © 2026 TipTrail AI by Huadini. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
