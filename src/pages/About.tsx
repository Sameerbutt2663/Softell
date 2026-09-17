import { FadeIn } from "../animations/FadeIn";
import { Stagger } from "../animations/Stagger";
import { CTASection } from "../components/CTASection";
import { PageHero } from "../components/PageHero";
import { PageShell, Seo } from "../components/Seo";
import { SectionHeading } from "../components/SectionHeading";
import { beliefs, pageBanners, principles, seo } from "../data/siteData";

export default function About() {
  return (
    <PageShell>
      <Seo {...seo.about} path="/about" />
      <PageHero
        image={pageBanners.about}
        title="Technology With A Purpose"
        text="SoftTell is a technology company focused on helping businesses use automation, AI, and software to improve everyday operations — with systems that feel clear, useful, and built to last."
      />

      <section className="section band-cream">
        <div className="container story-grid">
          <SectionHeading title="Building Better Ways To Work" />
          <div>
            <FadeIn>
              <p>
                SoftTell exists because too many businesses still run on heroic effort. People copy
                information between tools, chase status in inboxes, and rebuild the same process
                every week because the systems around them were never designed to work together.
              </p>
              <p>
                Manual processes create delay. Disconnected systems create blind spots. Data
                complexity makes it hard to trust what you are looking at. Customer experience
                suffers when the next action depends on someone remembering to follow up.
              </p>
              <p>
                Technology can solve these problems when it is aimed at the work itself: capturing
                what matters, moving it to the right place, and giving people room to use their
                judgment. That is the purpose behind SoftTell — practical intelligence, applied with
                care.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section band-white">
        <div className="container">
          <SectionHeading
            title="Simple Thinking. Intelligent Technology."
            text="A calm, repeatable way to move from a messy operational problem to a system teams can actually use."
          />
          <Stagger className="principles">
            {principles.map((item, index) => (
              <article className="principle" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section band-peach">
        <div className="container">
          <SectionHeading title="What We Believe" />
          <div className="beliefs">
            {beliefs.map((line, index) => (
              <FadeIn key={line} delay={index * 0.08} direction="up">
                <p className="belief">{line}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Let's Build What's Next" button="Talk To SoftTell" />
    </PageShell>
  );
}
