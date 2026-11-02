/**
 * CRESCENDO APEX - MASTER CONTENT FILE
 * 
 * All site copy, verified credentials, service topics, and contact information
 * live here. Editing this file updates all matching sections across the site.
 * 
 * NOTE TO CLIENT:
 * - Update email, phone, or LinkedIn links as needed.
 * - Items left as empty strings (e.g. phone, twitter) will automatically hide from the UI.
 * - Testimonials and Career Highlights will automatically render when items are added to their arrays.
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization?: string;
}

export interface MediaKitDownload {
  label: string;
  fileUrl: string;
  fileSize?: string;
}

export const siteContent = {
  brand: {
    name: "CRESCENDO APEX",
    shortName: "Crescendo Apex",
    founder: "Shomari White",
    founderTitle: "Executive Consulting, Speaking & Authorship",
    tagline: "Leadership. Strategy. Impact.",
    eyebrow: "LEADERSHIP. STRATEGY. IMPACT.",
    heroEyebrowDark: "NONPROFITS & HIGHER EDUCATION",
    missionStatement: "To help organizations build stronger systems, develop great leaders, and create lasting impact.",
  },

  contact: {
    email: "shomari@crescendoapex.co",
    phone: "", // Left empty per instructions. If provided in the future, it will display.
    linkedin: "https://www.linkedin.com/in/shomariwhite/",
    twitter: "", // Left empty per instructions. Will hide in UI when empty.
    location: "Available for travel.",
  },

  verifiedCredentials: [
    {
      id: "aasp",
      title: "Former President",
      organization: "Association of Advancement Services Professionals",
      years: "(2018 – 2020)",
      description: "Led the premier professional organization dedicated to advancement services and philanthropic operations.",
    },
    {
      id: "nahse",
      title: "Former Treasurer",
      organization: "National Association of Health Services Executives",
      years: "",
      description: "Provided executive financial oversight and governance for health services leaders nationwide.",
    },
    {
      id: "100bm",
      title: "Former Board Member & Fundraising Chair",
      organization: "100 Black Men of Prince George's County",
      years: "",
      description: "Chaired major fundraising campaigns and youth mentoring initiatives advancing community impact.",
    },
  ],

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Shomari", href: "/about" },
    { label: "Consulting", href: "/consulting" },
    { label: "Speaking", href: "/speaking" },
    { label: "Nonprofit Crescendo", href: "/nonprofit-crescendo" },
    { label: "Contact", href: "/contact" },
  ],

  headerButtons: {
    primary: { label: "Discuss an Engagement", href: "/contact" },
    secondary: { label: "Invite Shomari to Speak", href: "/speaking#request" },
  },

  home: {
    hero: {
      eyebrow: "LEADERSHIP. STRATEGY. IMPACT.",
      h1: "Elevating the People and Systems Behind Lasting Impact.",
      subtext: "Executive leadership, organizational strategy and speaking grounded in the realities of nonprofit and higher education advancement.",
      ctaPrimary: { label: "Discuss an Engagement", href: "/contact" },
      ctaSecondary: { label: "Invite Shomari to Speak", href: "/speaking#request" },
      portraitAlt: "Shomari White, founder and executive consultant at Crescendo Apex",
    },

    leadershipSection: {
      heading: "Leadership That Strengthens Mission",
      intro: "Strategic consulting, leadership development and speaking for organizations committed to greater impact.",
      cards: [
        {
          id: "exec-strategy",
          title: "Executive & Organizational Strategy",
          description: "Aligning people, processes and strategy for sustainable growth and greater impact.",
          href: "/consulting",
        },
        {
          id: "advancement-ops",
          title: "Advancement Operations & Effectiveness",
          description: "Building efficient, donor-centered operations that drive results.",
          href: "/consulting",
        },
        {
          id: "leadership-dev",
          title: "Leadership Development & Team Alignment",
          description: "Growing strong teams and future-ready leaders.",
          href: "/consulting",
        },
        {
          id: "speaking-thought",
          title: "Speaking & Thought Leadership",
          description: "Inspiring action and fresh perspectives for lasting change.",
          href: "/speaking",
        },
      ],
    },

    impactSection: {
      eyebrow: "NONPROFITS & HIGHER EDUCATION",
      h2: "Greater Impact Through Stronger Organizations",
      text: "From donor engagement to operational excellence, I help mission-driven organizations build the systems, people and culture needed for long-term success.",
      cta: { label: "Explore My Approach", href: "/consulting" },
      cards: [
        {
          title: "Donor Stewardship",
          description: "Build lasting relationships and increase philanthropic support.",
          image: "/images/meeting-collab.jpg",
          alt: "Collaborative advancement team planning donor stewardship",
        },
        {
          title: "Engagement Strategy",
          description: "Deepen constituent connections and community involvement.",
          image: "/images/community-event.jpg",
          alt: "Community engagement and leadership gathering",
        },
        {
          title: "Operational Excellence",
          description: "Streamline systems for better performance and sustainability.",
          image: "/images/workshop.jpg",
          alt: "Interactive operations workshop and team alignment",
        },
        {
          title: "Organizational Culture",
          description: "Cultivate environments where people and missions thrive.",
          image: "/images/candid-1.jpg",
          alt: "Executive leadership fostering vibrant organization culture",
        },
      ],
    },

    howWeWork: {
      heading: "How We Work Together",
      subheading: "A proven, disciplined framework tailored to mission-driven organizations.",
      steps: [
        {
          number: "1",
          title: "Listen & Assess",
          description: "Understand your mission, people and current systems.",
        },
        {
          number: "2",
          title: "Align & Plan",
          description: "Turn goals into a clear, practical roadmap.",
        },
        {
          number: "3",
          title: "Build & Equip",
          description: "Strengthen processes, leaders and teams.",
        },
        {
          number: "4",
          title: "Sustain & Measure",
          description: "Embed what works and track real progress.",
        },
      ],
    },

    perspectiveSection: {
      heading: "Perspective & Experience",
      sub: "A career built on leadership, service and a commitment to advancing what matters.",
      text: "With extensive experience in nonprofit leadership and advancement operations, Shomari White brings a unique blend of strategic insight, operational expertise and people-centered leadership. He has served in executive roles, led professional associations, and contributed to boards focused on community and advancement.",
      cta: { label: "Learn More About Shomari", href: "/about" },
      image: "/images/perspective-portrait.jpg",
      items: [
        { title: "Chief Operating Officer Experience", icon: "briefcase" },
        { title: "Nonprofit Leadership & Advancement Operations", icon: "building" },
        { title: "Association Leadership (2018-2020)", icon: "award" },
        { title: "Governance & Board Service", icon: "shield" },
        { title: "Philanthropy, Donor Relations & Stewardship", icon: "heart-handshake" },
        { title: "Team Culture & Leadership Development", icon: "users" },
      ],
    },

    speakingStrip: {
      headline: "Inspiration. Insight. Action.",
      subtext: "Dynamic keynotes and interactive workshops tailored to nonprofit, advancement, and educational leadership.",
      cta: { label: "Invite Shomari to Speak", href: "/speaking#request" },
      bgImage: "/images/speaking-stage.jpg",
    },

    preFooter: {
      bookSection: {
        badge: "Upcoming Book",
        title: "Nonprofit Crescendo",
        subtitle: "Building Stronger Organizations for a Brighter Future",
        description: "A practical and inspiring guide for nonprofit leaders who want to build resilient teams, develop strong systems, and create a greater impact.",
        cta: { label: "Explore the Book", href: "/nonprofit-crescendo" },
      },
      ctaSection: {
        title: "Let's Create Lasting Impact",
        description: "Whether you're planning a strategic initiative, need a dynamic speaker, or want to learn more about the book, I'd love to connect.",
        cta: { label: "Discuss an Engagement", href: "/contact" },
      },
    },
  },

  about: {
    hero: {
      h1: "About Shomari White",
      sub: "Leader. Strategist. Advocate for Greater Impact.",
      text: "I bring a deep commitment to mission-driven work, with a career shaped by leadership in nonprofit, operational excellence and team development. My work is rooted in the belief that stronger organizations create stronger communities.",
      image: "/images/about-portrait.jpg",
    },
    background: {
      heading: "Professional Background",
      paragraph1: "Throughout his career in nonprofit executive leadership and higher education advancement, Shomari White has focused on the essential intersection between people, processes, and philanthropic impact.",
      paragraph2: "Having led national professional associations, overseen complex organizational operations, and served on community and healthcare boards, Shomari pairs practical operating discipline with an unwavering belief in human potential.",
    },
    // Career Highlights list: client can add items here; renders only if not empty
    careerHighlights: [] as string[],
    philosophy: {
      heading: "Leadership Philosophy",
      subheading: "Three core principles guide every engagement, consultation, and keynote presentation.",
      pillars: [
        {
          title: "People First",
          description: "Strong organizations begin with strong, supported teams.",
          badge: "01",
        },
        {
          title: "Systems That Scale",
          description: "Operations built to serve the mission, not slow it down.",
          badge: "02",
        },
        {
          title: "Impact That Lasts",
          description: "Strategy that outlives any single initiative.",
          badge: "03",
        },
      ],
    },
    gallery: [
      { image: "/images/candid-2.jpg", alt: "Executive leadership collaboration", caption: "Leadership Excellence" },
      { image: "/images/community-event.jpg", alt: "Community engagement dinner", caption: "Community Connection" },
      { image: "/images/workshop.jpg", alt: "Team alignment workshop", caption: "Team Culture" },
      { image: "/images/meeting-collab.jpg", alt: "Advancement team assembly", caption: "Advancement Community" },
    ],
    missionBand: {
      label: "Mission",
      statement: "To help organizations build stronger systems, develop great leaders, and create lasting impact.",
    },
    ctaBand: {
      title: "Let's Connect",
      text: "Ready to elevate your team, optimize operations, or bring inspiring perspective to your next event?",
      primaryBtn: { label: "Discuss an Engagement", href: "/contact" },
      secondaryBtn: { label: "Invite Shomari to Speak", href: "/speaking#request" },
    },
  },

  consulting: {
    hero: {
      h1: "Executive Consulting",
      sub: "Strategy. Structure. Sustainable Impact.",
      text: "I partner with mission-driven organizations to strengthen leadership, improve operations and build the systems needed for long-term success.",
    },
    services: [
      {
        id: "strategy-planning",
        title: "Strategy & Planning",
        description: "Develop clear direction and actionable plans for growth and impact.",
        details: "Facilitating strategic roadmaps that connect executive vision with day-to-day team execution.",
        icon: "compass",
      },
      {
        id: "advancement-operations",
        title: "Advancement Operations",
        description: "Optimize processes and systems to increase efficiency and engagement.",
        details: "Refining data infrastructure, gift administration, donor stewardship, and constituent pipelines.",
        icon: "settings",
      },
      {
        id: "leadership-development",
        title: "Leadership Development",
        description: "Build confident, capable leaders and high-performing teams.",
        details: "Executive coaching, team alignment workshops, and leadership transition planning.",
        icon: "users",
      },
      {
        id: "organizational-effectiveness",
        title: "Organizational Effectiveness",
        description: "Strengthen culture, governance and operational performance.",
        details: "Eliminating silos, streamlining decision frameworks, and fostering cultures of accountability.",
        icon: "shield-check",
      },
    ],
    whoIWorkWith: [
      { title: "Nonprofits", description: "Mission-focused organizations seeking operational sustainability and donor growth." },
      { title: "Higher Education Institutions", description: "Colleges and universities modernizing advancement operations and alumni engagement." },
      { title: "Professional Associations", description: "Membership organizations looking to expand constituent reach and board effectiveness." },
      { title: "Mission-Driven Foundations", description: "Philanthropic entities structuring efficient grantmaking and stewardship systems." },
    ],
    waysToEngage: [
      "Strategic planning and retreats",
      "Advancement operations review",
      "Leadership and team development",
      "Board and governance support",
    ],
    faqs: [
      {
        question: "What types of organizations do you work with?",
        answer: "I work primarily with nonprofits, colleges and universities, foundations, and professional associations committed to strengthening their mission and operations.",
      },
      {
        question: "How does an engagement begin?",
        answer: "Every engagement begins with an introductory discovery conversation to understand your organization's specific challenges, goals, and timeline.",
      },
      {
        question: "Do you work virtually or in person?",
        answer: "Both. I conduct strategic retreats, workshops, and on-site assessments in person, complemented by virtual advisory sessions and team working meetings.",
      },
      {
        question: "Can you work with our existing team and systems?",
        answer: "Yes. My approach focuses on enhancing and empowering your existing team, refining existing workflows, and building lasting internal capacity.",
      },
      {
        question: "How do we get started?",
        answer: "Simply submit an inquiry via the form below or on the contact page. We will schedule a 30-minute consultation to discuss your needs.",
      },
    ],
    ctaBand: {
      title: "Let's Build What's Next",
      text: "Share your goals and challenges, and let's explore how I can help your organization grow.",
      buttonLabel: "Discuss an Engagement",
    },
  },

  speaking: {
    hero: {
      h1: "Speaking Engagements",
      sub: "Inspiration. Insight. Action.",
      text: "I speak to inspire, challenge and equip audiences with practical insights on leadership, teamwork and organizational impact.",
      image: "/images/speaking-stage.jpg",
    },
    topics: [
      {
        title: "Building High-Performing Advancement Teams",
        description: "Create alignment, accountability and momentum.",
        icon: "users-round",
      },
      {
        title: "Turning Engagement Into Action",
        description: "Use data and human connection to strengthen relationships.",
        icon: "zap",
      },
      {
        title: "Operational Excellence with a Human Lens",
        description: "Improve systems without losing sight of your people.",
        icon: "heart-handshake",
      },
      {
        title: "Leadership, Culture & Capacity",
        description: "Build the conditions for sustainable success.",
        icon: "award",
      },
    ],
    formats: [
      { title: "Keynote", desc: "Inspiring plenary sessions that set an energized tone for national and regional gatherings." },
      { title: "Workshop", desc: "Deep-dive, interactive sessions designed for leadership teams and professional cohorts." },
      { title: "Panel or Fireside Chat", desc: "Thought-provoking discussions on advancement trends, equity, and operational excellence." },
      { title: "Virtual Session", desc: "Engaging remote keynotes and webinar experiences for distributed teams." },
    ],
    idealAudiences: [
      "Conferences and associations",
      "Higher education and advancement teams",
      "Nonprofit leaders and boards",
    ],
    mediaKit: {
      shortBio: "Shomari White is an executive consultant, speaker, and former President of the Association of Advancement Services Professionals (2018-2020). He partners with mission-driven organizations and higher education institutions to build scalable systems, resilient teams, and enduring philanthropic impact.",
      // Client can add actual download URLs when available. If empty, the buttons will not render.
      downloads: [] as MediaKitDownload[],
    },
    ctaBand: {
      title: "Book Shomari for Your Next Event",
      text: "Bring practical insights, real-world experience and inspiration to your audience.",
      cta: { label: "Invite Shomari to Speak", href: "#request" },
    },
  },

  book: {
    badge: "Coming Soon",
    title: "Nonprofit Crescendo",
    subtitle: "Building Stronger Organizations for a Brighter Future",
    description: "An upcoming book designed to equip nonprofit and mission-driven leaders with practical strategies, fresh perspectives and inspiring guidance for building greater impact.",
    cta: { label: "Explore the Book", href: "#notify" },
    whatYoullDiscover: [
      "Real-world leadership insights",
      "Strategies for stronger organizations",
      "Tools for building resilient teams",
      "A vision for a more equitable future",
    ],
    whoItsFor: [
      "Nonprofit executives",
      "Advancement and development leaders",
      "Board members",
      "Emerging leaders",
    ],
    authorBox: {
      heading: "About the Author",
      text: "Shomari White brings decades of leadership in advancement operations, association governance, and organizational strategy. As former President of AASP and an executive leader, his work empowers mission-driven organizations to create enduring impact.",
      image: "/images/perspective-portrait.jpg",
      link: { label: "Learn more about Shomari", href: "/about" },
    },
    speakingCta: {
      title: "Invite Shomari to Speak About the Book",
      text: "Bring key concepts, actionable frameworks, and inspiring stories from Nonprofit Crescendo to your organization or conference.",
      buttonLabel: "Invite Shomari to Speak",
      href: "/speaking#request",
    },
  },

  contactPage: {
    hero: {
      h1: "Let's Connect",
      sub: "Discuss an Engagement or Ask a Question",
      text: "I'd love to hear from you. Whether you're interested in consulting, speaking, or the book, please reach out using the form below.",
    },
    engagementTypes: [
      "Executive Consulting",
      "Keynote or Speaking",
      "Leadership Development",
      "Board or Advisory",
      "Book or Media",
      "Other",
    ],
    quickLinks: [
      {
        title: "Executive Consulting",
        description: "Strategy, advancement operations, and organizational effectiveness.",
        href: "/consulting",
      },
      {
        title: "Speaking Engagements",
        description: "Inspiring keynotes and interactive workshops for your event.",
        href: "/speaking",
      },
      {
        title: "Nonprofit Crescendo",
        description: "Explore the upcoming book and join the launch list.",
        href: "/nonprofit-crescendo",
      },
    ],
  },

  // Testimonials: Renders ONLY when this array has items. Shipped empty per prompt requirements.
  testimonials: [] as Testimonial[],

  privacy: {
    title: "Privacy Policy",
    lastUpdated: "November 2026",
    sections: [
      {
        heading: "1. Overview & Commitment",
        content: "Crescendo Apex ('we', 'us', or 'our') respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect when you visit crescendoapex.co or contact us, and how we handle that information.",
      },
      {
        heading: "2. Information We Collect",
        content: "When you submit an inquiry form (such as the Contact Form, Speaking Request Form, or Book Notification Form), we collect the information you voluntarily provide: your name, organization, email address, phone number, and message contents. We also employ automated bot detection (honeypot fields) to prevent spam.",
      },
      {
        heading: "3. How We Use Your Information",
        content: "We use your submitted information solely to respond to your specific inquiry, coordinate consulting or speaking engagements, and send updates regarding the upcoming book 'Nonprofit Crescendo' if you opt-in. We do not sell, rent, or trade your personal information to third parties.",
      },
      {
        heading: "4. Cookies & Analytics",
        content: "This website does not use tracking cookies, behavioral tracking scripts, or invasive third-party ad networks. We value clean, privacy-respecting user experiences.",
      },
      {
        heading: "5. Contact Us",
        content: "If you have any questions or requests regarding your personal information, please reach out to us at shomari@crescendoapex.co.",
      },
    ],
  },
};
