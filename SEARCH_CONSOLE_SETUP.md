# Google Search Console Setup Guide for StrideShip

## 1. Verify strideship.dev in Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add property"** in the top-left dropdown
3. Choose **"Domain"** property type and enter: `strideship.dev`
4. Google will provide a **TXT record** to add to your DNS
5. Log in to your domain registrar (where strideship.dev is registered)
6. Add the TXT record to your DNS settings
7. Return to Search Console and click **"Verify"**
8. Verification may take a few minutes to propagate

> **Alternative (if DNS verification is difficult):** Choose "URL prefix" property type, enter `https://strideship.dev`, and verify via the HTML tag method by adding the meta tag to your `<head>` in `src/app/layout.tsx`.

## 2. Submit the Sitemap

1. In Search Console, go to **Sitemaps** in the left sidebar
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **Submit**
4. Google will fetch `https://strideship.dev/sitemap.xml` and begin processing
5. Wait 24–48 hours for initial crawling to complete
6. Check the sitemap status — it should show "Success" with all URLs discovered

## 3. Request Indexing for Key Pages

Use the **URL Inspection Tool** (search bar at the top of Search Console) to request indexing for each page individually:

### Pages to submit (in priority order):

1. `https://strideship.dev/` — Homepage
2. `https://strideship.dev/about` — About page
3. `https://strideship.dev/faq` — FAQ page
4. `https://strideship.dev/blog` — Blog index
5. `https://strideship.dev/blog/ai-for-customs-brokers-india` — Article 1
6. `https://strideship.dev/blog/automate-bill-of-entry-processing-india` — Article 2
7. `https://strideship.dev/blog/ai-for-freight-forwarding-india` — Article 3
8. `https://strideship.dev/blog/manual-entry-trap-logistics-india` — Article 4
9. `https://strideship.dev/blog/custom-house-agent-software-india` — Article 5
10. `https://strideship.dev/privacy` — Privacy policy

### For each URL:
1. Paste the URL in the inspection tool search bar
2. Wait for the inspection to complete
3. If it says "URL is not on Google", click **"Request Indexing"**
4. Repeat for each URL
5. Google limits indexing requests — if you hit the limit, wait 24 hours and continue

## 4. Set Up Performance Tracking

### Target Keywords to Monitor

Track these 10 keywords in the **Performance** tab:

| Keyword | Target Page |
|---------|------------|
| AI for customs | Homepage, Article 1 |
| AI for customs brokers | Article 1 |
| AI for freight forwarding | Article 3 |
| customs house agent automation | FAQ, Article 1 |
| BOE automation India | Article 2 |
| Bill of Entry automation | Article 2 |
| logistics automation India | Article 4 |
| freight forwarding software India | Article 4 |
| custom house agent software | Article 5 |
| CHA software India | Article 5 |

### How to track:
1. Go to **Performance** in the left sidebar
2. Click **"+ New"** filter → **Query**
3. Enter each keyword and monitor:
   - **Impressions** — how often you appear in search results
   - **Clicks** — how often users click through
   - **Average position** — your ranking
   - **CTR** — click-through rate

### Weekly check-in routine:
- Review position changes for target keywords
- Check which pages are getting impressions for unexpected queries (opportunities)
- Monitor the **Coverage** tab for any crawl errors or indexing issues
- Submit new content for indexing as you publish additional blog posts

## 5. Additional Recommendations

### Google Business Profile
If not already set up, create a Google Business Profile for StrideShip at [business.google.com](https://business.google.com) with:
- Business name: StrideShip
- Category: Business Management Consultant / IT Services
- Address: Mumbai, Maharashtra, India
- Website: https://strideship.dev
- Email: ceo@strideship.dev

### Bing Webmaster Tools
Submit the same sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters) — Bing powers Copilot search results and DuckDuckGo.

### Monitor AI Search Visibility
Periodically test your visibility on:
- [Perplexity.ai](https://perplexity.ai) — Search "AI for customs brokers India"
- ChatGPT with web search — Ask about customs automation in India
- Google AI Overviews — Check if your content appears in AI-generated summaries
