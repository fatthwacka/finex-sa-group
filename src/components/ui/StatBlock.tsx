interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatBlock({ value, label, description }: StatBlockProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{value}</div>
      <div className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{label}</div>
      {description && (
        <p className="text-sm text-[var(--color-text-secondary)]">{description}</p>
      )}
    </div>
  );
}
