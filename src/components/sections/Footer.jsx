const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Sports', href: '#sports' },
  { label: 'Campus Life', href: '#campus-life' },
  { label: 'Admissions', href: '#admissions' },
]

function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[var(--color-ink)] px-6 py-12 text-[var(--color-paper)] sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-24">
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-flex items-center gap-3 font-display text-2xl"
              aria-label="Tulas International School home"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-current text-lg leading-none">
                T
              </span>
              Tulas International School
            </a>
            <p className="mt-5 text-sm leading-6 text-white/60">
              A boarding and day school in Dehradun where students learn,
              grow, and discover their purpose.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-sand)]">
              Dehradun
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Explore
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:min-w-72">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--color-paper)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/15 pt-5">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">
            © 2026 Tulas International School
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
