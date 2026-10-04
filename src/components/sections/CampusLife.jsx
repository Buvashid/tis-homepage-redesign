import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const campusLifeImage =
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85'

function CampusLife() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }

  return (
    <section
      id="campus-life"
      aria-labelledby="campus-life-heading"
      className="bg-[var(--color-paper)] px-6 py-20 text-[var(--color-ink)] sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-ink)]"
        >
          <img
            src={campusLifeImage}
            alt="A leafy school campus building at Tulas International School"
            className="size-full object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]/55"
          >
            Campus life
          </motion.p>
          <motion.h2
            id="campus-life-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.06 }}
            className="max-w-xl font-display text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            A place to learn, live, and grow.
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.12 }}
            className="mt-8 max-w-lg text-base leading-7 text-[var(--color-ink)]/70 sm:text-lg sm:leading-8"
          >
            The boarding and day-school experience at TIS extends learning
            beyond classrooms. Daily campus life gives students room to build
            independence, follow their creativity, and grow through community.
          </motion.p>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.18 }}
            className="mt-10 grid gap-5 border-t border-[var(--color-ink)]/20 pt-6 sm:grid-cols-2"
          >
            <div>
              <p className="text-sm font-medium">Growing with purpose</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]/60">
                Everyday experiences encourage personal growth and leadership.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Living as a community</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]/60">
                A shared campus creates space to learn from and alongside others.
              </p>
            </div>
          </motion.div>
          <motion.a
            href="#campus-life"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.24 }}
            className="group mt-9 inline-flex items-center gap-3 border-b border-[var(--color-ink)]/35 pb-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--color-ink)]"
          >
            Explore campus
            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default CampusLife
