export const SITE_CONFIG = {
  name: 'BrewCraft Coffee',
  tagline: 'Not Just Coffee. It\'s a Ritual.',
  description:
    'BrewCraft Coffee is a premium coffee brand offering handcrafted brews, cold coffee blends, and subscription-based coffee deliveries. Bold flavors, smooth textures, and a premium ritual designed for your everyday lifestyle.',
  url: 'https://brewcraftcoffee.in',
  gtmId: 'GTM-XXXXXXX',
  locale: 'en-IN',
  themeColor: '#0a0a0a',
  ogImage: '/og/og-default.jpg',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS = [
  { platform: 'Instagram', href: 'https://instagram.com/brewcraftcoffee', icon: 'Instagram' },
  { platform: 'Twitter', href: 'https://twitter.com/brewcraftcoffee', icon: 'Twitter' },
  { platform: 'LinkedIn', href: 'https://linkedin.com/company/brewcraftcoffee', icon: 'Linkedin' },
  { platform: 'YouTube', href: 'https://youtube.com/@brewcraftcoffee', icon: 'Youtube' },
]

export const CONTACT_INFO = {
  email: 'hello@brewcraftcoffee.in',
  phone: '+91 98765 43210',
  address: 'BrewCraft HQ, Indiranagar, Bengaluru, Karnataka 560038',
  hours: 'Mon–Sat: 8:00 AM – 10:00 PM',
  whatsapp: '+919876543210',
}

export const SERVICES = [
  {
    name: 'Cold Brew Coffee Bottles',
    slug: 'cold-brew-coffee-bottles',
    shortDesc: 'Smooth, bold cold brew steeped for 18+ hours. Ready to pour, ready to elevate your day.',
    icon: 'Droplets',
  },
  {
    name: 'Fresh Roasted Coffee Beans',
    slug: 'fresh-roasted-coffee-beans',
    shortDesc: 'Single-origin and blended beans, roasted fresh and delivered within 48 hours of roasting.',
    icon: 'Coffee',
  },
  {
    name: 'Monthly Coffee Subscription',
    slug: 'monthly-coffee-subscription',
    shortDesc: 'Curated coffee drops every month. Discover new roasts, blends, and origins on autopilot.',
    icon: 'RefreshCw',
  },
  {
    name: 'Cafe Experience',
    slug: 'cafe-experience',
    shortDesc: 'Dine-in and takeaway at our Bengaluru flagship. Crafted drinks, great ambiance, zero rush.',
    icon: 'Store',
  },
  {
    name: 'Custom Coffee Blends',
    slug: 'custom-coffee-blends',
    shortDesc: 'Build your signature blend. We work with you to create a coffee that's uniquely yours.',
    icon: 'FlaskConical',
  },
  {
    name: 'Corporate Coffee Supply',
    slug: 'corporate-coffee-supply',
    shortDesc: 'Premium coffee solutions for offices and teams. Bulk supply, equipment, and monthly plans.',
    icon: 'Building2',
  },
]

export const STATS = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '18+', label: 'Brew Hours per Batch' },
  { value: '12', label: 'Origin Countries' },
  { value: '4.9', label: 'Average Rating' },
]

export const TESTIMONIALS = [
  {
    name: 'Rahul S.',
    role: 'Product Designer, Bengaluru',
    quote: 'The smoothest cold brew I\'ve ever had. Totally changed my mornings.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    name: 'Priya K.',
    role: 'Startup Founder, Mumbai',
    quote: 'Premium feel, amazing taste, and fast delivery. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
  {
    name: 'Aman T.',
    role: 'Content Creator, Delhi',
    quote: 'BrewCraft feels like a lifestyle brand, not just coffee.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    rating: 5,
  },
]

export const FAQS = [
  {
    q: 'What makes BrewCraft Coffee different?',
    a: 'We source single-origin and ethically traded beans from 12+ countries, roast in small batches, and deliver within 48 hours of roasting. Every product is crafted with obsessive attention to flavor, texture, and ritual.',
  },
  {
    q: 'Do you offer subscription plans?',
    a: 'Yes! Our Monthly Coffee Subscription delivers a curated selection of our finest beans and brews every month. Choose your roast preference, grind size, and frequency. Cancel or pause anytime.',
  },
  {
    q: 'How fresh are your coffee beans?',
    a: 'Extremely fresh. We roast in small batches and ship within 48 hours of roasting. Every bag is sealed with a one-way degassing valve and stamped with the roast date so you always know what you\'re brewing.',
  },
  {
    q: 'Do you deliver across India?',
    a: 'Yes, we deliver pan-India via our express shipping partners. Most metro cities receive orders in 1–2 business days. Remote areas may take 3–5 days. Free delivery on orders above ₹999.',
  },
  {
    q: 'Can I customize my coffee blend?',
    a: 'Absolutely. Our Custom Coffee Blend service lets you choose origin, roast level, flavor notes, and grind size to create a signature blend. Great for gifts, special occasions, and coffee connoisseurs.',
  },
  {
    q: 'Do you have a physical cafe?',
    a: 'Yes! Visit our flagship cafe in Indiranagar, Bengaluru. We\'re open Monday to Saturday, 8AM–10PM. Expect seasonal specials, single-origin pour-overs, and our full cold brew menu.',
  },
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹799',
    period: '/month',
    description: 'Perfect for the occasional coffee lover.',
    features: [
      '250g fresh roasted beans',
      '1 cold brew bottle (500ml)',
      'Free pan-India delivery',
      'Roast date guarantee',
      'Email brewing guides',
    ],
    cta: 'Start Starter',
    highlighted: false,
  },
  {
    name: 'Ritual',
    price: '₹1,499',
    period: '/month',
    description: 'For the daily coffee ritualist.',
    features: [
      '500g fresh roasted beans',
      '3 cold brew bottles (500ml each)',
      'Free priority delivery',
      'Custom grind preference',
      'Monthly origin story card',
      'Early access to new drops',
      '10% off all store orders',
    ],
    cta: 'Start Your Ritual',
    highlighted: true,
  },
  {
    name: 'Connoisseur',
    price: '₹2,799',
    period: '/month',
    description: 'The full BrewCraft experience.',
    features: [
      '1kg premium single-origin beans',
      '6 cold brew bottles (500ml each)',
      'Same-day Bengaluru delivery',
      'Custom blend consultation',
      'Quarterly cupping session invite',
      'Dedicated account manager',
      '20% off all store orders',
      'Free cafe visits (2/month)',
    ],
    cta: 'Go Connoisseur',
    highlighted: false,
  },
]
