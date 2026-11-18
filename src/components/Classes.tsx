import { BookOpen, Landmark, Languages } from 'lucide-react';
import { Reveal } from '@/hooks/useReveal';

const boards = ['CBSE Board', 'ICSE Board', 'Rajasthan State Board', 'Other State Boards*'];

const classCards = [
  {
    title: 'Class 6th',
    desc: 'Building strong basics across every subject with patient, step-by-step guidance at home.',
  },
  {
    title: 'Class 7th',
    desc: 'Strengthening middle-school concepts and study habits while keeping pace with school syllabus.',
  },
  {
    title: 'Class 8th',
    desc: 'Deepening Mathematics and Science foundations to prepare students for board-facing years.',
  },
  {
    title: 'Class 9th',
    desc: 'Focused teaching on tougher concepts, regular practice and thorough school exam preparation.',
  },
  {
    title: 'Class 10th',
    desc: 'Complete board-year support with revision, mock tests and personalized exam strategies.',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="bg-lightblue-50 py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Classes &amp; Subjects</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Home Tuition for Every Class, Every Subject
          </h2>
          <p className="mt-4">
            Structured home tuition for Classes 6th to 10th in Jodhpur — all subjects, all major boards, in Hindi and
            English medium.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {classCards.map(({ title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-md shadow-navy-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 font-display text-xl font-bold text-amber-400 transition-transform duration-300 group-hover:scale-110">
                {title.match(/\d/)?.[0]}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{title} Home Tuition</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed">{desc}</p>
              <p className="mt-4 flex items-start gap-2 text-xs font-semibold text-navy-800">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                All Subjects — Maths, Science, English, Hindi, Social Science, Sanskrit &amp; more
              </p>
              <a
                href="#contact"
                className="btn-navy mt-5 w-full !px-4 !py-2.5 text-xs transition-colors group-hover:bg-amber-500 group-hover:text-slate-950"
              >
                Enquire Now
              </a>
            </Reveal>
          ))}

          <Reveal
            delay={400}
            className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white shadow-lg"
          >
            <Languages className="h-8 w-8 text-amber-400" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-bold">Hindi &amp; English Medium</h3>
            <p className="mt-2 text-sm text-slate-200">
              Comfortable teaching in the medium your child studies in — both Hindi and English medium students are
              welcome.
            </p>
            <a href="#contact" className="btn-primary mt-5 w-full !px-4 !py-2.5 text-xs">
              Book a Free Demo
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-100 sm:p-8">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy-900">
              <Landmark className="h-5 w-5 text-amber-600" aria-hidden="true" /> Board Support
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {boards.map((board) => (
                <span
                  key={board}
                  className="rounded-full bg-lightblue-100 px-4 py-2 text-xs font-bold text-navy-900"
                >
                  {board}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              * Tuition for other state boards is available where the syllabus is applicable. Subjects include
              Mathematics, Science, English, Hindi, Social Science, Sanskrit and other applicable school subjects.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
