import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '');
}

export function getPhoneHref(phone: string): string {
  return `tel:${formatPhone(phone)}`;
}

export function getEmailHref(email: string): string {
  return `mailto:${email}`;
}
