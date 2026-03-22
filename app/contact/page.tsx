import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Instagram, Twitter } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/sections/ContactForm'
import { CONTACT_INFO, SITE_CONFIG } from '@/constants'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with BrewCraft Coffee. Visit our Bengaluru cafe, place a corporate order, or just say hello — we\'d love to hear from you.',
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: {
    title: 'Contact BrewCraft Coffee',
    description: 'Visit our Bengaluru cafe or reach us online. We respond within 24 hours.',
    url: `${SITE_CONFIG.url}/contact`,
  },
}

const contactItems = [
  { icon: Mail, label: 'Email Us', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: 'Call Us', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: MapPin, label: 'Visit Us', value: CONTACT_INFO.address, href: 'https://maps.google.com' },
  { icon: Clock, label: 'Cafe Hours', value: CONTACT_INFO.hours, href: null },
]

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Contact', url: `${SITE_CONFIG.url}/contact` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="pt-40 pb-20 bg-bg">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-xs text-subtle mb-8">
              <Link href="/" className="hover:text-muted transition-colors">Home</Link>
              <span>/</span>
              <span className="text-muted">Contact</span>
            </nav>
            <p className="text-xs text-primary uppercase tracking-widest mb-5 font-medium">Say Hello</p>
            <h1 className="font-display mb-6">
              Let&apos;s <span className="text-gradient italic">Talk Coffee</span>
            </h1>
            <p className="text-muted text-xl max-w-lg mx-auto leading-relaxed">
              Questions about our products, subscriptions, or corporate plans? We respond within 24 hours.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
            {/* Contact info */}
            <AnimatedSection direction="left" className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="card-glass rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-subtle uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sm text-text hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-text">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="card-glass rounded-xl p-6">
                <p className="text-xs text-subtle uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/brewcraftcoffee', label: 'Instagram' },
                    { icon: Twitter, href: 'https://twitter.com/brewcraftcoffee', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
