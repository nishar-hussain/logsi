"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = 500 // Maximum scroll distance for the effect
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = 1 - scrollProgress * 0.15 // Scale from 1 to 0.85
  const borderRadius = scrollProgress * 24 // Border radius from 0 to 24px

  return (
    <section id="home" className="pt-28 pb-16">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Product introduction */}
          <div className="lg:max-w-3xl pt-0">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-foreground/60">US EQUITY MARKETS. ONCHAIN SETTLEMENT.</p>
            <h1 className="leading-tight text-balance text-left font-sans font-semibold leading-7 tracking-tight text-accent text-5xl">
              Explore US Stocks. Trade Onchain.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/70">
              Discover leading US companies, explore stock-market prices, and experience onchain trading through Lokgi. Buy and sell stock-price-linked claims against a USDC vault on Solana devnet, with wallet-authorized transactions and verifiable settlement.
            </p>

            <a
              href="https://app.lokgi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Explore Markets
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="#services"
              className="mt-8 ml-3 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              How Lokgi Works
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="max-w-[260px] pt-8 lg:pt-12">
            <p className="text-sm leading-6 text-foreground/70">
              Explore 24 supported stock-linked claims alongside a broader directory of US-listed companies.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 px-6">
        <div
          className="relative overflow-hidden transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          <Image
            src="/images/97ab9037-5842-4584-bc95-9fc90baece99.png"
            alt="Lokgi US stock market dashboard on Solana devnet"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
          />

        </div>
      </div>
    </section>
  )
}
