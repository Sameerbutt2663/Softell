export const heroSlides = [
  {
    image: "/images/01-Banner%204.jpg",
    title: "Build Modern Systems Through",
    accent: "Digital Transformation",
    text: "Web, mobile, and custom software experiences designed around how your business actually works.",
  },
  {
    image: "/images/01-Banner%203.jpg",
    title: "Connect Teams And Customers On",
    accent: "Salesforce",
    text: "CRM, automation, and integrations that keep records, pipelines, and follow-up in one coordinated flow.",
  },
  {
    image: "/images/01-Banner%202.jpg",
    title: "Grow Commerce With A Faster",
    accent: "Shopify Storefront",
    text: "Custom themes, apps, and store operations built for merchandising, speed, and conversion.",
  },
  {
    image: "/images/01-Banner%201.jpg",
    title: "Put Intelligence To Work With",
    accent: "Generative AI",
    text: "Copilots, search, and support experiences grounded in your data — useful from the first day, not just the demo.",
  },
] as const;

export const pageBanners = {
  about: "/images/01-About%20us%20Banner.jpg",
  services: "/images/01-Services%20Banner.jpg",
  solutions: "/images/01-Solutions%20banner.jpg",
  contact: "/images/01-Contact%20page%20banner.jpg",
} as const;

export const brand = {
  name: "SoftTell",
  tagline: "Intelligent Technology. Smarter Business.",
} as const;

export const contact = {
  email: "hello@your-domain.com",
  phone: "+1 (000) 000-0000",
  location: "Add your location",
  hours: "Monday–Friday · Add your hours",
  formEndpoint: "",
};

export const social = {
  linkedin: "#",
};

export const nav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions" },
  { label: "Contact", path: "/contact" },
] as const;

export const seo = {
  home: {
    title: "SoftTell | Intelligent Technology & Business Automation",
    description:
      "SoftTell helps businesses automate repetitive work, streamline operations, and build smarter digital experiences with modern technology and AI.",
  },
  about: {
    title: "About SoftTell | Intelligent Technology",
    description:
      "SoftTell is a technology company focused on helping businesses use automation, AI, and software to improve everyday operations.",
  },
  services: {
    title: "SoftTell Services | AI, Automation & Software",
    description:
      "Explore SoftTell services including digital transformation, Shopify, Gen AI, data engineering, SaaS, and custom software.",
  },
  solutions: {
    title: "SoftTell Solutions | Intelligent Business Technology",
    description:
      "SoftTell combines software, automation, AI, and data into connected business systems that move operations forward.",
  },
  contact: {
    title: "Contact SoftTell | Build Smarter Technology",
    description:
      "Tell SoftTell what you want to automate, improve, or build. Start a conversation about intelligent technology for your business.",
  },
} as const;

export const serviceOptions = [
  "Web Development",
  "App Development",
  "Custom Software Development",
  "UI/UX Design",
  "Shopify",
  "Gen AI",
  "Data Analytics",
  "Data Engineering",
  "SaaS",
  "AI Automation",
  "Not sure yet",
] as const;

