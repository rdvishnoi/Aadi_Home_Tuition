import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Phone, MessageCircle, MapPin, Map, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS, MAPS_EMBED_URL, MAPS_DIRECTIONS_URL, whatsappLink } from '@/config/site';
import { Reveal } from '@/hooks/useReveal';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormState {
  studentName: string;
  parentName: string;
  mobile: string;
  studentClass: string;
  board: string;
  medium: string;
  subjects: string;
  message: string;
}

const initialState: FormState = {
  studentName: '',
  parentName: '',
  mobile: '',
  studentClass: '',
  board: '',
  medium: '',
  subjects: '',
  message: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.studentName.trim()) errors.studentName = 'Please enter the student name.';
  if (!form.parentName.trim()) errors.parentName = 'Please enter the parent name.';
  if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s|-/g, '')))
    errors.mobile = 'Please enter a valid 10-digit Indian mobile number.';
  if (!form.studentClass) errors.studentClass = 'Please select the student class.';
  if (!form.board) errors.board = 'Please select the education board.';
  if (!form.medium) errors.medium = 'Please select the medium.';
  if (!form.subjects.trim()) errors.subjects = 'Please mention the subjects required.';
  return errors;
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
      : 'border-slate-200 focus:border-navy-500 focus:ring-lightblue-100'
  }`;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('saving');
    const { error } = await supabase.from('enquiries').insert({
      student_name: form.studentName.trim(),
      parent_name: form.parentName.trim(),
      mobile: form.mobile.replace(/\s|-/g, ''),
      student_class: form.studentClass,
      board: form.board,
      medium: form.medium,
      subjects: form.subjects.trim(),
      message: form.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  const sendViaWhatsApp = () => {
    const lines = [
      '*New Tuition Enquiry — Aadi Home Tuition*',
      '',
      `Student Name: ${form.studentName}`,
      `Parent Name: ${form.parentName}`,
      `Mobile: ${form.mobile}`,
      `Student Class: ${form.studentClass}`,
      `Education Board: ${form.board}`,
      `Medium: ${form.medium}`,
      `Subjects Required: ${form.subjects}`,
    ];
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (status === 'success') {
      const t = setTimeout(() => {
        setForm(initialState);
        setStatus('idle');
      }, 12000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Contact Us</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Book a Free Demo Class Today
          </h2>
          <p className="mt-4">
            Fill the enquiry form or reach us directly — we usually respond within a few hours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact details + map */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl bg-navy-950 p-7 text-white shadow-xl">
                <h3 className="font-display text-lg font-bold">{BUSINESS.name}</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a href={`tel:${BUSINESS.phoneRaw}`} className="group flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-400">Call us</span>
                        <span className="font-bold">{BUSINESS.phoneDisplay}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLink('Hello Aadi Home Tuition, I would like to enquire about home tuition.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-green-500">
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-400">WhatsApp</span>
                        <span className="font-bold">{BUSINESS.whatsappNumber}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">Address</span>
                      <span className="font-semibold leading-relaxed">{BUSINESS.addressFull}</span>
                    </span>
                  </li>
                </ul>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full !py-2.5 text-xs"
                >
                  <Map className="h-4 w-4" aria-hidden="true" /> Get Directions on Google Maps
                </a>
              </div>

              <div className="flex-1 overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-100">
                <iframe
                  title={`Google Map showing the location of ${BUSINESS.name} in Jodhpur`}
                  src={MAPS_EMBED_URL}
                  className="h-full min-h-[240px] w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-7 shadow-xl ring-1 ring-slate-100 sm:p-9">
              {status === 'success' ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-10 w-10 text-green-600" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Enquiry Received!</h3>
                  <p className="mt-3 max-w-sm leading-relaxed">
                    Thank you, {form.parentName.split(' ')[0] || 'there'}! We have received your enquiry and will call
                    you back shortly on <strong>{form.mobile}</strong>.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Want a faster reply? Send the same details directly on WhatsApp.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button type="button" onClick={sendViaWhatsApp} className="btn !bg-green-500 text-white hover:bg-green-600">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
                    </button>
                    <button type="button" onClick={() => { setForm(initialState); setStatus('idle'); }} className="btn-navy">
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form id="enquiry-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-xl font-bold text-navy-900">Enquiry Form</h3>
                  <p className="mt-1 text-sm">Fields marked * are required.</p>

                  {status === 'error' && (
                    <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Something went wrong while saving your enquiry. Please try again or message us on WhatsApp.
                    </p>
                  )}

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field label="Student Name *" error={errors.studentName}>
                      <input
                        type="text"
                        value={form.studentName}
                        onChange={(e) => set('studentName')(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className={inputClass(!!errors.studentName)}
                      />
                    </Field>
                    <Field label="Parent Name *" error={errors.parentName}>
                      <input
                        type="text"
                        value={form.parentName}
                        onChange={(e) => set('parentName')(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={inputClass(!!errors.parentName)}
                      />
                    </Field>
                    <Field label="Mobile Number *" error={errors.mobile}>
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={form.mobile}
                        onChange={(e) => set('mobile')(e.target.value.replace(/[^\d\s-]/g, ''))}
                        placeholder="10-digit mobile number"
                        className={inputClass(!!errors.mobile)}
                      />
                    </Field>
                    <Field label="Student Class *" error={errors.studentClass}>
                      <select value={form.studentClass} onChange={(e) => set('studentClass')(e.target.value)} className={inputClass(!!errors.studentClass)}>
                        <option value="">Select class</option>
                        {['6th', '7th', '8th', '9th', '10th'].map((c) => (
                          <option key={c} value={c}>{`Class ${c}`}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Education Board *" error={errors.board}>
                      <select value={form.board} onChange={(e) => set('board')(e.target.value)} className={inputClass(!!errors.board)}>
                        <option value="">Select board</option>
                        {['CBSE', 'ICSE', 'State Board', 'Other'].map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Medium *" error={errors.medium}>
                      <select value={form.medium} onChange={(e) => set('medium')(e.target.value)} className={inputClass(!!errors.medium)}>
                        <option value="">Select medium</option>
                        {['Hindi', 'English'].map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Subjects Required *" error={errors.subjects}>
                        <input
                          type="text"
                          value={form.subjects}
                          onChange={(e) => set('subjects')(e.target.value)}
                          placeholder="e.g. Mathematics, Science"
                          className={inputClass(!!errors.subjects)}
                        />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field label="Message" error={undefined}>
                        <textarea
                          value={form.message}
                          onChange={(e) => set('message')(e.target.value)}
                          rows={4}
                          placeholder="Anything else you'd like us to know (optional)"
                          className={inputClass(false)}
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button type="submit" disabled={status === 'saving'} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                      {status === 'saving' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" /> Submit Enquiry
                        </>
                      )}
                    </button>
                    <button type="button" onClick={sendViaWhatsApp} className="btn !bg-green-500 text-white shadow-lg shadow-green-500/25 hover:bg-green-400">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire via WhatsApp
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-slate-400">
                    Your details are used only to respond to your enquiry and are never shared with anyone else.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-navy-900">{label}</span>
      {children}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-red-600" role="alert">
          <AlertCircle className="h-3 w-3" aria-hidden="true" /> {error}
        </span>
      )}
    </label>
  );
}
