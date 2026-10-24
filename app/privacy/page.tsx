import LegalPage from "@/components/legal-page"

export default function PrivacyPage() {
  return <LegalPage
    eyebrow="LEGAL · PRIVACY"
    title="Privacy Policy"
    intro="This draft explains the categories of information Logsi may handle when you browse the site, contact us, or use a wallet-connected feature. The final policy should be tailored to the actual production services and jurisdictions served."
    sections={[
      { title: "1. Information we may collect", body: "Depending on the features you use, Logsi may receive contact details you submit, device and usage information, technical logs, preferences, and public blockchain wallet addresses when you choose to connect a wallet. Do not submit private keys or seed phrases." },
      { title: "2. How information is used", body: "Information may be used to operate and secure the service, respond to requests, improve the product, understand usage, prevent abuse, and provide requested wallet or transaction functionality." },
      { title: "3. Blockchain information", body: "Public blockchain transactions and wallet addresses may be visible on the relevant network and may be difficult or impossible to delete. Connecting a wallet is optional for browsing features unless a supported blockchain action requires authorization." },
      { title: "4. Sharing and service providers", body: "Information may be shared with service providers that help host, secure, analyze, support, or operate Logsi, or when required to comply with law, protect rights, or prevent fraud. We do not ask for private wallet credentials." },
      { title: "5. Cookies and choices", body: "The site may use necessary storage and analytics technologies. You can manage browser settings and, where available, consent preferences. Disabling some technologies may affect functionality." },
      { title: "6. Your requests", body: "Depending on applicable law, you may have rights to request access, correction, deletion, restriction, portability, or objection. Contact details and verification steps should be added here before production launch." },
    ]}
  />
}
