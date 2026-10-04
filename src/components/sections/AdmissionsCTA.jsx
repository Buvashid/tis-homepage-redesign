import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'

function AdmissionsCTA() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }

  return (
    <section
      id="admissions"
      aria-labelledby="admissions-heading"
      className="border-t border-white/15 bg-[var(--color-ink)] px-6 py-20 text-[var(--color-paper)] sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sand)]"
        >
          Admissions
        </motion.p>
        <motion.h2
          id="admissions-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.06 }}
          className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-8xl"
        >
          Begin your journey with TIS.
        </motion.h2>
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.12 }}
          className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
        >
          Discover a school experience shaped by academic purpose, personal
          growth, and a community that helps every student look ahead with
          confidence.
        </motion.p>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.18 }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Button href="#admissions">Begin your enquiry</Button>
          <Button href="#about" variant="secondary">
            Explore TIS
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AdmissionsCTA
