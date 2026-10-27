import { ArrowUpRight, Eye, CircleCheck, Wallet, LineChart, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Eye,
    title: "US market discovery",
    description: "Explore US-listed companies with company information, price changes, and historical charts.",
    href: "#contact",
  },
  {
    icon: CircleCheck,
    title: "Price-based claims",
    description: "Buy or sell supported claims using prices derived from the latest completed US regular-session close.",
    href: "/risk-disclosure",
  },
  {
    icon: Wallet,
    title: "Verifiable settlement",
    description: "Orders are prepared by the API, authorized by your wallet, and validated by the Solana program.",
    href: "#contact",
  },
  {
    icon: LineChart,
    title: "Portfolio accounting",
    description: "Review USDC balances, holdings, cost basis, estimated profit and loss, and transaction history.",
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
              <span className="text-sm font-medium text-foreground/70">FROM MARKET DATA TO SETTLEMENT</span>
            </div>

            <h2 className="text-3xl font-serif text-foreground mb-6 md:text-5xl">From market data to onchain trades.</h2>

            <p className="text-foreground/70 max-w-lg">
              Lokgi bridges traditional US markets with blockchain execution. Discover companies, inspect stock information, and trade supported claims in one place.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Explore the Trading Flow
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
