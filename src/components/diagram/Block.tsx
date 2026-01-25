interface BlockProps {
  title: string
  description?: string
  highlighted?: boolean
}

export function Block({
  title,
  description,
  highlighted = false
}: BlockProps) {
  return (
    <div
      className={[
        'rounded-lg border px-6 py-4 text-center',
        highlighted ? 'border-primary bg-primary/5' : 'border-border bg-background'
      ].filter(Boolean).join(' ')}
    >
      <div className="text-sm font-medium text-primary">
        {title}
      </div>

      {description && (
        <div className="mt-2 text-xs text-secondary">
          {description}
        </div>
      )}
    </div>
  )
}
