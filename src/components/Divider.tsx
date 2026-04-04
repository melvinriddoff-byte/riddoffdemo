interface DividerProps {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`container-wide ${className}`}>
      <div className="divider" />
    </div>
  )
}
