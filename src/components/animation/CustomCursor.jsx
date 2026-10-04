import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CustomCursor() {
  const shouldReduceMotion = useReducedMotion()
  const [isEnabled, setIsEnabled] = useState(false)
  const cursorX = useMotionValue(-20)
  const cursorY = useMotionValue(-20)
  const cursorScale = useMotionValue(1)
  const cursorOpacity = useMotionValue(0.75)
  const springConfig = shouldReduceMotion
    ? { stiffness: 1000, damping: 100, mass: 0.1 }
    : { stiffness: 500, damping: 35, mass: 0.25 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)
  const smoothScale = useSpring(cursorScale, springConfig)
  const smoothOpacity = useSpring(cursorOpacity, springConfig)

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine) and (hover: hover)')
    let cleanupListeners = () => {}

    const handlePointerMove = (event) => {
      cursorX.set(event.clientX - 4)
      cursorY.set(event.clientY - 4)
    }

    const setInteractiveState = (interactive) => {
      cursorScale.set(interactive ? 2.25 : 1)
      cursorOpacity.set(interactive ? 0.95 : 0.75)
    }

    const handlePointerOver = (event) => {
      const target =
        event.target instanceof Element
          ? event.target.closest('a, button, [role="button"]')
          : null
      setInteractiveState(Boolean(target))
    }

    const handlePointerOut = (event) => {
      const target =
        event.target instanceof Element
          ? event.target.closest('a, button, [role="button"]')
          : null
      const relatedTarget = event.relatedTarget
      const remainsInteractive =
        target && relatedTarget instanceof Node && target.contains(relatedTarget)
      if (target && !remainsInteractive) setInteractiveState(false)
    }

    const enableListeners = () => {
      document.addEventListener('pointermove', handlePointerMove, { passive: true })
      document.addEventListener('pointerover', handlePointerOver, { passive: true })
      document.addEventListener('pointerout', handlePointerOut, { passive: true })
      cleanupListeners = () => {
        document.removeEventListener('pointermove', handlePointerMove)
        document.removeEventListener('pointerover', handlePointerOver)
        document.removeEventListener('pointerout', handlePointerOut)
        cleanupListeners = () => {}
      }
    }

    const updateEnabled = () => {
      cleanupListeners()
      const enabled = pointerQuery.matches
      setIsEnabled(enabled)
      if (enabled) enableListeners()
    }

    updateEnabled()
    pointerQuery.addEventListener('change', updateEnabled)

    return () => {
      cleanupListeners()
      pointerQuery.removeEventListener('change', updateEnabled)
    }
  }, [cursorOpacity, cursorScale, cursorX, cursorY])

  if (!isEnabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] size-2 rounded-full border border-[var(--color-sand)] bg-[var(--color-sand)]/35"
      style={{ x: smoothX, y: smoothY, scale: smoothScale, opacity: smoothOpacity }}
    />
  )
}

export default CustomCursor
