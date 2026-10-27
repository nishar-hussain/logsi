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
              <span className="text-sm font-medium text-foreground/70">ASSET STRUCTURE</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight text-balance">
              Know exactly what you hold.
            </h2>

            <p className="mt-6 text-foreground/70">
              A Lokgi token is a frozen, non-transferable claim against USDC held in the Lokgi Solana vault. Its price is derived from the latest official US market close. It is not a share and does not provide company ownership, voting rights, or dividends.
            </p>

            <Link
              href="/risk-disclosure"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
            >
              Read the Risk Disclosure
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Content - Technology Card */}
          <div className="bg-card rounded-3xl p-8 border border-border">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6">
              <CircleDollarSign className="h-6 w-6 text-accent-foreground" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">Reference price. Vault claim.</h3>

            <p className="text-foreground/70">
              A buy transfers USDC into the program-controlled vault and mints a claim. A sale burns the claim and returns applicable USDC proceeds, subject to vault liquidity. Claims remain frozen and cannot be transferred to another wallet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
