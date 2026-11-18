import { Star, ExternalLink, PenLine } from 'lucide-react';
import { GOOGLE_REVIEW_URL, GOOGLE_PLACE_ID, SITE_NAME } from '@/config/site';
import { Reveal } from '@/hooks/useReveal';

/**
 * Integration-ready Google Reviews section.
 * When GOOGLE_REVIEW_URL / GOOGLE_PLACE_ID are set in src/config/site.ts
 * (or a Places API integration is wired up), reviews will render here.
 * No fake reviews or ratings are ever displayed.
 */
export default function GoogleReviews() {
  const canWriteReview = GOOGLE_REVIEW_URL !== '';

  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Google Reviews</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">What Parents Say</h2>
          <p className="mt-4">Genuine Google reviews from real parents and students.</p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100 sm:p-10">
            {/* Google branding */}
            <div className="flex items-center justify-center gap-2" aria-label="Google">
              <span className="font-display text-2xl font-bold tracking-tight text-[#4285F4]">G</span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#EA4335]">o</span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#FBBC05]">o</span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#4285F4]">g</span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#34A853]">l</span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#EA4335]">e</span>
              <span className="ml-2 font-display text-lg font-semibold text-slate-600">Reviews</span>
            </div>

            {canWriteReview ? (
              <div className="mt-8">
                <p className="leading-relaxed">
                  Have you experienced our teaching? Share your honest experience with other parents on Google.
                </p>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6"
                >
                  <PenLine className="h-4 w-4" aria-hidden="true" /> Write a Google Review
                </a>
              </div>
            ) : (
              <>
                <div className="mt-6 flex justify-center gap-1" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-slate-200" aria-hidden="true" />
                  ))}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                  Be the First to Review {SITE_NAME}!
                </h3>
                <p className="mt-3 leading-relaxed">
                  Your feedback helps other parents and students discover our teaching services.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-lightblue-100 px-4 py-2 text-xs font-semibold text-navy-800">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Google reviews will appear here once the Google Business Profile review link is connected
                  {GOOGLE_PLACE_ID ? ' (place id configured)' : ''}.
                </p>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
