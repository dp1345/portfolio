export interface ServiceStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  label: string; // e.g. "Problem", "Approach", "Build", "Result"
  title: string;
  copy: string;
  highlightBox?: {
    iconType?: 'question' | 'lightbulb' | 'check' | 'sparkles' | 'zap' | 'link' | 'code';
    text: string;
  };
  goalText: string;
  ctaText: string;
}

export interface ServiceData {
  id: string;
  numberStr: string; // e.g. "01 / 04"
  navTitle: string; // e.g. "01 Websites"
  title: string; // e.g. "Websites"
  badge?: string;
  description: string;
  codeStack: string[];
  noCodeStack: string[];
  themeColor: string;
  steps: ServiceStep[];
}

export const SERVICES_LIST: ServiceData[] = [
  {
    id: "websites",
    numberStr: "01 / 04",
    navTitle: "01 Websites",
    title: "Websites",
    badge: "Code-Based & No-Code",
    description: "High-converting business websites, landing pages, and web portals built with modern custom code or rapid no-code platforms.",
    codeStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    noCodeStack: ["Webflow", "Framer", "WordPress", "Shopify"],
    themeColor: "#59634B",
    steps: [
      {
        id: "problem",
        stepNumber: 1,
        totalSteps: 4,
        label: "Problem",
        title: "The problem with generic websites.",
        copy: "Most business websites are cluttered, slow, and fail to guide visitors toward a decisive next action. That means high bounce rates, wasted ad spend, and lost trust.",
        highlightBox: {
          iconType: "question",
          text: "Unclear messaging, weak layout structure, and no frictionless conversion path."
        },
        goalText: "Identify conversion leaks and eliminate visual & cognitive friction.",
        ctaText: "See how I solve this"
      },
      {
        id: "approach",
        stepNumber: 2,
        totalSteps: 4,
        label: "Approach",
        title: "Code-based or No-code: The right tool for the goal.",
        copy: "We select the optimal stack based on your timeline and scaling needs—whether bespoke React/Next.js for custom performance or Webflow/Framer for lightning-fast launch and easy visual editing.",
        highlightBox: {
          iconType: "lightbulb",
          text: "Code: React/Next.js for custom power · No-Code: Webflow/Framer for rapid agility."
        },
        goalText: "Structure information architecture and select the ideal delivery stack.",
        ctaText: "Explore the build system"
      },
      {
        id: "build",
        stepNumber: 3,
        totalSteps: 4,
        label: "Build",
        title: "Crafted for speed, clarity, and mobile perfection.",
        copy: "Every page is engineered with fluid typography, responsive layout breakpoints, SEO metadata, and sub-second load times across mobile and desktop devices.",
        highlightBox: {
          iconType: "sparkles",
          text: "100/100 Lighthouse performance, accessible UX, and zero boilerplate fluff."
        },
        goalText: "Deliver cohesive, high-conversion visual design.",
        ctaText: "Inspect live preview"
      },
      {
        id: "result",
        stepNumber: 4,
        totalSteps: 4,
        label: "Result",
        title: "A digital asset that converts traffic into clients.",
        copy: "A website that communicates your core value in under 5 seconds, addresses objections proactively, and turns casual browsers into confirmed discovery calls.",
        highlightBox: {
          iconType: "check",
          text: "+45% average lift in qualified conversions with structured design."
        },
        goalText: "Create clarity, build trust, and drive decisive visitor action.",
        ctaText: "View Website Work"
      }
    ]
  },
  {
    id: "mvp",
    numberStr: "02 / 04",
    navTitle: "02 MVP",
    title: "MVP",
    badge: "Code-Based & No-Code",
    description: "Transform an idea into a testable, revenue-ready minimum viable product in 2–4 weeks before investing heavily in full-scale builds.",
    codeStack: ["React", "Node.js", "Python", "Supabase", "PostgreSQL"],
    noCodeStack: ["Bubble", "FlutterFlow", "Glide", "Airtable"],
    themeColor: "#C98B35",
    steps: [
      {
        id: "core-idea",
        stepNumber: 1,
        totalSteps: 4,
        label: "Core Idea",
        title: "Start with the core value hypothesis.",
        copy: "Define the exact pain point, target buyer, and the single core outcome that proves the business model before writing a line of code.",
        highlightBox: {
          iconType: "question",
          text: "Feature creep kills early startups. We focus only on what proves value."
        },
        goalText: "Isolate the primary value metric before building.",
        ctaText: "See how I refine ideas"
      },
      {
        id: "cut-features",
        stepNumber: 2,
        totalSteps: 4,
        label: "Prioritize",
        title: "Code or No-Code fast-track scoping.",
        copy: "Ruthlessly trim 10+ feature requests down to the essential core MVP. Choose Bubble/Supabase for 14-day validation, or full-stack React/Node for proprietary IP.",
        highlightBox: {
          iconType: "lightbulb",
          text: "Filter: 10 ideas → 3 essential screens → 1 primary checkout/action loop."
        },
        goalText: "Eliminate secondary clutter to accelerate speed to market.",
        ctaText: "View MVP scope engine"
      },
      {
        id: "build-useful",
        stepNumber: 3,
        totalSteps: 4,
        label: "Build",
        title: "Build the smallest useful, paying version.",
        copy: "Functional application with real authentication, database models, Stripe billing integration, and real-time user event analytics.",
        highlightBox: {
          iconType: "sparkles",
          text: "Production auth, live database, automated billing, and customer feedback loop."
        },
        goalText: "Deliver a polished, testable web software prototype.",
        ctaText: "Inspect product architecture"
      },
      {
        id: "validate",
        stepNumber: 4,
        totalSteps: 4,
        label: "Validate",
        title: "Validate with real users & data before overbuilding.",
        copy: "Gather authentic user telemetry and early paying customer feedback before allocating large engineering budgets.",
        highlightBox: {
          iconType: "check",
          text: "Idea → 14-Day MVP → Real Paying Users → Data-Backed Scaling Decision."
        },
        goalText: "Make confident, data-backed decisions on product iteration.",
        ctaText: "See How I Build MVPs"
      }
    ]
  },
  {
    id: "ai-agents-automation",
    numberStr: "03 / 04",
    navTitle: "03 AI Agents & Automation",
    title: "AI Agents & Automation",
    badge: "Code-Based & No-Code",
    description: "Autonomous reasoning agents and self-healing background automation pipelines that eliminate repetitive manual work across your apps.",
    codeStack: ["LangChain", "LangGraph", "Python", "FastAPI", "OpenAI / Claude API"],
    noCodeStack: ["n8n", "Make.com", "Zapier", "Flowise"],
    themeColor: "#59634B",
    steps: [
      {
        id: "manual-work",
        stepNumber: 1,
        totalSteps: 4,
        label: "Workflow",
        title: "Identify manual operational bottlenecks.",
        copy: "Manual lead triage, cross-tool copy-pasting, document parsing, and repetitive CRM data entry cost your team 20+ hours every single week.",
        highlightBox: {
          iconType: "question",
          text: "Manual bottleneck: Inbound trigger → Multi-tab copy/paste → Human error & delay."
        },
        goalText: "Pinpoint high-friction multi-step knowledge & data tasks.",
        ctaText: "See agent capabilities"
      },
      {
        id: "system-design",
        stepNumber: 2,
        totalSteps: 4,
        label: "System",
        title: "Code-based LangGraph or No-code n8n / Make.",
        copy: "We construct reliable pipelines using custom Python/LangGraph agents for deep reasoning, or visual n8n/Make workflows for instant multi-app API synchronization.",
        highlightBox: {
          iconType: "lightbulb",
          text: "Trigger → Intelligent Agent Parser → Multi-Tool API Relay → Verified Action."
        },
        goalText: "Establish deterministic boundaries, API schemas, and fallback logic.",
        ctaText: "Examine reasoning flow"
      },
      {
        id: "autonomous-run",
        stepNumber: 3,
        totalSteps: 4,
        label: "Execution",
        title: "Autonomous execution with human oversight.",
        copy: "The system processes incoming data in real time, queries company databases, coordinates actions between tools, and logs full audit trails.",
        highlightBox: {
          iconType: "zap",
          text: "Real-time task executor, tool calling logs, self-healing webhooks, & audit trails."
        },
        goalText: "Automate cognitive routine tasks with 99.9% accuracy.",
        ctaText: "Inspect live agent state"
      },
      {
        id: "integrated-agent",
        stepNumber: 4,
        totalSteps: 4,
        label: "Result",
        title: "AI & automation running silently in the background.",
        copy: "Seamlessly operates within Slack, Gmail, CRMs, and databases—saving your team hours every day without changing their daily habits.",
        highlightBox: {
          iconType: "check",
          text: "Over 25+ hours saved weekly per team member with zero manual data entry."
        },
        goalText: "Free your team from repetitive administrative friction forever.",
        ctaText: "Explore AI & Automation Work"
      }
    ]
  },
  {
    id: "chatbots",
    numberStr: "04 / 04",
    navTitle: "04 Chatbot",
    title: "Chatbot",
    badge: "Code-Based & No-Code",
    description: "Intelligent conversational chatbots for 24/7 lead qualification, instant customer support, and automatic meeting scheduling.",
    codeStack: ["Custom RAG", "Vector DBs", "OpenAI Assistant API", "WebSockets", "Python"],
    noCodeStack: ["Voiceflow", "Botpress", "Chatbase", "n8n Chatbots"],
    themeColor: "#C98B35",
    steps: [
      {
        id: "questions",
        stepNumber: 1,
        totalSteps: 4,
        label: "Questions",
        title: "Customers have questions at all hours.",
        copy: "When answers are delayed or buried behind static pages, prospective clients leave for competitors. Static contact forms convert under 3%.",
        highlightBox: {
          iconType: "question",
          text: "Unanswered visitor inquiries result in lost inbound pipeline and missed deals."
        },
        goalText: "Engage visitors at the exact moment of peak interest.",
        ctaText: "See chatbot design"
      },
      {
        id: "answers",
        stepNumber: 2,
        totalSteps: 4,
        label: "Knowledge",
        title: "Grounded responses with Code or No-Code engines.",
        copy: "We build with custom Vector RAG engines or rapid platforms like Voiceflow & Botpress, ensuring answers are 100% accurate and strictly grounded in your documents.",
        highlightBox: {
          iconType: "lightbulb",
          text: "Zero hallucination guarantee: Strict RAG retrieval on your docs & pricing."
        },
        goalText: "Deliver trustworthy, instant business answers.",
        ctaText: "View conversation flow"
      },
      {
        id: "conversion",
        stepNumber: 3,
        totalSteps: 4,
        label: "Action",
        title: "Turn conversations into booked meetings & sales.",
        copy: "The chatbot doesn't just chat—it dynamically qualifies lead requirements, collects contact information, syncs with your CRM, and books calendar calls.",
        highlightBox: {
          iconType: "sparkles",
          text: "Visitor query → Smart triage → Qualified prospect → Meeting booked on calendar."
        },
        goalText: "Convert passive readers into confirmed discovery meetings.",
        ctaText: "Inspect live pipeline"
      },
      {
        id: "business-growth",
        stepNumber: 4,
        totalSteps: 4,
        label: "Result",
        title: "24/7 automated pipeline that scales with zero headcount.",
        copy: "A tireless digital concierge capturing high-intent prospects, answering FAQs, and accelerating sales cycles day and night.",
        highlightBox: {
          iconType: "check",
          text: "3.4x more qualified discovery calls booked directly from existing site traffic."
        },
        goalText: "Turn passive website visitors into continuous booked revenue.",
        ctaText: "Explore Chatbot Work"
      }
    ]
  }
];