export const serviceGroups = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modern web, mobile, and custom software experiences built with scalable architecture and user-centered design.",
    items: [
      {
        title: "Web Development",
        description: "Responsive, high-performance websites and web apps tailored to your brand and business goals.",
        details: [
          "React, Next.js, and modern frontend stacks",
          "SEO-ready architecture and fast page loads",
        ],
      },
      {
        title: "App Development",
        description: "Native and cross-platform mobile applications with smooth UX and reliable backend integration.",
        details: [
          "iOS, Android, and cross-platform builds",
          "Offline-first and push notification support",
        ],
      },
      {
        title: "Custom Software Development",
        description: "Bespoke platforms and internal tools engineered around your workflows, data, and compliance needs.",
        details: [
          "Discovery workshops and technical roadmaps",
          "Modular microservices or monolith architectures",
        ],
      },
      {
        title: "UI/UX Design",
        description: "Research-driven interfaces that reduce friction, improve conversion, and strengthen brand trust.",
        details: [
          "User research, personas, and journey mapping",
          "Wireframes, prototypes, and design systems",
        ],
      },
    ],
  },
  {
    id: "shopify",
    title: "Shopify",
    description:
      "Full-funnel Shopify expertise — from storefront design to custom apps, integrations, and long-term store operations.",
    items: [
      {
        title: "Design & Development",
        description: "Custom Shopify themes and storefronts optimized for speed, merchandising, and conversion.",
        details: [
          "Custom theme design and Liquid development",
          "Headless Shopify and Hydrogen options",
        ],
      },
      {
        title: "Maintenance & Support",
        description: "Proactive monitoring, updates, and fixes so your store stays secure, fast, and revenue-ready.",
        details: [
          "Theme updates and compatibility patches",
          "Performance audits and Core Web Vitals tuning",
        ],
      },
      {
        title: "Custom Apps & Integrations",
        description: "Custom Shopify apps and integrations that connect inventory, fulfillment, marketing, and back-office systems.",
        details: [
          "Custom private and public Shopify apps",
          "Inventory, order, and fulfillment sync",
        ],
      },
    ],
  },
  {
    id: "emerging-technologies",
    title: "Emerging Technologies",
    description:
      "Generative AI and analytics capabilities that turn data into decisions and power smarter digital products.",
    items: [
      {
        title: "Gen AI",
        description: "Generative AI solutions for support, content, search, and internal copilots grounded in your data.",
        details: [
          "RAG pipelines and enterprise knowledge bases",
          "Copilots and assistants built on your data",
        ],
      },
      {
        title: "Data Analytics",
        description: "Dashboards, pipelines, and insights that unify scattered data into actionable business intelligence.",
        details: [
          "Real-time dashboards and KPI tracking",
          "Self-serve reporting for stakeholders",
        ],
      },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Reliable data pipelines, warehouses, and platforms that unify sources, improve quality, and power analytics and AI.",
    items: [
      {
        title: "Data Engineering",
        description: "End-to-end data platform engineering — ingestion, transformation, warehousing, and orchestration at scale.",
        details: [
          "ETL/ELT pipelines and batch or streaming ingestion",
          "Cloud warehouses (Snowflake, BigQuery, Redshift)",
        ],
      },
    ],
  },
  {
    id: "saas",
    title: "SaaS",
    description:
      "Multi-tenant SaaS products from MVP to scale — billing, auth, onboarding, and platform operations.",
    items: [
      {
        title: "SaaS",
        description: "End-to-end SaaS product engineering with subscription billing, tenant isolation, and growth-ready architecture.",
        details: [
          "Subscription billing and usage metering",
          "Tenant isolation and role-based access",
        ],
      },
    ],
  },
] as const;

export const homeServices = [
  {
    title: "Web Development",
    description: "Responsive websites and web apps built for speed, SEO, and your brand.",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps with reliable backend integration.",
  },
  {
    title: "Custom Software",
    description: "Platforms and internal tools engineered around your workflows and data.",
  },
  {
    title: "UI/UX Design",
    description: "Research-driven interfaces that reduce friction and improve conversion.",
  },
  {
    title: "Shopify",
    description: "Storefronts, custom apps, and long-term operations for commerce teams.",
  },
  {
    title: "Gen AI",
    description: "Copilots, search, and support experiences grounded in your business data.",
  },
  {
    title: "Data Engineering",
    description: "Pipelines, warehouses, and platforms that keep analytics and AI reliable.",
  },
  {
    title: "SaaS",
    description: "Multi-tenant products with billing, auth, onboarding, and room to scale.",
  },
] as const;

export const values = [
  {
    title: "Faster Operations",
    description: "Remove friction from everyday work so teams can spend time on judgment, not repetition.",
  },
  {
    title: "Intelligent Automation",
    description: "Automate with context, not just triggers — so systems can respond to real business conditions.",
  },
  {
    title: "Scalable Technology",
    description: "Architectures designed to grow with new workflows, users, and data without starting over.",
  },
  {
    title: "Better Customer Experiences",
    description: "Faster responses, clearer journeys, and fewer dropped handoffs across every channel.",
  },
  {
    title: "Data-Driven Workflows",
    description: "Turn scattered information into structured inputs that software and people can actually use.",
  },
  {
    title: "Secure Architecture",
    description: "Thoughtful access, reliable integrations, and systems designed with care from the start.",
  },
] as const;

