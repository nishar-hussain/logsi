import LegalPage from "@/components/legal-page"

export default function RiskDisclosurePage() {
  return <LegalPage
    eyebrow="LEGAL · RISK DISCLOSURE"
    title="Risk Disclosure"
    intro="Lokgi is a Solana mainnet development product currently presented in Demo Mode. Its frozen, non-transferable claims are priced using official US stock-market closing prices and are not shares in the referenced companies. The risks below are not exhaustive."
    sections={[
      { title: "Underlying-market risk", body: "US stock prices can rise or fall, sometimes rapidly. A token price may not match the underlying stock reference price because of liquidity, fees, trading hours, market conditions, and product-specific mechanics." },
      { title: "Claim structure and rights", body: "A Lokgi claim is a frozen, non-transferable claim against USDC held in the Lokgi vault. It does not provide company ownership, voting rights, dividends, or rights to receive shares in the referenced company." },
      { title: "Vault and backing risk", body: "A claim depends on the Lokgi USDC vault, the program-controlled settlement flow, and the applicable product rules. Review the vault structure, limits, fees, and disclosures before trading." },
      { title: "Liquidity and execution risk", body: "The vault may not have sufficient liquidity for a requested sale. You may be unable to buy or sell a supported claim at the expected price or within the expected timeframe." },
      { title: "Blockchain and wallet risk", body: "Transactions may be irreversible. Smart-contract, network congestion, wallet, private-key, phishing, software, and third-party integration risks may result in loss or delay. Never share a seed phrase or private key." },
      { title: "Regulatory and jurisdictional risk", body: "Availability, transferability, investor eligibility, tax treatment, and legal protections may vary by jurisdiction and may change. Do not access or trade an asset where doing so is not permitted." },
      { title: "Demo trading notice", body: "The current Lokgi interface operates in Demo Mode on Solana mainnet. Orders are simulated for demonstration and no real assets or live stock trades are executed. Confirm the network, wallet, token mint, price source, fees, and transaction details before authorizing any future supported transaction." },
    ]}
  />
}
