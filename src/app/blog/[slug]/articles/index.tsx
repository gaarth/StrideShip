import { ReactNode } from "react";
import { Article1 } from "./article-1";
import { Article2 } from "./article-2";
import { Article3 } from "./article-3";
import { Article4 } from "./article-4";
import { Article5 } from "./article-5";
import { Article6 } from "./article-6";
import { Article7 } from "./article-7";
import { Article8 } from "./article-8";
import { Article9 } from "./article-9";
import { Article10 } from "./article-10";

const articleMap: Record<string, ReactNode> = {
  "ai-for-customs-brokers-india": <Article1 />,
  "automate-bill-of-entry-processing-india": <Article2 />,
  "ai-for-freight-forwarding-india": <Article3 />,
  "manual-entry-trap-logistics-india": <Article4 />,
  "custom-house-agent-software-india": <Article5 />,
  "ai-for-customs-clearance-india": <Article6 />,
  "hsn-code-classification-ai-india": <Article7 />,
  "icegate-filing-automation": <Article8 />,
  "logistics-automation-roi-calculator": <Article9 />,
  "nhava-sheva-jnpt-customs-automation": <Article10 />,
};

export function getArticleContent(slug: string): ReactNode {
  return articleMap[slug] ?? null;
}
