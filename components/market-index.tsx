import { ArrowUpRight } from "lucide-react"
import { Icon } from "@iconify/react"
import logos from "@iconify-json/logos/icons.json"
import simpleIcons from "@iconify-json/simple-icons/icons.json"


const companies = [
  { name: "Apple", icon: "simple-icons:apple", color: "ffffff", tone: "bg-black" },
  { name: "Amazon", icon: "simple-icons:amazon", color: "111111", tone: "bg-white" },
  { name: "Disney", mark: "Disney", tone: "bg-black" },
  { name: "Alphabet", icon: "logos:google-icon", tone: "bg-white" },
  { name: "Tesla", icon: "simple-icons:tesla", color: "ffffff", tone: "bg-[#df0000]" },
  { name: "Netflix", icon: "simple-icons:netflix", color: "e50914", tone: "bg-black" },
  { name: "Microsoft", icon: "logos:microsoft-icon", tone: "bg-[#eef1f7]" },
  { name: "NVIDIA", icon: "simple-icons:nvidia", color: "ffffff", tone: "bg-[#76b900]" },
  { name: "BlackRock", mark: "BlackRock", tone: "bg-black" },
  { name: "Pfizer", mark: "Pfizer", tone: "bg-[#0b06d8]" },
  { name: "Market", icon: "simple-icons:tradingview", color: "ffffff", tone: "bg-black" },
  { name: "Meta", icon: "logos:meta-icon", tone: "bg-[#e4edf3]" },
  { name: "Coinbase", icon: "simple-icons:coinbase", color: "ffffff", tone: "bg-[#1652f0]" },
  { name: "Arm", icon: "simple-icons:arm", color: "ffffff", tone: "bg-[#0795bd]" },
  { name: "Visa", icon: "logos:visa", tone: "bg-[#1a36c7]" },
  { name: "McDonald's", icon: "simple-icons:mcdonalds", color: "ffc72c", tone: "bg-[#da1e27]" },
  { name: "PayPal", icon: "logos:paypal", tone: "bg-white" },
  { name: "Bitcoin", icon: "logos:bitcoin", tone: "bg-[#f7931a]" },
  { name: "Mastercard", icon: "logos:mastercard", tone: "bg-black" },
  { name: "Stellar", icon: "simple-icons:stellar", color: "00d4ff", tone: "bg-black" },
  { name: "Citi", mark: "Citi", tone: "bg-[#315bd8]" },
]

function getIcon(icon: string) {
  const [prefix, name] = icon.split(":")
  const collection = prefix === "logos" ? logos : simpleIcons
  const data = collection.icons[name as keyof typeof collection.icons]
  if (!data) return undefined
  const iconData = data as { body: string; width?: number; height?: number }

  return {
    ...iconData,
    width: iconData.width ?? collection.width,
    height: iconData.height ?? collection.height,
  }
}

export default function MarketIndex() {
  return (
    <section id="market-index" className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-black text-white shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-white/25 p-8 md:p-12 lg:border-b-0 lg:border-r lg:p-14">
            <p className="text-[clamp(4.5rem,10vw,8.5rem)] font-semibold leading-[0.8] tracking-[-0.09em]">700+</p>
            <h2 className="mt-8 max-w-lg text-4xl font-medium leading-[0.98] tracking-[-0.06em] md:text-6xl">
              stocks you know.
            </h2>

            <div className="mt-16 grid grid-cols-4 gap-4 sm:grid-cols-7 sm:gap-6">
              {companies.map((company) => {
                const icon = company.icon ? getIcon(company.icon) : undefined
                return (
                  <div
                    key={company.name}
                    title={company.name}
                    className={`flex aspect-square items-center justify-center overflow-hidden rounded-full border border-white/10 p-3 text-center ${company.tone}`}
                  >
                    {icon ? (
                      <Icon
                        icon={icon}
                        aria-label={`${company.name} logo`}
                        width="72%"
                        height="72%"
                        style={{
                          color: company.color ? `#${company.color}` : undefined,
                          display: "block",
                        }}
                      />
                    ) : (
                      <span className="text-[clamp(.65rem,1.15vw,1rem)] font-bold leading-none tracking-[-0.06em]">{company.mark}</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden p-8 md:p-12 lg:p-14">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,transparent_0,transparent_49%,rgba(255,255,255,.1)_50%,transparent_51%),linear-gradient(180deg,transparent_0,transparent_49%,rgba(255,255,255,.08)_50%,transparent_51%)] [background-size:160px_160px]" />
            <div aria-hidden="true" className="market-scan-line pointer-events-none absolute inset-y-0 left-0 w-px bg-white/40" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              {["8%", "19%", "31%", "43%", "55%", "67%", "79%", "91%"].map((left, index) => (
                <span
                  key={left}
                  className={`market-flow-bar ${index % 3 === 1 ? "market-flow-bar-accent" : ""}`}
                  style={{
                    left,
                    height: `${110 + (index % 4) * 42}px`,
                    animationDelay: `${index * -0.7}s`,
                  }}
                />
              ))}
            </div>
            <div className="absolute right-8 top-0 h-3 w-14 rounded-b-full bg-white/80 md:right-14" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-6">
                <h2 className="max-w-xl text-5xl font-semibold leading-[0.93] tracking-[-0.07em] md:text-7xl">
                  One index<br />you can&apos;t get<br />anywhere else.
                </h2>
                <span className="hidden whitespace-nowrap text-right text-xl font-semibold text-white/70 sm:block">S&amp;P Global</span>
              </div>

              <div className="mt-auto max-w-xl pt-20">
                <p className="text-lg leading-7 text-white/75 md:text-xl">
                  The S&amp;P Digital Markets 50 Index brings public equities and digital assets together in one market reference for the onchain economy.
                </p>
                <a href="#works" className="mt-8 inline-flex items-center gap-5 rounded-md bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition-transform hover:-translate-y-1">
                  Explore the market <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
