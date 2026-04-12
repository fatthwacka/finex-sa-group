import { Shield } from 'lucide-react';

interface RegulatoryBadgeProps {
  type: 'fsp' | 'sarb';
  value: string;
}

export default function RegulatoryBadge({ type, value }: RegulatoryBadgeProps) {
  const labels = {
    fsp: 'Financial Service Provider',
    sarb: 'SARB Authorised',
  };

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-surface-alt)] rounded-lg border border-[var(--color-border)]">
      <Shield className="w-5 h-5 text-[var(--color-cyan)]" />
      <div>
        <div className="text-xs text-[var(--color-text-secondary)]">{labels[type]}</div>
        <div className="text-sm font-medium text-[var(--color-text-primary)]">{value}</div>
      </div>
    </div>
  );
}
