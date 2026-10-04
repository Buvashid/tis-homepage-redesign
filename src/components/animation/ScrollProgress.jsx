import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1000 : 400,
    damping: shouldReduceMotion ? 100 : 40,
    mass: shouldReduceMotion ? 0.1 : 0.2,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[var(--color-sand)]"
      style={{ scaleX: progress }}
    />
  )
}

export default ScrollProgress
