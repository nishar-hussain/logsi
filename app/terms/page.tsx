import LegalPage from "@/components/legal-page"

export default function TermsPage() {
  return <LegalPage
    eyebrow="LEGAL · TERMS OF SERVICE"
    title="Terms of Service"
    intro="These terms describe the basic rules for using the Logsi website and demo experience. By accessing Logsi, you agree to use the service lawfully and responsibly."
    sections={[
      { title: "1. The Logsi service", body: "Logsi provides educational market information, product explanations, and interfaces for exploring supported tokenized stock concepts. Unless expressly stated otherwise, Logsi is not a broker, exchange, investment adviser, custodian, issuer, or execution venue." },
      { title: "2. Demo experience", body: "Some features may use sample or simulated data. Demo orders, balances, quotes, and transaction states do not execute onchain, do not transfer assets, and do not create ownership of shares or tokens." },
      { title: "3. No investment advice", body: "Content on this site is for general information only. It is not investment, legal, tax, accounting, or financial advice, and it is not an offer or solicitation to buy or sell any security or digital asset." },
      { title: "4. Supported assets and third parties", body: "Only assets, issuers, wallets, and trading routes that are expressly supported and verified should be treated as available. Third-party services may have separate terms, fees, risks, and availability restrictions." },
      { title: "5. Prohibited use", body: "You may not use Logsi to violate applicable law, misrepresent your identity, interfere with the service, attempt unauthorized access, or engage in fraud, market manipulation, money laundering, or sanctions evasion." },
      { title: "6. Changes and availability", body: "We may update, suspend, or discontinue features, content, or access. Market data, token information, liquidity, and blockchain services may be delayed, unavailable, or inaccurate." },
    ]}
  />
}
