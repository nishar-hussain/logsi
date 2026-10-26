import { ArrowUpRight, ShieldCheck, Waves, Globe2 } from "lucide-react"

const features = [
  {
    icon: Globe2,
    title: "US market discovery.",
    description: "Explore a broad directory of US-listed companies with company information, price changes, and historical charts.",
    className: "bg-[#21003e] text-[#d3a4ff]",
    art: "dots",
  },
  {
    icon: Waves,
    title: "Price-based claims.",
    description: "Buy or sell supported claims using prices derived from the latest completed US regular-session close.",
    className: "bg-[#00352d] text-[#6ce0b0]",
    art: "bars",
  },
  {
    icon: ShieldCheck,
    title: "Verifiable settlement.",
    description: "Orders are prepared by the API, authorized by your wallet, and validated by the Solana program before the fill is recorded.",
    className: "bg-[#0b1c3c] text-[#8bb8ff]",
    art: "squares",
  },
]

export default function TokenizedFeatures() {
  return (
    <section id="tokenized-stocks" className="bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto mb-20 max-w-3xl text-center text-5xl font-medium leading-[0.98] tracking-[-0.06em] md:text-7xl">
          Market discovery meets<br />onchain settlement.
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className={`group relative min-h-[600px] overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-2 md:p-10 ${feature.className}`}>
                <div className="relative z-10 flex h-full flex-col">
                  <Icon className="mb-10 h-8 w-8 text-current" strokeWidth={1.5} />
                  <h3 className="max-w-md whitespace-pre-line text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-4xl">{feature.title}</h3>
                  <p className="mt-8 max-w-sm text-base leading-7 text-current/80">{feature.description}</p>
                  <a href="#about" className="mt-auto inline-flex w-fit items-center gap-2 pt-10 text-sm font-semibold text-white/90 transition-colors hover:text-white">
                    Learn more <ArrowUpRight size={16} />
                  </a>
                </div>
                <div aria-hidden="true" className={`pointer-events-none absolute -bottom-2 left-0 right-0 z-0 h-56 transition-transform duration-700 group-hover:scale-105 ${feature.art === "dots" ? "feature-dots" : feature.art === "bars" ? "feature-bars" : "feature-squares"}`} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
