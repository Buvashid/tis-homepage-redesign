import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'

const campusImage =
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85'

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  }
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }

  return (
    <section
      className="relative isolate flex min-h-[680px] items-end overflow-hidden bg-[var(--color-ink)] sm:min-h-screen"
      aria-labelledby="hero-heading"
    >
      <motion.img
        src={campusImage}
        alt="A university-style campus building surrounded by trees"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/75 to-[var(--color-ink)]/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-[var(--color-ink)]/30" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36 lg:px-10 lg:pb-24">
        <div className="max-w-4xl">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={transition}
            className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-sand)]"
          >
            Tulas International School
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.08 }}
            className="max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.045em] text-[var(--color-paper)] sm:text-7xl lg:text-8xl"
          >
            A modern Gurukul for a changing world.
          </motion.h1>
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.18 }}
            className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
          >
            A boarding and day school in Dehradun where academic excellence,
            holistic development, and global leadership grow together.
          </motion.p>
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#admissions">Begin your enquiry</Button>
            <Button href="#about" variant="secondary">
              Explore TIS
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.65 }}
          className="mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-white/35">
            <ArrowDown size={15} aria-hidden="true" />
          </span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
