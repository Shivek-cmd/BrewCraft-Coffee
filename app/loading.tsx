export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        {/* Animated coffee logo */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-border border-t-primary animate-spin" />
          <div className="absolute inset-2 rounded-full bg-primary/10" />
        </div>
        <div className="space-y-2 text-center">
          <p className="font-display text-xl text-text">BrewCraft</p>
          <p className="text-xs text-subtle uppercase tracking-widest animate-pulse">Brewing your page...</p>
        </div>
      </div>
    </div>
  )
}
