/** Slow, endless line of text. Pure CSS, pauses for reduced motion. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-8">{t}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-bronze/70" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
  return (
    <div className={`overflow-hidden ${className ?? ''}`} aria-label={items.join(', ')}>
      <div className="marquee-track flex w-max">
        {row}
        <div aria-hidden="true" className="flex">{row}</div>
      </div>
    </div>
  )
}
