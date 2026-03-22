export default function LogoMarquee() {
  const partners = [
    'Swiggy Instamart', 'Blinkit', 'BigBasket', 'Amazon Fresh',
    'Zepto', 'Flipkart Minutes', 'Dunzo', 'JioMart',
  ]
  const doubled = [...partners, ...partners]

  return (
    <section className="bg-bg-secondary border-y border-border py-6 overflow-hidden">
      <div className="flex items-center gap-4 mb-3">
        <p className="text-xs text-subtle uppercase tracking-widest whitespace-nowrap pl-8">
          Available on
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 marquee-track w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-subtle hover:text-muted transition-colors whitespace-nowrap text-sm font-medium"
            >
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
