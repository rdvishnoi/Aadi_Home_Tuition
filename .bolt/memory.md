# Project memory

## Product intent & audience

- **Aadi Home Tuition**: home tutoring service website serving Jodhpur, Rajasthan.
- Offers tuition for **Classes 6th–10th**, all subjects, covering **CBSE, ICSE, Rajasthan State Board, and other State Boards**.
- Supports **both Hindi and English medium** students.
- Primary goal: generate genuine enquiries from parents/students seeking quality home tuition.
- Target audience: Indian parents and students in Jodhpur; tone must feel premium, modern, and trustworthy.

## Brand personality & voice

- Trustworthy, premium, education-focused, parent-friendly.
- Honest and authentic: no fabricated reviews, testimonials, marks, achievements, or statistics.
- Bilingual-aware (Hindi & English medium) but site content is in English.

## Visual design & UX direction

- Tech stack: **React + TypeScript + Tailwind CSS + Lucide React**, Vite, `@/` path alias to `src/`.
- Reusable components, responsive (mobile/tablet/desktop), accessible labels.
- Modern aesthetic: feature cards with hover animations, timeline/numbered methodology cards, responsive image grid with lightbox, interactive FAQ accordion.
- Real license-free educational photography (hero + gallery).
- Floating WhatsApp button on every screen.
- Sticky header with top info bar and mobile menu; multi-column footer.
- Form validation inline (required fields, 10-digit mobile); success message on submit.

## Decisions, constraints & rationale

- **Enquiry form persistence**: saved to a Supabase database table (write-only, no private exposure); also opens WhatsApp with pre-filled message to `917425040363`.
- **WhatsApp number**: `917425040363`; phone: `+917425040363`.
- **Address**: 624P+W5, Sector 8, Kudi Bhagtasni Housing Board, Jodhpur, Rajasthan 342005, India.
- Embedded Google Map with directions button; click-to-call enabled.
- **Social media** (Facebook, Instagram, LinkedIn, YouTube, WhatsApp) uses centralized config placeholders; unconfigured platforms are **hidden** to avoid broken/misleading links. No invented URLs.
- **Google Reviews**: integration-ready component; currently no reviews — shows "Be the First to Review…" placeholder + "Write a Google Review" button; Google branding included; ready for Places API hookup once review URL provided.
- **SEO**: Jodhpur-focused local SEO, LocalBusiness/EducOrganization structured data, sitemap, robots.txt, canonical URLs, OG tags, proper H1/H2/H3 hierarchy, alt attributes, mobile-first.
- Copyright text: "© 2026 Aadi Home Tuition. All Rights Reserved."
- Centralized config file for social URLs and configurable business info.
- Deployable on Hostinger or modern hosting.

## Open questions & assumptions

- Actual social media profile URLs (Facebook, Instagram, LinkedIn, YouTube) — pending from user.
- Google Business Profile review URL — pending from user.
- Future Instagram feed / YouTube video integration — prepared but not yet wired.
- Visual preview not validated in environment; user should report any layout issues.