import { Phone, Mail, MapPin } from 'lucide-react';
import { getPhoneHref, getEmailHref } from '@/lib/utils';

interface ContactBlockProps {
  title: string;
  phone?: string;
  email?: string;
  address?: string;
  description?: string;
}

export default function ContactBlock({
  title,
  phone,
  email,
  address,
  description,
}: ContactBlockProps) {
  return (
    <div className="card-warm h-full flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

      {description && (
        <p className="text-white/80 mb-4">{description}</p>
      )}

      <div className="space-y-3">
        {phone && (
          <a
            href={getPhoneHref(phone)}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>{phone}</span>
          </a>
        )}

        {email && (
          <a
            href={getEmailHref(email)}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>{email}</span>
          </a>
        )}

        {address && (
          <div className="flex items-start gap-3 text-white/80">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}
