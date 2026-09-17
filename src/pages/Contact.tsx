import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { PageShell, Seo } from "../components/Seo";
import { contact, pageBanners, seo } from "../data/siteData";

export default function Contact() {
  return (
    <PageShell>
      <Seo {...seo.contact} path="/contact" />
      <PageHero
        image={pageBanners.contact}
        title="Let's Build Something Intelligent"
        text="Tell us what you want to automate, improve, or build."
      />

      <section className="section band-cream">
        <div className="container contact-layout">
          <ContactForm />
          <aside>
            <div className="info-card">
              <h3>Email</h3>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <h3>Phone</h3>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
              <h3>Location</h3>
              <p>{contact.location}</p>
              <h3>Business hours</h3>
              <p>{contact.hours}</p>
              <p className="muted">
                Update these placeholders in <code>src/data/siteData.ts</code>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
