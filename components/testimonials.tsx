import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    title: "Is a Lokgi token a stock?",
    quote: "No. A Lokgi token is a non-transferable claim against USDC in the Lokgi mainnet vault, priced using the latest official closing price. It does not convey company ownership, voting rights, or dividends.",
    author: "Claim structure",
    location: "Understand what you hold",
    image: "/images/imgi_108_user88.webp",
  },
  {
    title: "Is Lokgi running on Solana mainnet?",
    quote: "Yes. The current product is deployed on Solana mainnet. Always verify the network, wallet, token mint, and transaction details before authorizing a trade.",
    author: "Network status",
    location: "Production environment",
    image: "/images/imgi_113_user93.webp",
  },
  {
    title: "What price is used?",
    quote: "Lokgi uses the latest completed US regular-session close from Massive. The application displays the relevant price timestamp rather than labeling the data live.",
    author: "Market data",
    location: "Official close reference",
    image: "/images/imgi_109_user89.webp",
  },
  {
    title: "What happens when I sell?",
    quote: "The Solana program burns the claim and pays the calculated USDC proceeds from the vault, subject to sufficient vault liquidity.",
    author: "Trading flow",
    location: "Review the risk disclosure",
    image: "/images/imgi_107_user87.webp",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <Quote className="w-5 h-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium text-foreground/70">FAQ</span>
        </div>

        <h2 className="text-3xl font-serif text-foreground mb-12 md:text-5xl">Questions before you trade?</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">{testimonial.title}</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