export const services = [
  {
    title: "AI Automation",
    description: "Intelligent workflows that reduce repetitive work and keep operations moving with context-aware logic.",
  },
  {
    title: "Automated Callers",
    description: "Automated voice-based communication and follow-up workflows that stay consistent at scale.",
  },
  {
    title: "Automated Emails",
    description: "Personalized automated communication sequences for outreach, onboarding, and operational updates.",
  },
  {
    title: "Chatbots",
    description: "Conversational AI for customer and internal support, grounded in your knowledge and processes.",
  },
  {
    title: "Data Collection",
    description: "Collect information from multiple sources and bring it into one usable operational picture.",
  },
  {
    title: "Data Entry",
    description: "Convert documents and information into structured data your systems and teams can work with.",
  },
  {
    title: "Data Cleaning & Transformation",
    description: "Standardize, enrich, and prepare business data so it is ready for automation and analysis.",
  },
  {
    title: "CRM Automation",
    description: "Connect customer workflows and CRM processes so records, tasks, and follow-ups stay in sync.",
  },
  {
    title: "Quote & Invoice Automation",
    description: "Automate quoting and invoicing workflows to reduce delays and keep financial operations tidy.",
  },
  {
    title: "Web Development",
    description: "Build modern responsive web experiences that present your brand with speed and clarity.",
  },
  {
    title: "Custom Software",
    description: "Create software around specific business requirements instead of forcing generic tools to fit.",
  },
  {
    title: "API Integrations",
    description: "Connect existing systems and services so information and actions can move without manual copying.",
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive processes across departments with clear ownership, checks, and visibility.",
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive, conversion-focused experiences that make complex systems feel simple to use.",
  },
] as const;

export const processSteps = [
  { n: "01", title: "Discover", text: "Understand the work, the friction, and the outcome that actually matters." },
  { n: "02", title: "Plan", text: "Map systems, data, and people into a practical delivery path." },
  { n: "03", title: "Design", text: "Shape the experience and architecture around real operational use." },
  { n: "04", title: "Build", text: "Develop reliable software with room to grow and change." },
  { n: "05", title: "Integrate", text: "Connect tools, data, and workflows into one coordinated system." },
  { n: "06", title: "Optimize", text: "Refine the flow as teams use it and new needs appear." },
] as const;

export const principles = [
  {
    title: "Understand",
    text: "Start with the actual business problem — the work, the people, and the outcome that matters.",
  },
  {
    title: "Design",
    text: "Design a practical technology solution that fits the operation instead of adding another layer of complexity.",
  },
  {
    title: "Build",
    text: "Develop reliable, scalable software with clear structure, thoughtful integrations, and room to grow.",
  },
  {
    title: "Improve",
    text: "Continuously optimize workflows as teams use the system and the business evolves.",
  },
] as const;

export const beliefs = [
  "Technology should simplify complexity.",
  "Automation should empower people.",
  "Software should solve real problems.",
  "Great experiences should feel effortless.",
] as const;

export const demoMarks = [
  "Northline Ops",
  "Harbor & Co.",
  "Lumen Path",
  "Fieldnote",
  "Aether Labs",
  "Cedarstack",
] as const;

export const testimonials = [
  {
    quote:
      "SoftTell mapped how we actually work before writing a line of software. The result felt like a system built around our team, not a tool we had to squeeze into.",
    name: "Alex Foster",
    role: "Purchasing Director",
    website: "dtsupply.us",
  },
  {
    quote:
      "Our storefront finally matches the brand. Pages load quickly, merchandising is easier, and the admin side no longer fights the customer experience.",
    name: "Emily Carter",
    role: "Purchasing Manager",
    website: "sunsynchardware.com",
  },
  {
    quote:
      "The assistant sits on our own knowledge, so support can answer with context instead of guessing. It is useful on day one, not a demo that fades after launch.",
    name: "Hussain Abbas",
    role: "Product Owner",
    website: "araaf.us",
  },
] as const;

export const pricingPlans = [
  {
    name: "Engagement",
    price: "Custom",
    cadence: "scoped to the work",
    description:
      "Every engagement is designed around your product, operations, and timeline — from a focused first release to a long-term platform partnership.",
    features: [
      "Discovery workshop and technical roadmap",
      "Web, mobile, Shopify, or custom platforms",
      "Integrations, data pipelines, and AI copilots",
      "Dedicated engineering and ongoing support",
    ],
    cta: "Book A Consult",
    featured: true,
  },
] as const;

export const solutionMatrix = [
  {
    problem: "Repetitive manual work",
    ai: true,
    business: true,
    assistants: true,
    data: false,
    digital: false,
    custom: true,
  },
  {
    problem: "Disconnected tools",
    ai: false,
    business: true,
    assistants: false,
    data: true,
    digital: false,
    custom: true,
  },
  {
    problem: "Slow customer response",
    ai: true,
    business: true,
    assistants: true,
    data: false,
    digital: true,
    custom: false,
  },
  {
    problem: "Unstructured information",
    ai: true,
    business: false,
    assistants: true,
    data: true,
    digital: false,
    custom: true,
  },
  {
    problem: "Inconsistent processes",
    ai: true,
    business: true,
    assistants: false,
    data: true,
    digital: false,
    custom: true,
  },
  {
    problem: "Dated digital presence",
    ai: false,
    business: false,
    assistants: false,
    data: false,
    digital: true,
    custom: true,
  },
] as const;
