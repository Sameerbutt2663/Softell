import { Link } from "react-router-dom";
import { FadeIn } from "../animations/FadeIn";
import { Stagger } from "../animations/Stagger";
import { CTASection } from "../components/CTASection";
import { FeatureCard } from "../components/FeatureCard";
import { HeroSlider } from "../components/HeroSlider";
import { IconArrow } from "../components/Icons";
import { PageShell, Seo } from "../components/Seo";
import { PricingCard } from "../components/PricingCard";
import { SectionHeading } from "../components/SectionHeading";
import { TestimonialCard } from "../components/TestimonialCard";
import {
  demoMarks,
  homeServices,
  pricingPlans,
  processSteps,
  seo,
  testimonials,
  values,
} from "../data/siteData";

export default function Home() {
  return (
    <PageShell>
      <Seo {...seo.home} path="/" />
      <HeroSlider />

      <section className="section-tight band-white">
        <div className="container">
          <SectionHeading
            align="center"
            title="Technology Built For Modern Business"
            text="A quiet signal of the operational brands we imagine SoftTell working alongside — illustrative marks, not client claims."
          />
          <div className="trust-row">
            {demoMarks.map((mark) => (
              <span className="trust-mark" key={mark}>
                {mark}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-cream">
        <div className="container split">
          <SectionHeading title="Turn Complexity Into Intelligent Systems" />
          <FadeIn direction="left">
            <p className="lead">
              SoftTell exists to help companies connect people, data, software, AI, and workflows
              into systems that feel coherent. When work is scattered across inboxes, spreadsheets,
              and disconnected tools, the cost is not only time — it is lost context.
            </p>
            <p className="lead" style={{ marginTop: 16 }}>
              We design technology that turns that complexity into something operational: a calmer
              flow of information, fewer handoffs, and software that supports the way teams already
              think.
            </p>
            <div className="chip-row">
              {["People", "Data", "Software", "AI", "Workflows"].map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section band-white">
        <div className="container">
          <SectionHeading title="What We Build" />
          <div className="asymmetric">
            <FadeIn className="service-feature">
              <h3>Services shaped around modern products</h3>
              <p>
                From web, mobile, and Shopify to Gen AI, data platforms, and SaaS, SoftTell builds
                the technology behind digital products and operations.
              </p>
              <Link className="explore-link" to="/services">
                View Services <IconArrow />
              </Link>
            </FadeIn>
            <Stagger className="service-stack" interval={0.06}>
              {homeServices.map((item) => (
                <article className="service-mini" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section band-cream">
        <div className="container">
          <SectionHeading title="Designed For Real Business Impact" />
          <Stagger className="value-grid">
            {values.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </Stagger>
        </div>
      </section>

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

      <section className="section band-cream" id="pricing">
        <div className="container">
          <SectionHeading
            align="center"
            title="Custom Engagements"
            text="Every SoftTell engagement is scoped to the work, the timeline, and the systems already in place — a custom path from first release to long-term partnership."
          />
          <Stagger className="pricing-grid" interval={0.08}>
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section band-white" id="testimonials">
        <div className="container">
          <SectionHeading
            align="center"
            title="What Teams Tell Us"
            text="Teams at DT Supply, SunSync Hardware, and Araaf on the systems SoftTell builds around how they actually work."
          />
          <Stagger className="testimonial-grid" interval={0.08}>
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        tone="white"
        heading="Ready To Build A Smarter Business?"
        text="Let's turn repetitive processes into intelligent systems."
        button="Start A Conversation"
      />
    </PageShell>
  );
}
