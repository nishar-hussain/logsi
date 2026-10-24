import LegalPage from "@/components/legal-page"

export default function RiskDisclosurePage() {
  return <LegalPage
    eyebrow="LEGAL · RISK DISCLOSURE"
    title="Risk Disclosure"
    intro="Tokenized stock products can involve significant risks. Read the specific issuer and product documentation before interacting with any supported asset. The risks below are not exhaustive."
    sections={[
      { title: "Underlying-market risk", body: "US stock prices can rise or fall, sometimes rapidly. A token price may not match the underlying stock reference price because of liquidity, fees, trading hours, market conditions, and product-specific mechanics." },
      { title: "Token structure and rights", body: "A token may represent shares, a contractual claim, economic exposure, or another structure. Holding a token does not automatically provide direct ownership, voting rights, dividends, or redemption rights in the underlying company." },
      { title: "Issuer, custody, and backing risk", body: "The value and enforceability of a token may depend on its issuer, backing arrangements, custodians, security interests, intermediaries, and applicable legal documents. Review those documents before trading." },
      { title: "Liquidity and execution risk", body: "An asset may have limited liquidity or no functioning trading route. You may be unable to buy, sell, transfer, or redeem an asset at the expected price or within the expected timeframe." },
      { title: "Blockchain and wallet risk", body: "Transactions may be irreversible. Smart-contract, network congestion, wallet, private-key, phishing, software, and third-party integration risks may result in loss or delay. Never share a seed phrase or private key." },
      { title: "Regulatory and jurisdictional risk", body: "Availability, transferability, investor eligibility, tax treatment, and legal protections may vary by jurisdiction and may change. Do not access or trade an asset where doing so is not permitted." },
      { title: "Mainnet and demo trading notice", body: "Logsi may support Solana mainnet asset interactions where an eligible asset and functioning route are available. Any prototype balances, quotes, or orders explicitly labelled Demo Trading are simulated, do not execute onchain, and do not create token ownership, equity ownership, or a claim against an issuer." },
    ]}
  />
}
