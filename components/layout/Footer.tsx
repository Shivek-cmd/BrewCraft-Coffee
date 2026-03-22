import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO, SITE_CONFIG } from '@/constants'

const iconMap: Record<string, React.ElementType> = {
  Instagram, Twitter, Linkedin, Youtube,
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-medium">
                Brew<span className="text-gradient">Craft</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              {SITE_CONFIG.tagline} — Premium handcrafted coffee delivered to your door. Bold flavors, smooth textures, elevated rituals.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-subtle mb-5 font-medium">Navigation</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-subtle mb-5 font-medium">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-muted hover:text-text transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-muted hover:text-text transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-subtle hover:text-muted transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-subtle hover:text-muted transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
