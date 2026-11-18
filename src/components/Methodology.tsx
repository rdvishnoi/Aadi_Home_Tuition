import { Search, Target, MessageSquare, PencilLine, ClipboardCheck, TrendingUp } from 'lucide-react';
import { Reveal } from '@/hooks/useReveal';

const steps = [
  { icon: Search, title: "Understand Student's Current Learning Level", desc: 'We begin with a friendly assessment of where your child stands in every subject.' },
  { icon: Target, title: 'Identify Weak Subjects and Topics', desc: 'Pinpointing exactly which topics need attention — no wasted time on what is already strong.' },
  { icon: MessageSquare, title: 'Explain Concepts with Practical Examples', desc: 'Every concept is taught with real-life examples until it truly clicks.' },
  { icon: PencilLine, title: 'Regular Practice and Homework', desc: 'Guided practice and daily homework keep learning active between sessions.' },
  { icon: ClipboardCheck, title: 'Weekly Tests and Performance Evaluation', desc: 'Weekly tests track progress and show parents exactly how their child is improving.' },
  { icon: TrendingUp, title: 'Continuous Improvement and Exam Preparation', desc: 'Feedback loops and revision plans lead steadily up to confident exam performance.' },
];

export default function Methodology() {
  return (
    <section id="methodology" className="bg-gradient-to-b from-lightblue-50 to-white py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Teaching Methodology</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Our Teaching Methodology</h2>
          <p className="mt-4">
            A proven six-step process that takes your child from where they are to where they can be.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-lightblue-100 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

          <ol className="space-y-10">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative">
                <Reveal
                  className={`flex items-start gap-6 pl-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:flex-row-reverse md:pl-12 md:text-right'
                  }`}
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-amber-400 shadow-lg ring-4 ring-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 transition-shadow hover:shadow-lg">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Step {i + 1}</span>
                    <h3 className="mt-1 font-display text-base font-bold text-navy-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
