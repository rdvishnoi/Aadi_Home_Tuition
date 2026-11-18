import { BrainCircuit, TrendingUp, Building2, CalendarCheck, FileCheck, ClipboardCheck } from 'lucide-react';
import { Reveal } from '@/hooks/useReveal';

const outcomes = [
  { icon: BrainCircuit, title: 'Better Conceptual Understanding', desc: 'Concepts are understood deeply, not memorized for a day.' },
  { icon: TrendingUp, title: 'Improved Academic Confidence', desc: 'As grades and clarity grow, so does your child’s self-belief.' },
  { icon: Building2, title: 'Strong Subject Fundamentals', desc: 'Base-building in Maths and Science that supports future studies.' },
  { icon: CalendarCheck, title: 'Consistent Study Habits', desc: 'A regular, guided routine replaces last-minute exam panic.' },
  { icon: FileCheck, title: 'Better Examination Preparation', desc: 'Structured revision and practice keep every exam in control.' },
  { icon: ClipboardCheck, title: 'Regular Academic Assessment', desc: 'Continuous feedback so parents always know the real progress.' },
];

export default function StudentDevelopment() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-navy-700/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />

      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-white/15">
            Student Growth
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            How Your Child Develops With Us
          </h2>
          <p className="mt-4 text-slate-300">
            Every session is designed to build lasting skills — here is what changes for your child over time.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 90}
              className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10"
            >
              <Icon className="h-8 w-8 text-amber-400" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
