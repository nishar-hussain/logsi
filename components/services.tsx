import { ArrowUpRight, Eye, CircleCheck, Wallet, LineChart, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Eye,
    title: "Onchain transactions",
    description: "Eligible token transfers and trades can be verified through Solana transaction records.",
    href: "#contact",
  },
  {
    icon: CircleCheck,
    title: "Transparent asset information",
    description: "Review token identifiers, issuer details, and verified onchain records where available.",
    href: "#about",
  },
  {
    icon: Wallet,
    title: "Simple trading experience",
    description: "Explore supported assets, review trade details, and connect a compatible Solana wallet when required.",
    href: "#contact",
  },
  {
    icon: LineChart,
    title: "Portfolio visibility",
    description: "Track supported token balances, transaction activity, and estimated asset values in one view.",
    href: "#contact",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-accent" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground/70">BUILT ON SOLANA MAINNET</span>
            </div>

            <h2 className="text-3xl font-serif text-foreground mb-6 md:text-5xl">Onchain access with greater visibility.</h2>

            <p className="text-foreground/70 max-w-lg">
              Solana mainnet provides the blockchain infrastructure for supported token interactions. lokgi connects
              the stock discovery experience with compatible onchain assets and transaction information.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              See how it works
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 border border-border hover:border-foreground/30 transition-colors rounded-none border-t-0 border-l-[0] border-r-0"
              >
                <service.icon className="h-8 w-8 text-foreground mb-4" strokeWidth={1} />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
