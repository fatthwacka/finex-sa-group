import Link from 'next/link';
import { Apple, Play } from 'lucide-react';

interface AppStoreBadgesProps {
  appStoreUrl?: string | null;
  playStoreUrl?: string | null;
  size?: 'sm' | 'md' | 'lg';
}

export default function AppStoreBadges({
  appStoreUrl,
  playStoreUrl,
  size = 'md',
}: AppStoreBadgesProps) {
  const sizeStyles = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const hasAppStore = appStoreUrl && appStoreUrl.length > 0;
  const hasPlayStore = playStoreUrl && playStoreUrl.length > 0;

  if (!hasAppStore && !hasPlayStore) {
    return (
      <div className="flex flex-wrap gap-5">
        <div
          className={`inline-flex items-center gap-2 bg-[var(--color-dark-grey)] text-[var(--color-mid-grey)] rounded-lg ${sizeStyles[size]} opacity-50 cursor-not-allowed`}
        >
          <Apple className={iconSizes[size]} />
          <div className="text-left">
            <div className="text-[0.65em] opacity-70">Download on the</div>
            <div className="font-semibold -mt-0.5">App Store</div>
          </div>
        </div>
        <div
          className={`inline-flex items-center gap-2 bg-[var(--color-dark-grey)] text-[var(--color-mid-grey)] rounded-lg ${sizeStyles[size]} opacity-50 cursor-not-allowed`}
        >
          <Play className={iconSizes[size]} />
          <div className="text-left">
            <div className="text-[0.65em] opacity-70">Get it on</div>
            <div className="font-semibold -mt-0.5">Google Play</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5">
      {hasAppStore && (
        <Link
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 bg-white text-[var(--color-black)] rounded-lg hover:opacity-90 transition-opacity ${sizeStyles[size]}`}
        >
          <Apple className={iconSizes[size]} />
          <div className="text-left">
            <div className="text-[0.65em] opacity-70">Download on the</div>
            <div className="font-semibold -mt-0.5">App Store</div>
          </div>
        </Link>
      )}
      {hasPlayStore && (
        <Link
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 bg-white text-[var(--color-black)] rounded-lg hover:opacity-90 transition-opacity ${sizeStyles[size]}`}
        >
          <Play className={iconSizes[size]} />
          <div className="text-left">
            <div className="text-[0.65em] opacity-70">Get it on</div>
            <div className="font-semibold -mt-0.5">Google Play</div>
          </div>
        </Link>
      )}
    </div>
  );
}
