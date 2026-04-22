import { cn } from '@/lib/utils'

interface ArchFrameProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  glowColor?: string
}

export default function ArchFrame({
  children,
  className,
  innerClassName,
  glowColor = 'rgba(201,168,76,0.12)',
}: ArchFrameProps) {
  return (
    <div
      className={cn('relative overflow-hidden arch-clip', className)}
      style={{
        borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
      }}
    >
      {/* Subtle inner glow at top curve */}
      <div
        className="absolute inset-x-0 top-0 h-1/3 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${glowColor}, transparent)`,
        }}
      />
      <div className={cn('w-full h-full', innerClassName)}>{children}</div>
    </div>
  )
}
