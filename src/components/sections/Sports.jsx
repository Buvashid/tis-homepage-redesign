import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const sports = [
  'Archery',
  'Badminton',
  'Basketball',
  'Cricket',
  'Football',
  'Hockey',
  'Horse Riding',
  'Lawn Tennis',
  'Shooting',
  'Squash',
  'Swimming',
  'Table Tennis',
  'Taekwondo',
  'Volleyball',
  'Skating',
  'Chess',
]

const sportsImage =
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85'

function Sports() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }

  return (
    <section
      id="sports"
      aria-labelledby="sports-heading"
      className="bg-[var(--color-ink)] px-6 py-20 text-[var(--color-paper)] sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={transition}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sand)]"
          >
            Sports &amp; beyond
          </motion.p>
          <motion.h2
            id="sports-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.06 }}
            className="max-w-xl font-display text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Discipline, movement, and the spirit to compete.
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.12 }}
            className="mt-7 max-w-md text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
          >
            Sport is an important part of holistic development at TIS, giving
            students space to build discipline, confidence, and a lasting
            appreciation for movement.
          </motion.p>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.18 }}
            className="mt-12 aspect-[4/3] overflow-hidden rounded-sm bg-white/5 lg:mt-20"
          >
            <img
              src={sportsImage}
              alt="Students running together on a sports track"
              className="size-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.04 }}
          className="border-t border-white/20 self-start"
        >
          {sports.map((sport, index) => (
            <motion.a
              key={sport}
              href="#sports"
              variants={reveal}
              transition={transition}
              className="group flex items-center gap-4 border-b border-white/20 py-4 text-lg transition-all duration-300 hover:translate-x-2 hover:text-[var(--color-sand)] sm:py-5 sm:text-xl"
            >
              <span className="w-8 text-xs tracking-[0.15em] text-[var(--color-sand)]/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">{sport}</span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-sand)]"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Sports
