import LegalPage from "@/components/legal-page"

export default function TermsPage() {
  return <LegalPage
    eyebrow="LEGAL · TERMS OF SERVICE"
    title="Terms of Service"
    intro="These terms describe the basic rules for using the lokgi website and Solana devnet product experience. By accessing lokgi, you agree to use the service lawfully and responsibly."
    sections={[
      { title: "1. The lokgi service", body: "lokgi is a US equity reference desk on Solana devnet. It provides market information and interfaces for exploring US-listed companies and supported non-transferable claims against a devnet USDC vault. Lokgi is not a broker, exchange, investment adviser, or custodian." },
      { title: "2. Devnet product", body: "The current product is deployed on Solana devnet. Devnet SOL and USDC have no monetary value. Supported claims are not shares in US companies and do not provide equity ownership, voting rights, or dividends." },
      { title: "3. No investment advice", body: "Content on this site is for general information only. It is not investment, legal, tax, accounting, or financial advice, and it is not an offer or solicitation to buy or sell any security or digital asset." },
      { title: "4. Supported claims and third parties", body: "Only the 24 supported claims and expressly identified devnet routes should be treated as available. Other listed companies are reference-only. Third-party services may have separate terms, fees, risks, and availability restrictions." },
      { title: "5. Prohibited use", body: "You may not use lokgi to violate applicable law, misrepresent your identity, interfere with the service, attempt unauthorized access, or engage in fraud, market manipulation, money laundering, or sanctions evasion." },
      { title: "6. Changes and availability", body: "We may update, suspend, or discontinue features, content, or access. Market data, token information, liquidity, and blockchain services may be delayed, unavailable, or inaccurate." },
    ]}
  />
}
