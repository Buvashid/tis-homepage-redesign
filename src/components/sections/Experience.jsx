import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experiencePillars } from '../../data/content'

function Experience() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-[var(--color-ink)] px-6 py-20 text-[var(--color-paper)] sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sand)]"
          >
            The TIS experience
          </motion.p>
          <motion.h2
            id="experience-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.06, ease: 'easeOut' }}
            className="max-w-xl font-display text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            More than a school. A way of growing.
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.12, ease: 'easeOut' }}
            className="mt-7 max-w-md text-base leading-7 text-white/65"
          >
            Every part of life at TIS is designed to help students learn with
            curiosity, live with confidence, and look beyond themselves.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          className="border-t border-white/20"
        >
          {experiencePillars.map((pillar) => (
            <motion.a
              key={pillar.index}
              href="#about"
              variants={reveal}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
              className="group grid gap-5 border-b border-white/20 py-7 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-[56px_1fr_28px] sm:items-start sm:gap-6 sm:py-8"
            >
              <span className="text-xs tracking-[0.15em] text-[var(--color-sand)]">
                {pillar.index}
              </span>
              <span>
                <span className="block text-lg font-medium tracking-[-0.01em] sm:text-xl">
                  {pillar.title}
                </span>
                <span className="mt-2 block max-w-lg text-sm leading-6 text-white/55">
                  {pillar.description}
                </span>
              </span>
              <ArrowUpRight
                size={19}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-sand)]"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
