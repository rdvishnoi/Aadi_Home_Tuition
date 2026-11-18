import { GraduationCap, Phone, MessageCircle, MapPin, Map } from 'lucide-react';
import { BUSINESS, MAPS_DIRECTIONS_URL, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/config/site';
import { SocialIcons, NAV_LINKS } from '@/components/Header';

const CLASS_LINKS = ['Class 6th', 'Class 7th', 'Class 8th', 'Class 9th', 'Class 10th'];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <GraduationCap className="h-6 w-6 text-amber-400" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold text-white">Aadi Home Tuition</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Affordable and professional home tuition for Classes 6th to 10th in Jodhpur. All subjects across CBSE, ICSE and State Boards, in Hindi and English medium.
          </p>
          <SocialIcons className="mt-5 text-slate-300" />
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer class links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Classes</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CLASS_LINKS.map((label) => (
              <li key={label}>
                <a href="#classes" className="transition-colors hover:text-amber-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Information</h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-start gap-2.5 transition-colors hover:text-amber-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-amber-400"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                WhatsApp: {BUSINESS.whatsappNumber}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>{BUSINESS.addressFull}</span>
            </li>
            <li>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-amber-400"
              >
                <Map className="h-3.5 w-3.5" aria-hidden="true" /> Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-site text-center text-xs text-slate-400">
          © 2026 Aadi Home Tuition. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
