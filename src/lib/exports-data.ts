export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  whyIndia: string;
  targetMarkets: string[];
  hsCodes?: string[];
  featured?: boolean;
}

export interface ProofItem {
  id: string;
  title: string;
  category: "factory" | "loading" | "certification" | "event" | "media";
  description: string;
  locationOrDate: string;
  badge: string;
  imageUrl?: string;
}

export interface CertificationItem {
  name: string;
  authority: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  countryOrCity: string;
  type: "manufacturer" | "buyer";
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "cat-1",
    title: "Superfoods & Health Ingredients",
    slug: "superfoods-health-ingredients",
    description:
      "Nutrient-dense botanical powders, extract concentrates, and organic health supplements processed under strict international food safety protocols.",
    whyIndia:
      "India commands over 70% of global organic moringa and turmeric cultivation with direct farm-to-extract supply chains.",
    targetMarkets: ["United States", "European Union", "UAE & GCC", "Japan"],
    hsCodes: ["1211.90", "0910.30"],
    featured: true,
  },
  {
    id: "cat-2",
    title: "Spices & Agri Exports",
    slug: "spices-agri-exports",
    description:
      "Whole and ground single-origin spices, oilseeds, and processed herbal products adhering to ASTA and European Spice Association standards.",
    whyIndia:
      "World's largest spice producer with high volatile oil retention varieties and dedicated APEDA-certified agri-export zones.",
    targetMarkets: ["North America", "Middle East", "United Kingdom", "ASEAN"],
    hsCodes: ["0904.22", "0909.31"],
    featured: true,
  },
  {
    id: "cat-3",
    title: "Essential Oils & Natural Extracts",
    slug: "essential-oils-natural-extracts",
    description:
      "Steam-distilled pure essential oils, oleoresins, and cold-pressed carrier oils for aromatherapy, cosmetics, and nutraceutical compounding.",
    whyIndia:
      "Century-old botanical distillation heritage paired with modern GC-MS analytical quality testing facilities.",
    targetMarkets: ["EU (France, Germany)", "USA", "South Korea", "Australia"],
    hsCodes: ["3301.29", "1302.19"],
    featured: true,
  },
  {
    id: "cat-4",
    title: "Natural Sweeteners",
    slug: "natural-sweeteners",
    description:
      "Unrefined jaggery powder, low-GI coconut blossom sugar, and high-purity stevia leaf extracts for clean-label food and beverage brands.",
    whyIndia:
      "Abundant non-GMO sugarcane and coconut palms processed without chemical bleaching or artificial preservatives.",
    targetMarkets: ["North America", "Western Europe", "GCC Region"],
    hsCodes: ["1701.13", "2938.90"],
    featured: true,
  },
  {
    id: "cat-5",
    title: "Leather Goods & Industrial Wear",
    slug: "leather-goods-industrial-wear",
    description:
      "LWG-certified finished leather products including industrial safety footwear, aprons, technical gloves, and premium travel accessories.",
    whyIndia:
      "World-class tannery clusters in Tamil Nadu and UP offering eco-tanned, heavy-duty leather meeting EU REACH compliance.",
    targetMarkets: ["European Union", "United Kingdom", "Australia", "USA"],
    hsCodes: ["4203.29", "6403.40"],
    featured: true,
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "FSSAI Certified",
    authority: "Food Safety and Standards Authority of India",
    description: "Central license compliance for food processing and export eligibility.",
  },
  {
    name: "APEDA Registered",
    authority: "Agricultural & Processed Food Products Export Development Authority",
    description: "Scheduled agri-product export authorization and farm traceability.",
  },
  {
    name: "Spices Board of India",
    authority: "Ministry of Commerce & Industry",
    description: "Quality evaluation laboratory testing and CRES export certificate.",
  },
  {
    name: "DGFT IEC Verified",
    authority: "Directorate General of Foreign Trade",
    description: "Active Importer-Exporter Code with full ICEGATE portal integration.",
  },
  {
    name: "ISO 22000 / HACCP Ready",
    authority: "International Organization for Standardization",
    description: "Hazard analysis and critical control points in processing facilities.",
  },
  {
    name: "US FDA Registered",
    authority: "U.S. Food and Drug Administration",
    description: "Facility registration and Prior Notice submission readiness.",
  },
];

export const PROOF_ITEMS: ProofItem[] = [
  {
    id: "proof-1",
    title: "Agri-Processing Facility Audit",
    category: "factory",
    badge: "Audited Facility",
    description: "On-site quality audit of cleanroom pulverization and vacuum packaging lines in Nashik.",
    locationOrDate: "Maharashtra, India",
  },
  {
    id: "proof-2",
    title: "20ft FCL Container Loading",
    category: "loading",
    badge: "Port Logistics",
    description: "Customs-sealed FCL container dispatched to Nhava Sheva (JNPT) for Rotterdam shipment.",
    locationOrDate: "Nhava Sheva Port",
  },
  {
    id: "proof-3",
    title: "APEDA Export Compliance Clearance",
    category: "certification",
    badge: "Verified Compliance",
    description: "Phytosanitary certification and heavy-metal testing report verified prior to vessel loading.",
    locationOrDate: "Mumbai Port Trust",
  },
  {
    id: "proof-4",
    title: "Middle East Trade Delegation",
    category: "event",
    badge: "Buyer Network",
    description: "Direct buyer matchmaking sessions with regional FMCG distributors in Dubai.",
    locationOrDate: "Dubai, UAE",
  },
  {
    id: "proof-5",
    title: "Steam Distillation Inspection",
    category: "factory",
    badge: "Quality Control",
    description: "Batch purity verification and GC-MS spectrum analysis for lemongrass oil export batch.",
    locationOrDate: "Kannauj, UP",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    type: "manufacturer",
    quote:
      "Partnering with StrideShip Exports gave our spice processing plant instant access to European buyers without building an in-house international sales team. They handle every single document and customs filing while we focus purely on milling precision.",
    author: "Rajesh K.",
    title: "Managing Director",
    company: "SpiceCraft Processing Partner",
    countryOrCity: "Guntur, Andhra Pradesh",
  },
  {
    id: "test-2",
    type: "buyer",
    quote:
      "Working through StrideShip Exports eliminated the guesswork of sourcing natural extracts from India. Response times are fast, quality parameters are pre-audited, and shipping documentation is flawless on arrival.",
    author: "Marcus Vance",
    title: "VP of Global Sourcing",
    company: "Apex Botanical Imports",
    countryOrCity: "Frankfurt, Germany",
  },
];

export const JV_MODEL_STEPS = [
  {
    number: "01",
    title: "Partner Audit & Alignment",
    summary:
      "We evaluate manufacturer production capacity, quality controls, and compliance readiness (FSSAI, APEDA, ISO). Once aligned, we sign a clean joint-venture agreement.",
  },
  {
    number: "02",
    title: "Buyer Channel Execution",
    summary:
      "We leverage our international buyer network, conduct targeted outreach, vet prospective importers, and structure commercial sales contracts with clear payment terms.",
  },
  {
    number: "03",
    title: "End-to-End EXIM Operations",
    summary:
      "StrideShip handles product sample dispatch, export documentation, phytosanitary clearance, ICEGATE filing, freight booking, and port logistics.",
  },
  {
    number: "04",
    title: "Shared Growth & Scale",
    summary:
      "Manufacturer retains 100% production & quality authority. We co-invest execution bandwidth and share in the net export turnover created together.",
  },
];
