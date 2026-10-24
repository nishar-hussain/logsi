import Image from "next/image"

type Company = {
  name: string
  ticker: string
  icon?: string
  mark?: string
  className?: string
}

function CompanyIcon({ company }: { company: Company }) {
  if (company.icon) {
    return <Image src={company.icon} alt="" width={26} height={26} className="h-7 w-7 rounded-md object-contain" />
  }

  if (company.ticker === "MSFT") {
    return <span className="grid h-7 w-7 grid-cols-2 gap-0.5 rounded-md bg-white p-1"><i className="bg-[#f25022]" /><i className="bg-[#7fba00]" /><i className="bg-[#00a4ef]" /><i className="bg-[#ffb900]" /></span>
  }

  return <span className={`grid h-7 w-7 place-items-center rounded-md bg-white text-sm font-bold ${company.className ?? "text-[#f59e0b]"}`}>{company.mark}</span>
}

export default function LogoCloud() {
  const logos: Company[] = [
    { name: "Apple", ticker: "AAPL", icon: "/images/apple-mark.svg" },
    { name: "NVIDIA", ticker: "NVDA", icon: "/images/nvidia-logo.jpeg" },
    { name: "Tesla", ticker: "TSLA", icon: "/images/tesla-logo.jpeg" },
    { name: "Microsoft", ticker: "MSFT" },
    { name: "Amazon", ticker: "AMZN", icon: "/images/amazon-mark.svg" },
    { name: "Alphabet", ticker: "GOOGL", icon: "/images/google-mark.svg" },
  ]
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="m-0 overflow-hidden border-0 bg-black py-12 text-white">
      <div className="logo-marquee" aria-label="Supported companies">
        <div className="logo-marquee-track">
          {marqueeLogos.map((company, index) => (
            <div
              key={`${company.ticker}-${index}`}
              aria-hidden={index >= logos.length}
              className="flex shrink-0 items-center gap-3 px-8 text-lg font-medium whitespace-nowrap transition-colors hover:text-white/70 md:px-12"
            >
              <CompanyIcon company={company} />
              <span>{company.name} · {company.ticker}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
