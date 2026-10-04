import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary:
    'bg-[var(--color-sand)] text-[var(--color-ink)] hover:bg-[var(--color-paper)]',
  secondary:
    'border border-white/35 bg-white/5 text-[var(--color-paper)] hover:border-white hover:bg-white/10',
}

function Button({
  children,
  className = '',
  href,
  icon = true,
  variant = 'primary',
  ...props
}) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  )
}

export default Button
