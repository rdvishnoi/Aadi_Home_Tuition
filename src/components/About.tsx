import { CheckCircle2 } from 'lucide-react';
import { ABOUT_IMAGE_MAIN, ABOUT_IMAGE_SECONDARY } from '@/config/images';
import { Reveal } from '@/hooks/useReveal';

const highlights = [
  'Conceptual learning over rote memorization',
  'Strong Mathematics & Science fundamentals',
  'Regular practice, mock tests & revision',
  'Personalized school examination preparation',
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src={ABOUT_IMAGE_MAIN}
              alt="Tutor guiding a school student through an exercise during home tuition in Jodhpur"
              className="w-full rounded-[2rem] object-cover shadow-xl"
              loading="lazy"
            />
            <img
              src={ABOUT_IMAGE_SECONDARY}
              alt="Student completing homework with the support of a home tutor"
              className="absolute -bottom-10 -right-4 hidden w-52 rounded-2xl object-cover shadow-2xl ring-8 ring-white sm:block lg:-right-8"
              loading="lazy"
            />
            <div className="absolute -top-5 -left-4 rounded-2xl bg-amber-500 px-5 py-3 shadow-lg lg:-left-8">
              <p className="font-display text-sm font-bold text-slate-950">Classes 6th – 10th</p>
              <p className="text-xs font-semibold text-slate-800">All Boards · All Subjects</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="section-tag">About Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Welcome to Aadi Home Tuition
            </h2>
            <p className="mt-5 leading-relaxed">
              Aadi Home Tuition provides affordable and professional home tuition for students from Classes 6th to
              10th. We specialize in CBSE, ICSE and State Board education for both Hindi and English medium students.
              Our teaching approach focuses on conceptual learning, strong Mathematics and Science fundamentals,
              regular practice, mock tests and personalized school examination preparation.
            </p>
            <p className="mt-4 leading-relaxed">
              Our goal is to help every student improve academic performance, build confidence and develop a strong
              foundation for future success.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-xl bg-lightblue-50 p-3.5 text-sm font-semibold text-navy-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={250}>
            <a href="#contact" className="btn-primary mt-8">
              Book a Free Demo Class
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
