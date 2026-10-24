"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ArrowUpRight, Send } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const stockLogos = [
    { src: "/images/nvidia-logo.jpeg", alt: "NVIDIA logo", name: "NVIDIA · NVDA", scale: 0.92 },
    { src: "/images/tesla-logo.jpeg", alt: "Tesla logo", name: "Tesla · TSLA", scale: 1 },
    { src: "/images/openai-logo.jpeg", alt: "OpenAI logo", name: "OpenAI · AI", scale: 1.05 },
    { src: "/images/solana-logo.jpeg", alt: "Solana logo", name: "Solana · SOL", scale: 1.62 },
  ]
  const [activeLogo, setActiveLogo] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLogo((current) => (current + 1) % stockLogos.length)
    }, 2000)

    return () => window.clearInterval(interval)
  }, [stockLogos.length])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <Send className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">Buy and sell</span>
        </div>

          <p className="text-foreground/70 max-w-xl mb-12">
            Choose a supported tokenized stock, review the current quote, and see the expected output, fees, and slippage
            before confirming. If the current application is in demo mode, it will be clearly labelled.
          </p>
          <div className="mb-8 inline-flex items-center rounded-full border border-foreground/20 bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
            Solana Mainnet · Demo Trading — orders are simulated and do not execute onchain
          </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden bg-white lg:min-h-[500px]">
            <div
              key={stockLogos[activeLogo].src}
              className="stock-logo-frame"
              style={{ transform: `scale(${stockLogos[activeLogo].scale})` }}
            >
              <Image
                src={stockLogos[activeLogo].src}
                alt={stockLogos[activeLogo].alt}
                width={600}
                height={500}
                className="stock-logo-spin h-full w-full object-contain"
              />
            </div>
            <div className="absolute bottom-5 left-5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
              {stockLogos[activeLogo].name}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 border-border rounded-none border-0">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">Your next trade starts here</h3>
            <p className="text-foreground/70 mb-8">
              Select an available asset, enter an amount, review the quote and fees, then connect your Solana wallet
              when a real trading route is available.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Asset or ticker*"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-none border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/50"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Buy or sell"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-none border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Amount*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-none border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/50"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Solana wallet (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-none border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/50"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="What would you like to explore? *"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-none border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/50"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Review trade
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
