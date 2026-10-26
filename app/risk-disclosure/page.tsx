import LegalPage from "@/components/legal-page"

export default function RiskDisclosurePage() {
  return <LegalPage
    eyebrow="LEGAL · RISK DISCLOSURE"
    title="Risk Disclosure"
    intro="Lokgi is a Solana devnet development product. Its non-transferable claims are priced using official US stock-market closing prices and are not shares in the referenced companies. The risks below are not exhaustive."
    sections={[
      { title: "Underlying-market risk", body: "US stock prices can rise or fall, sometimes rapidly. A token price may not match the underlying stock reference price because of liquidity, fees, trading hours, market conditions, and product-specific mechanics." },
      { title: "Claim structure and rights", body: "A Lokgi claim is a non-transferable claim against USDC held in the Lokgi devnet vault. It does not provide company ownership, voting rights, dividends, or rights to receive shares in the referenced company." },
      { title: "Vault and backing risk", body: "A claim depends on the Lokgi devnet USDC vault, the program-controlled settlement flow, and the applicable product rules. Review the vault structure, limits, fees, and disclosures before trading." },
      { title: "Liquidity and execution risk", body: "The vault may not have sufficient liquidity for a requested sale. You may be unable to buy or sell a supported claim at the expected price or within the expected timeframe." },
      { title: "Blockchain and wallet risk", body: "Transactions may be irreversible. Smart-contract, network congestion, wallet, private-key, phishing, software, and third-party integration risks may result in loss or delay. Never share a seed phrase or private key." },
      { title: "Regulatory and jurisdictional risk", body: "Availability, transferability, investor eligibility, tax treatment, and legal protections may vary by jurisdiction and may change. Do not access or trade an asset where doing so is not permitted." },
      { title: "Devnet trading notice", body: "The current Lokgi product operates on Solana devnet. Devnet SOL and USDC have no monetary value. Supported transactions demonstrate wallet authorization, price verification, settlement, and accounting in a development environment and do not constitute real-money stock trading." },
    ]}
  />
}
