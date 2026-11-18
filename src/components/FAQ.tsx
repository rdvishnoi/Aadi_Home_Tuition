import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BUSINESS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/config/site';
import { Reveal } from '@/hooks/useReveal';

const faqs = [
  {
    q: 'Which classes do you provide tuition for?',
    a: 'We provide home tuition for Classes 6th, 7th, 8th, 9th and 10th — covering all subjects for each class.',
  },
  {
    q: 'Do you provide tuition for Classes 6th to 10th?',
    a: 'Yes, that is our complete focus. Teaching only these classes lets us specialize deeply in the CBSE, ICSE and State Board syllabus for this age group.',
  },
  {
    q: 'Which subjects do you cover?',
    a: 'All subjects — Mathematics, Science, English, Hindi, Social Science, Sanskrit and other applicable school subjects, depending on your child’s class and board.',
  },
  {
    q: 'Do you provide CBSE and ICSE tuition?',
    a: 'Yes. We teach students from CBSE, ICSE and State Boards, with teaching tailored to each board’s syllabus and exam pattern.',
  },
  {
    q: 'Is Rajasthan Board tuition available?',
    a: 'Yes, tuition for the Rajasthan State Board is available, along with other state boards where the syllabus is applicable.',
  },
  {
    q: 'Do you teach both Hindi and English medium students?',
    a: 'Absolutely. Our tutor teaches comfortably in both Hindi and English medium, matching the medium your child studies in at school.',
  },
  {
    q: 'How can I enquire about tuition fees?',
    a: `Simply call us at ${BUSINESS.phoneDisplay}, send a WhatsApp message, or fill the enquiry form below. Fees depend on the class, subjects and number of days per week — we will share an honest, affordable quote.`,
  },
  {
    q: 'Can I book a demo class?',
    a: 'Yes! We offer a free demo class so you and your child can experience our teaching before deciding. Fill the enquiry form or message us on WhatsApp to schedule it.',
  },
  {
    q: 'Where is Aadi Home Tuition located?',
    a: `We are based at ${BUSINESS.addressFull}. We provide home tuition across Jodhpur.`,
  },
  {
    q: 'How can parents contact the tutor?',
    a: `Parents can reach us directly by phone at ${BUSINESS.phoneDisplay}, on WhatsApp, or through the enquiry form on this page. We are happy to answer every question.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-lightblue-50 py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">FAQ</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4">Everything parents usually ask us — answered simply.</p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 40}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition-shadow ${
                    isOpen ? 'ring-amber-300 shadow-md' : 'ring-slate-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-bold text-navy-900 sm:text-base">{q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-amber-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100} className="mt-10 text-center">
          <p className="text-sm">
            Still have questions?{' '}
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-navy-900 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors hover:text-amber-600"
            >
              Message us on WhatsApp
            </a>{' '}
            or call {BUSINESS.phoneDisplay}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
