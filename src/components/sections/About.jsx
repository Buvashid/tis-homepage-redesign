import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const campusImage =
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85'

function About() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[var(--color-paper)] px-6 py-20 text-[var(--color-ink)] sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          variants={reveal}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -bottom-4 -left-4 size-24 rounded-full border border-[var(--color-sand)]/60 sm:-bottom-6 sm:-left-6 sm:size-32" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.img
              src={campusImage}
              alt="Campus building surrounded by trees at Tulas International School"
              className="size-full object-cover"
              initial={shouldReduceMotion ? false : { scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink)]/55">
            Boarding and day school · Dehradun
          </p>
        </motion.div>

        <div className="order-1 lg:order-2 lg:pl-4">
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={transition}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]/55"
          >
            About TIS
          </motion.p>
          <motion.h2
            id="about-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: 0.06 }}
            className="max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Education that shapes the whole person.
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: 0.12 }}
            className="mt-8 max-w-xl text-base leading-7 text-[var(--color-ink)]/70 sm:text-lg sm:leading-8"
          >
            Tulas International School is a modern Gurukul where academic excellence,
            holistic development, and global leadership grow together. In a
            nurturing boarding and day school environment, students are encouraged
            to discover their strengths and grow with purpose.
          </motion.p>
          <motion.a
            href="#experience"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: 0.18 }}
            className="group mt-9 inline-flex items-center gap-3 border-b border-[var(--color-ink)]/35 pb-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--color-ink)]"
          >
            Discover TIS
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

export default About
