import { useEffect, useState } from 'react';
import { GraduationCap, Menu, X, Phone, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { BUSINESS, SOCIAL_URLS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/config/site';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Classes & Subjects', href: '#classes' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Teaching Methodology', href: '#methodology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
];

const socials = [
  { key: 'FACEBOOK_URL', label: 'Facebook', href: SOCIAL_URLS.FACEBOOK_URL, icon: Facebook },
  { key: 'INSTAGRAM_URL', label: 'Instagram', href: SOCIAL_URLS.INSTAGRAM_URL, icon: Instagram },
  { key: 'LINKEDIN_URL', label: 'LinkedIn', href: SOCIAL_URLS.LINKEDIN_URL, icon: Linkedin },
  { key: 'YOUTUBE_URL', label: 'YouTube', href: SOCIAL_URLS.YOUTUBE_URL, icon: Youtube },
  { key: 'WHATSAPP_URL', label: 'WhatsApp', href: SOCIAL_URLS.WHATSAPP_URL, icon: MessageCircle, externalMessage: true },
];

const liveSocials = socials.filter((s) => s.href);

export function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {liveSocials.map(({ key, label, href, icon: Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${BUSINESS.name} on ${label}`}
          className="rounded-full p-2 text-current transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-navy-950 text-white md:block">
        <div className="container-site flex items-center justify-between py-2 text-xs">
          <p className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-amber-400" aria-hidden="true" />
            Home Tuition for Classes 6th–10th · CBSE · ICSE · State Boards · Jodhpur
          </p>
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 font-semibold transition-colors hover:text-amber-400">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {BUSINESS.phoneDisplay}
            </a>
            <span className="h-3 w-px bg-white/25" aria-hidden="true" />
            <SocialIcons className="text-white/80" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled || open ? 'bg-white shadow-lg shadow-navy-900/10' : 'bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur'
        }`}
      >
        <div className="container-site flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2.5" aria-label={`${BUSINESS.name} — home`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 shadow-md">
              <GraduationCap className="h-6 w-6 text-amber-400" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-navy-900">Aadi Home Tuition</span>
              <span className="block text-[11px] font-semibold tracking-wide text-amber-600">Learn at Home, Lead in Life</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-slate-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-amber-500 after:transition-all after:duration-300 hover:text-navy-900 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Enquire Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="rounded-xl p-2.5 text-navy-900 transition-colors hover:bg-lightblue-100 lg:hidden"
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-slate-100 transition-all duration-300 lg:hidden ${
            open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 font-semibold text-slate-700 transition-colors hover:bg-lightblue-100 hover:text-navy-900"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
              <SocialIcons className="text-navy-900" />
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-navy !px-4 !py-2 text-xs">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Call Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aadi Home Tuition on WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
