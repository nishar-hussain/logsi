import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    title: "What are tokenized US stocks?",
    quote: "Digital tokens designed to represent ownership interests or economic exposure linked to US-listed equities. The rights associated with each token depend on its issuer and structure.",
    author: "Asset structure",
    location: "Review issuer documentation",
    image: "/images/imgi_108_user88.webp",
  },
  {
    title: "Does a token represent an actual share?",
    quote: "Not necessarily. Review the relevant issuer documentation to determine whether a token represents shares, a contractual claim, or another form of economic exposure.",
    author: "Ownership rights",
    location: "Depends on the product",
    image: "/images/imgi_113_user93.webp",
  },
  {
    title: "Why does the platform use Solana?",
    quote: "Solana provides blockchain infrastructure for supported asset transactions and token interactions. A compatible wallet is required for blockchain actions that depend on wallet authorization.",
    author: "Wallet access",
    location: "Browsing may work without connecting",
    image: "/images/imgi_109_user89.webp",
  },
  {
    title: "What are the risks?",
    quote: "Stock and token prices can fluctuate. Token holders may also face liquidity, issuer, custody, redemption, technical, and regulatory risks.",
    author: "Risk disclosure",
    location: "Understand the asset before trading",
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
