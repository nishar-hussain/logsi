import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

type Section = { title: string; body: string }

export default function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: Section[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-40 md:pt-48">
        <Link href="/" className="text-sm font-medium text-foreground/60 hover:text-accent">← Back to lokgi</Link>
        <p className="mt-12 text-sm font-medium uppercase tracking-[0.14em] text-foreground/60">{eyebrow}</p>
        <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">{title}</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-foreground/70">{intro}</p>
        <div className="mt-16 space-y-10 border-t border-border pt-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-foreground/70">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-16 border-t border-border pt-6 text-sm leading-6 text-foreground/55">Last updated: October 25, 2026. This page is a product-content draft and is not legal advice. Obtain a qualified legal review before enabling real-money trading, custody, token issuance, or regulated services.</p>
      </article>
      <Footer />
    </main>
  )
}
