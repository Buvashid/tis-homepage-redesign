import { motion, useReducedMotion } from 'framer-motion'
import { tisAtAGlance } from '../../data/content'

function Stats() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="stats-heading"
      className="border-t border-white/15 bg-[var(--color-ink)] px-6 py-16 text-[var(--color-paper)] sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <h2
            id="stats-heading"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sand)]"
          >
            TIS at a glance
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          className="grid grid-cols-1 border-t border-white/20 sm:grid-cols-3"
        >
          {tisAtAGlance.map((stat) => (
            <motion.div
              key={stat.value}
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
              className="border-b border-white/20 py-8 pr-5 sm:border-b-0 sm:py-10 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
            >
              <p className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                {stat.value}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
