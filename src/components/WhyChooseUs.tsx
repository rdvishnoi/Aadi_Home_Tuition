import {
  UserCheck,
  BookOpen,
  Layers,
  Lightbulb,
  Sigma,
  ClipboardList,
  Eye,
  IndianRupee,
  Languages,
  GraduationCap,
} from 'lucide-react';
import { Reveal } from '@/hooks/useReveal';

const features = [
  { icon: UserCheck, title: 'Personalized Learning', desc: 'Lessons shaped around your child’s pace, style and goals.' },
  { icon: BookOpen, title: 'All Subjects Coverage', desc: 'One tutor for every subject — no juggling multiple coaches.' },
  { icon: Layers, title: 'Classes 6th to 10th', desc: 'Dedicated expertise in the middle and secondary school years.' },
  { icon: Lightbulb, title: 'Concept-Based Teaching', desc: 'Understanding first, memorization second — concepts that last.' },
  { icon: Sigma, title: 'Strong Maths & Science', desc: 'Extra focus on the fundamentals that decide future streams.' },
  { icon: ClipboardList, title: 'Regular Mock Tests', desc: 'Frequent testing so exam day never feels like the first attempt.' },
  { icon: Eye, title: 'Individual Attention', desc: 'One-to-one home sessions where your child is the only student.' },
  { icon: IndianRupee, title: 'Affordable Tuition Fees', desc: 'Honest, budget-friendly pricing for Jodhpur families.' },
  { icon: Languages, title: 'Hindi & English Medium', desc: 'Taught in the medium your child is most comfortable with.' },
  { icon: GraduationCap, title: 'School Exam Preparation', desc: 'Targeted revision and practice before every school exam.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Why Choose Aadi Home Tuition?
          </h2>
          <p className="mt-4">
            Ten reasons parents across Jodhpur trust us with their child’s education — from Classes 6th to 10th, all
            subjects and boards.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={(i % 5) * 70}
              className="group rounded-3xl bg-white p-6 shadow-md shadow-navy-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:bg-navy-900 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lightblue-100 transition-colors duration-300 group-hover:bg-amber-500/20">
                <Icon className="h-6 w-6 text-navy-800 transition-colors duration-300 group-hover:text-amber-400" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy-900 transition-colors duration-300 group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
