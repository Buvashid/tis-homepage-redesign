import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { learningExperiences } from '../../data/content'

const academicsImage =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=85'

function Academics() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }

  return (
    <section
      id="academics"
      aria-labelledby="academics-heading"
      className="bg-[var(--color-paper)] px-6 py-20 text-[var(--color-ink)] sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-24">
          <div>
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={transition}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]/55"
            >
              Academics &amp; campus
            </motion.p>
            <motion.h2
              id="academics-heading"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...transition, delay: 0.06 }}
              className="max-w-3xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-8xl"
            >
              Learning happens everywhere.
            </motion.h2>
          </div>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: 0.12 }}
            className="max-w-lg text-base leading-7 text-[var(--color-ink)]/70 sm:text-lg sm:leading-8"
          >
            At TIS, academic learning sits within a broader campus experience.
            The boarding and day school environment gives students room to learn
            with curiosity, develop as individuals, and grow with purpose.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-14">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...transition, delay: 0.1 }}
            className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[var(--color-ink)]"
          >
            <motion.img
              src={academicsImage}
              alt="Students learning together in a bright classroom"
              className="size-full object-cover"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            />
            <span className="absolute bottom-5 left-5 bg-[var(--color-ink)]/80 px-3 py-2 text-[0.6rem] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
              A place to learn and grow
            </span>
          </motion.div>

          <div className="lg:pb-2">
            {learningExperiences.map((experience, index) => (
              <motion.a
                key={experience.index}
                href="#experience"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: 0.16 + index * 0.08 }}
                className="group flex gap-4 border-t border-[var(--color-ink)]/20 py-6 transition-colors duration-300 hover:border-[var(--color-ink)]/50"
              >
                <span className="pt-1 text-xs tracking-[0.15em] text-[var(--color-ink)]/50">
                  {experience.index}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-medium">{experience.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--color-ink)]/65">
                    {experience.description}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academics
