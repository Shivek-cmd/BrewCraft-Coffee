'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type Size    = 'sm' | 'md' | 'lg' | 'xl'

const variants: Record<Variant, string> = {
  primary:   'bg-primary hover:bg-[var(--color-primary-hover)] text-bg shadow-md hover:shadow-glow',
  secondary: 'bg-bg-elevated text-text border border-border hover:border-[var(--color-border-hover)]',
  ghost:     'bg-transparent text-muted hover:text-text hover:bg-bg-secondary',
  outline:   'bg-transparent border border-primary text-primary hover:bg-primary hover:text-bg',
  danger:    'bg-error text-white hover:opacity-90',
}

const sizes: Record<Size, string> = {
  sm: 'h-8  px-4  text-sm  rounded-full gap-1.5',
  md: 'h-11 px-6  text-base rounded-full gap-2',
  lg: 'h-13 px-8  text-base rounded-full gap-2',
  xl: 'h-16 px-12 text-lg   rounded-full gap-3',
}

interface ButtonProps {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export default function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-[250ms] cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variants[variant], sizes[size], className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
