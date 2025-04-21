import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"
import ContactInfo from "@/components/contact-info"

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <div className="container-width py-20 grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div>
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
