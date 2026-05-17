export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  authorTitle: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-for-customs-brokers-india",
    title: "AI for Customs Brokers: How Indian CHAs Are Automating Document Processing in 2026",
    description: "How Indian customs house agents are using AI to automate Bill of Entry processing, commercial invoice parsing, and HSN code validation at ports like Nhava Sheva and JNPT.",
    date: "2026-05-10",
    readTime: "9 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["AI for customs brokers", "AI for customs", "customs broker automation India"],
  },
  {
    slug: "automate-bill-of-entry-processing-india",
    title: "How to Automate Bill of Entry Processing: A Complete Guide for Indian Customs Agents",
    description: "Step-by-step guide to automating BOE preparation in India — from commercial invoice parsing to ICEGATE filing, with error prevention and compliance validation.",
    date: "2026-05-08",
    readTime: "11 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["BOE automation", "Bill of Entry automation India", "automate Bill of Entry"],
  },
  {
    slug: "ai-for-freight-forwarding-india",
    title: "AI for Freight Forwarding: Automating RFQs, Documentation, and Tracking in Indian Logistics",
    description: "How AI automates freight forwarding operations in India — from RFQ processing and packing list parsing to shipment tracking and client communication.",
    date: "2026-05-06",
    readTime: "10 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["AI for freight forwarding", "AI for freight forwarders", "freight forwarding automation India"],
  },
  {
    slug: "ai-for-customs-clearance-india",
    title: "AI for Customs Clearance: Complete Guide to Automating Import Clearance in India",
    description: "How AI automates the 9-step Indian customs clearance workflow — from IGM filing to Out of Charge, covering ICEGATE, RMS channels, and port-specific operations.",
    date: "2026-05-05",
    readTime: "12 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["AI for customs clearance", "customs clearance automation India", "ICEGATE automation"],
  },
  {
    slug: "manual-entry-trap-logistics-india",
    title: "The Manual Entry Trap: Why Indian Logistics Firms Stop Growing at 50 Shipments a Month",
    description: "Why manual data entry creates a growth ceiling for Indian logistics firms — the cost of errors, the headcount trap, and the ROI of automation.",
    date: "2026-05-04",
    readTime: "8 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["logistics automation India", "customs documentation software", "freight forwarding software India"],
  },
  {
    slug: "hsn-code-classification-ai-india",
    title: "HSN Code Classification: How AI Prevents Costly Customs Errors in India",
    description: "How HSN misclassification causes customs queries and penalties at Indian ports, and how AI-based validation prevents errors in the 8-digit Indian tariff system.",
    date: "2026-05-03",
    readTime: "10 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["HSN code classification India", "customs tariff automation", "HSN validation AI"],
  },
  {
    slug: "icegate-filing-automation",
    title: "ICEGATE Filing Automation: Eliminating Manual Bottlenecks in Indian Customs EDI",
    description: "How automation eliminates the 5 manual bottlenecks in ICEGATE Bill of Entry filing — from data entry to ERP integration for Softlink, Logi-Sys, and SAP.",
    date: "2026-05-02",
    readTime: "10 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["ICEGATE filing automation", "ICEGATE BOE filing", "customs EDI automation India"],
  },
  {
    slug: "custom-house-agent-software-india",
    title: "Custom House Agent Software: What to Look for and What to Avoid in 2026",
    description: "A buyer's guide to CHA software in India — comparing off-the-shelf tools vs custom-built systems, key features, red flags, and questions to ask vendors.",
    date: "2026-05-01",
    readTime: "10 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["custom house agent software", "CHA software India", "customs agent automation tools"],
  },
  {
    slug: "logistics-automation-roi-calculator",
    title: "Logistics Automation ROI: The Complete Framework for Indian Customs and Freight Operations",
    description: "How to calculate the true ROI of logistics automation — direct labor savings, error cost elimination, capacity expansion, and client retention value for Indian CHAs.",
    date: "2026-04-28",
    readTime: "11 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["logistics automation ROI", "customs automation cost India", "freight forwarding automation ROI"],
  },
  {
    slug: "nhava-sheva-jnpt-customs-automation",
    title: "Nhava Sheva JNPT Customs Automation: A Port-Specific Guide for CHAs",
    description: "JNPT-specific guide to customs automation — free-time windows, CFS coordination, LCL splitting, RMS scrutiny, and detention cost analysis for India's busiest port.",
    date: "2026-04-25",
    readTime: "11 min read",
    author: "Gaarth Godbole",
    authorTitle: "Co-Founder & CEO, StrideShip",
    keywords: ["Nhava Sheva customs automation", "JNPT customs clearance", "Nhava Sheva CHA software"],
  },
];
