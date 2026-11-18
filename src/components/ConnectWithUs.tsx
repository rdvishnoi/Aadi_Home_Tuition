import { MessageCircle, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { SOCIAL_URLS, BUSINESS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/config/site';
import { Reveal } from '@/hooks/useReveal';

const platforms = [
  { key: 'FACEBOOK_URL', label: 'Facebook', href: SOCIAL_URLS.FACEBOOK_URL, icon: Facebook, color: 'hover:bg-[#1877F2]' },
  { key: 'INSTAGRAM_URL', label: 'Instagram', href: SOCIAL_URLS.INSTAGRAM_URL, icon: Instagram, color: 'hover:bg-[#E4405F]' },
  { key: 'LINKEDIN_URL', label: 'LinkedIn', href: SOCIAL_URLS.LINKEDIN_URL, icon: Linkedin, color: 'hover:bg-[#0A66C2]' },
  { key: 'YOUTUBE_URL', label: 'YouTube', href: SOCIAL_URLS.YOUTUBE_URL, icon: Youtube, color: 'hover:bg-[#FF0000]' },
  {
    key: 'WHATSAPP_URL',
    label: 'WhatsApp',
    href: SOCIAL_URLS.WHATSAPP_URL,
    icon: MessageCircle,
    color: 'hover:bg-green-500',
    whatsapp: true,
  },
];

const configured = platforms.filter((p) => p.href);

export default function ConnectWithUs() {
  return (
    <section className="bg-lightblue-50 py-16 sm:py-20">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Connect With Us</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Connect With Us</h2>
          <p className="mt-4">
            Follow our teaching journey, get study tips and stay updated — or just message us directly on WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {configured.map(({ key, label, href, icon: Icon, color, whatsapp }) => (
            <Reveal key={key} delay={60}>
              <a
                href={whatsapp ? whatsappLink(DEFAULT_WHATSAPP_MESSAGE) : href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with ${BUSINESS.name} on ${label}`}
                className={`group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-xl ${color}`}
              >
                <Icon className="h-6 w-6 text-current transition-colors group-hover:text-white" aria-hidden="true" />
                <span className="font-display text-sm font-bold text-navy-900 transition-colors group-hover:text-white">
                  {label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {configured.length <= 1 && (
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-md text-center text-xs text-slate-400">
              More social profiles are coming soon — follow us on WhatsApp for now to stay connected.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
