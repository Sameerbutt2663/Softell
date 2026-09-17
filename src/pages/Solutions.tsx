import { FadeIn } from "../animations/FadeIn";
import { Stagger } from "../animations/Stagger";
import { CTASection } from "../components/CTASection";
import { PageHero } from "../components/PageHero";
import { PageShell, Seo } from "../components/Seo";
import { SectionHeading } from "../components/SectionHeading";
import { pageBanners, seo, solutionMatrix } from "../data/siteData";
import {
  AIWorkflowVisual,
  AssistantUI,
  BrowserMock,
  CustomSystemVisual,
  DataPipeline,
  SystemDiagram,
} from "../visuals/Visuals";

const solutions = [
  {
    id: "ai-automation",
    title: "AI Automation",
    text: "SoftTell designs automated workflows that use AI for decision support, repetitive task automation, and intelligent data processing — so operations can move with more context and less friction.",
    points: [
      "Automated workflows with human checkpoints where they matter",
      "AI decision support for routing, classification, and next steps",
      "Repetitive task automation across teams",
      "Intelligent processing of documents, messages, and records",
    ],
    visual: <AIWorkflowVisual />,
    tone: "band-cream",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    text: "Connect the everyday systems work already lives in. SoftTell helps forms, emails, CRM records, databases, internal tools, notifications, and documents operate as one coordinated flow.",
    points: ["Forms", "Emails", "CRM", "Databases", "Internal tools", "Notifications", "Documents"],
    visual: <SystemDiagram />,
    tone: "band-white",
    reverse: true,
  },
  {
    id: "ai-assistants",
    title: "AI Assistants",
    text: "Assistants that help customers and teams find answers, qualify interest, retrieve information, and draft responses — always with a clear place for people to stay in control.",
    points: [
      "Customer support",
      "Internal assistants",
      "Lead qualification",
      "Information retrieval",
      "Automated responses",
    ],
    visual: <AssistantUI />,
    tone: "band-peach",
  },
  {
    id: "data-automation",
    title: "Data Automation",
    text: "A practical pipeline for operational information: collect what arrives, clean what is messy, transform it into structure, analyze for signal, and turn it into action.",
    points: ["Collect", "Clean", "Transform", "Analyze", "Action"],
    visual: <DataPipeline />,
    tone: "band-cream",
    reverse: true,
  },
  {
    id: "digital-experiences",
    title: "Digital Experiences",
    text: "Websites, web applications, customer portals, and interactive experiences — designed as considered interfaces, not generic templates. SoftTell shapes UI/UX systems that make complex work feel simple.",
    points: ["Websites", "Web applications", "Customer portals", "Interactive experiences", "UI/UX systems"],
    visual: <BrowserMock />,
    tone: "band-white",
  },
  {
    id: "custom-systems",
    title: "Custom Business Systems",
    text: "When no single product is the answer, SoftTell combines automation, AI, data, and experience into one tailored business platform — a system that fits the operation instead of asking the operation to fit the software.",
    points: ["Shared data model", "Connected workflows", "Role-aware interfaces", "Room to grow"],
    visual: <CustomSystemVisual />,
    tone: "band-cream",
    reverse: true,
  },
] as const;

const spotlights = [
  {
    name: "Dynamic Tech Supply",
    logo: "/images/logo-dts.jpg",
    tone: "dark",
    shape: "square",
    text: "A technology supply business where inventory, vendors, and fulfillment need to move as one system — from catalog to order to delivery.",
    points: ["Inventory and order flow", "Supplier and catalog systems", "Connected commerce operations"],
  },
  {
    name: "SunSync Hardware",
    logo: "/images/logo-sunsync.jpg",
    tone: "light",
    text: "A hardware-focused operation that depends on clear product data, reliable service workflows, and digital experiences around the physical product.",
    points: ["Product and warranty workflows", "Customer and dealer portals", "Operations dashboards"],
  },
  {
    name: "Araaf",
    logo: "/images/logo-araaf.png",
    tone: "dark",
    text: "A brand that needs a considered digital presence — website, custom tools, and the operational layer behind how customers and teams interact.",
    points: ["Brand-led digital experience", "Custom software and portals", "Automation across daily work"],
  },
] as const;

export default function Solutions() {
  return (
    <PageShell>
      <Seo {...seo.solutions} path="/solutions" />
      <PageHero
        image={pageBanners.solutions}
        title="Intelligent Solutions For Modern Operations"
        text="SoftTell combines software, automation, AI, and data into connected business systems — so teams can work with more clarity and less repetition."
      />

      <section className="section band-white">
        <div className="container">
          <SectionHeading
            title="Organizations In Focus"
            text="Dynamic Tech Supply, SunSync Hardware, and Araaf — three operations the solutions on this page are designed to support."
          />
          <Stagger className="spotlight-grid" interval={0.08}>
            {spotlights.map((item) => (
              <article className="spotlight-card" key={item.name}>
                <div className={`spotlight-logo is-${item.tone}${"shape" in item && item.shape ? ` is-${item.shape}` : ""}`}>
                  <img src={item.logo} alt="" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {solutions.map((item) => (
        <section className={`section ${item.tone}`} id={item.id} key={item.id}>
          <div className={`container solution-block${"reverse" in item && item.reverse ? " reverse" : ""}`}>
            <div className="solution-copy">
              <FadeIn>
                <h2 className="section-title">{item.title}</h2>
                <p className="lead">{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <FadeIn direction="left">{item.visual}</FadeIn>
          </div>
        </section>
      ))}

      <section className="section band-dark">
        <div className="container">
          <SectionHeading
            title="Where Each Solution Helps"
            text="A simple view of the operational problems each SoftTell solution is designed to address. This is a capability map — not a performance claim."
          />
          <div className="matrix-wrap">
            <table className="matrix">
              <thead>
                <tr>
                  <th>Business problem</th>
                  <th>AI Auto.</th>
                  <th>Business</th>
                  <th>Assistants</th>
                  <th>Data</th>
                  <th>Digital</th>
                  <th>Custom</th>
                </tr>
              </thead>
              <tbody>
                {solutionMatrix.map((row) => (
                  <tr key={row.problem}>
                    <td>{row.problem}</td>
                    <Cell on={row.ai} />
                    <Cell on={row.business} />
                    <Cell on={row.assistants} />
                    <Cell on={row.data} />
                    <Cell on={row.digital} />
                    <Cell on={row.custom} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Find The Right Solution For Your Business"
        button="Discuss Your Project"
      />
    </PageShell>
  );
}

function Cell({ on }: { on: boolean }) {
  return (
    <td>
      <span className={on ? "dot-on" : "dot-off"} />
    </td>
  );
}
