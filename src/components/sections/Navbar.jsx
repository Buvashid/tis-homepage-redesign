import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus Life', href: '#campus-life' },
  { label: 'Sports', href: '#sports' },
  { label: 'Admissions', href: '#admissions' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? 'border-black/10 bg-[var(--color-paper)]/95 text-[var(--color-ink)] shadow-sm backdrop-blur-md'
          : 'border-white/15 bg-[var(--color-ink)]/20 text-[var(--color-paper)] backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-offset-8"
          aria-label="Tulas International School home"
          onClick={closeMenu}
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-current font-display text-lg leading-none">
            T
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] sm:block">
            Tulas International
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.13em] opacity-75 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#admissions"
            className={
              isScrolled
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-ink)]/80'
                : ''
            }
          >
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-current/30 p-2.5 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="overflow-hidden border-t border-current/10 bg-[var(--color-paper)] text-[var(--color-ink)] shadow-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 pb-6 pt-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-current/10 py-4 text-sm uppercase tracking-[0.14em]"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <Button href="#admissions" className="mt-5 self-start" onClick={closeMenu}>
                Enquire Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
