import { ArrowUpRight, CircleDollarSign, Info } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Info className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">US EQUITIES. ONCHAIN ACCESS.</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight text-balance">
              Explore the US stock market through a simpler onchain experience.
            </h2>

            <p className="mt-6 text-foreground/70">
              Discover leading companies, review tokenized stock products, and learn how supported assets work within
              the Solana ecosystem. Stock and token prices, liquidity, and rights may differ by product.
            </p>

            <Link
              href="#works"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
            >
              Explore the market
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Content - Technology Card */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6">
              <CircleDollarSign className="h-6 w-6 text-accent-foreground" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Stocks, represented onchain</h3>

            <p className="text-foreground/70">
              Tokenized assets are digital representations linked to financial products. Always review the issuer,
              backing, redemption arrangements, liquidity, and restrictions before trading.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
