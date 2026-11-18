import { Phone, MessageCircle, Star, BookOpen, Layers, School, Languages, UserCheck } from 'lucide-react';
import { BUSINESS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/config/site';
import { HERO_IMAGE } from '@/config/images';
import { Reveal } from '@/hooks/useReveal';

const trustHighlights = [
  { icon: Layers, label: 'Classes 6th to 10th' },
  { icon: BookOpen, label: 'All Subjects' },
  { icon: School, label: 'CBSE, ICSE & State Boards' },
  { icon: Languages, label: 'Hindi & English Medium' },
  { icon: UserCheck, label: 'Personalized Learning' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-32 md:pt-40">
      {/* Background graphics */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-navy-700/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
        <svg className="absolute right-0 top-0 h-full w-1/2 text-white/5" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container-site relative grid items-center gap-12 pb-20 pt-8 lg:grid-cols-2 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-white/15">
              <Star className="h-3.5 w-3.5 fill-amber-300" aria-hidden="true" />
              Trusted Home Tuition in Jodhpur
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Best Home Tuition for Classes 6th to 10th in{' '}
              <span className="relative text-amber-400">
                Jodhpur
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 8" fill="none" aria-hidden="true">
                  <path d="M2 6C30 2 90 2 118 6" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Affordable and Professional Home Tuition for Classes 6th to 10th. All Subjects, CBSE, ICSE and State
              Boards. Personalized Learning in Hindi and English Medium.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Book a Free Demo Class
              </a>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
              </a>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 bg-green-500 text-white shadow-lg shadow-green-500/25 hover:-translate-y-0.5 hover:bg-green-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Enquiry
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {trustHighlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 ring-1 ring-white/10"
                >
                  <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" /> {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/30 via-transparent to-navy-500/30 blur-2xl" aria-hidden="true" />
            <img
              src={HERO_IMAGE}
              alt="Home tutor teaching students during a home tuition session in Jodhpur"
              className="relative w-full rounded-[2rem] object-cover shadow-2xl shadow-navy-950/60 ring-1 ring-white/20"
              loading="eager"
              fetchPriority="high"
            />
            <div className="animate-float absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <p className="font-display text-2xl font-bold text-navy-900">6th–10th</p>
              <p className="text-xs font-semibold text-slate-500">All Classes &amp; All Subjects</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Wave divider */}
      <svg className="relative block w-full text-white" viewBox="0 0 1440 60" fill="currentColor" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C240,60 480,0 720,20 C960,40 1200,48 1440,16 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}
