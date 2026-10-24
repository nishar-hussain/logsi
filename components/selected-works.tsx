"use client"

import { ArrowRight, Briefcase, Plus } from "lucide-react"
import { useState } from "react"

const panels = [
  {
    title: "Stock-linked assets",
    eyebrow: "UNDERLYING STOCK · TOKEN INFORMATION",
    body: "Explore verified asset information and understand each token's relationship with its underlying stock before you interact with it.",
  },
  {
    title: "Solana wallet access",
    eyebrow: "WALLET AUTHORIZATION · ELIGIBLE ASSETS",
    body: "Connect a compatible wallet when required to interact with supported assets and inspect available onchain information.",
  },
  {
    title: "Trading information",
    eyebrow: "QUOTES · LIQUIDITY · FEES · SLIPPAGE",
    body: "Review quotes, liquidity, fees, slippage, and transaction status before confirming an available trade. Demo orders never execute onchain.",
  },
]

export default function SelectedWorks() {
  const [openPanel, setOpenPanel] = useState(-1)

  return (
    <section id="works" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <div className="mb-5 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent" strokeWidth={2} />
            <span className="text-sm font-medium uppercase tracking-[0.14em] text-foreground/70">ONE PLACE TO EXPLORE</span>
          </div>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-7xl lg:text-8xl">
            Explore, understand, and trade supported assets.
          </h2>
        </div>

        <div className="space-y-3">
          {panels.map((panel, index) => {
            const isOpen = openPanel === index
            return (
              <article
                key={panel.title}
                className="group overflow-hidden rounded-br-[5rem] bg-[#f0f2f4] text-[#102326] transition-colors duration-500 hover:bg-black hover:text-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenPanel(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-6 px-7 py-8 text-left md:px-11 md:py-10"
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="block text-3xl font-medium tracking-[-0.04em] md:text-5xl">{panel.title}</span>
                    <span className="mt-4 block text-xs font-semibold tracking-[0.14em] text-[#52646b] transition-colors duration-500 group-hover:text-[#7d9298]">{panel.eyebrow}</span>
                  </span>
                  <span className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#52646b] text-[#102326] transition-colors duration-500 group-hover:border-white/40 group-hover:text-white">
                    <Plus className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} size={28} strokeWidth={1.5} />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0 overflow-hidden px-7 md:px-11">
                    <div className="max-w-2xl pb-10">
                      <p className="text-base leading-7 text-[#52646b] transition-colors duration-500 group-hover:text-white/70">{panel.body}</p>
                      <a href="#contact" className="mt-6 inline-flex items-center gap-3 rounded-md border border-[#238b79] px-5 py-3 text-xs font-bold uppercase tracking-[0.13em] text-[#238b79] transition-colors duration-500 hover:opacity-80 group-hover:border-[#40d6b4] group-hover:bg-[#40d6b4] group-hover:text-[#102326]">
                        Explore details <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
