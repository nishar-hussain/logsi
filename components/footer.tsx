import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1500px] px-6 pt-20 md:px-10 md:pt-28">
        <Link
          href="/"
          className="block overflow-hidden text-[clamp(5rem,18vw,17rem)] font-semibold leading-[0.78] tracking-[-0.09em] text-white transition-opacity hover:opacity-80"
        >
          <span className="flex items-center gap-4">
            <Image src="/images/logsi-mark.jpeg" alt="logsi mark" width={160} height={160} className="h-[clamp(3rem,9vw,9rem)] w-[clamp(3rem,9vw,9rem)] rounded-2xl object-contain invert" />
            <span>logsi</span>
          </span>
        </Link>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/20 py-7 text-sm text-white/65 md:mt-24 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span>logsi © 2026</span>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/risk-disclosure" className="transition-colors hover:text-white">Risk Disclosure</Link>
          </div>

          <div className="flex items-center gap-6 text-white/75">
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="logsi on X" className="text-xl transition-colors hover:text-white">𝕏</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="logsi on GitHub" className="transition-colors hover:text-white"><Github size={21} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
