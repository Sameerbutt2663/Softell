import { Stagger } from "../animations/Stagger";
import { CTASection } from "../components/CTASection";
import { PageHero } from "../components/PageHero";
import { PageShell, Seo } from "../components/Seo";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { pageBanners, processSteps, seo, serviceGroups } from "../data/siteData";

export default function Services() {
  return (
    <PageShell>
      <Seo {...seo.services} path="/services" />
      <PageHero
        image={pageBanners.services}
        title="Technology Services Built Around Your Business"
        text="From digital transformation and Shopify to Gen AI, data platforms, and SaaS — SoftTell designs and delivers technology around how your business actually works."
      />

      {serviceGroups.map((group, index) => (
        <section
          className={`section ${index % 2 === 0 ? "band-white" : "band-cream"}`}
          id={group.id}
          key={group.id}
        >
          <div className="container">
            <SectionHeading title={group.title} text={group.description} />
            <div className={`flip-grid${group.items.length === 1 ? " is-single" : ""}`}>
              {group.items.map((item) => (
                <ServiceCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section band-peach">
        <div className="container">
          <SectionHeading
            title="From Idea To Implementation"
            text="A clear path from understanding the work to putting a reliable system in motion."
          />
          <Stagger className="process-grid" interval={0.07}>
            {processSteps.map((step) => (
              <article className="process-step" key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection heading="Have A Product Or Process You Want To Build?" button="Let's Talk" />
    </PageShell>
  );
}
