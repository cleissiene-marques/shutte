type IconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export function WhatsAppIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={width} height={height} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} width={width} height={height} aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CheckIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} width={width} height={height} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ArrowRightIcon({ className, width = 16, height = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} width={width} height={height} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function CloseIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function LogoMarkIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" className={className} width={width} height={height}>
      <path d="M5 18v-4" />
      <path d="M12 18V9" />
      <path d="M19 18V6" />
    </svg>
  );
}

export function EmailIcon({ className, width = 22, height = 22 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function HelpCircleIcon({ className, width = 22, height = 22 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function MedalIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h2a2 2 0 0 1 2 2 4 4 0 0 1-4 4" />
      <path d="M7 5H5a2 2 0 0 0-2 2 4 4 0 0 0 4 4" />
    </svg>
  );
}

export function ShieldCheckIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M12 2 4 5v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function GaugeIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="m13.6 13.6 3-3" />
      <path d="M3 20a9 9 0 0 1 18 0" />
    </svg>
  );
}

export function HeadsetIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z" />
    </svg>
  );
}

export function ScaleIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="m5 7 4-2 4 2" />
      <path d="m11 7 4-2 4 2" />
      <path d="M3 7h4l-2 5a2 2 0 0 1-4 0Z" />
      <path d="M13 7h4l-2 5a2 2 0 0 1-4 0Z" />
    </svg>
  );
}

export function ListCheckIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width={width} height={height} aria-hidden="true">
      <path d="m3 8 1.5 1.5L7 7" />
      <path d="m3 15 1.5 1.5L7 14" />
      <path d="M11 8h10" />
      <path d="M11 15h10" />
    </svg>
  );
}

export function StarIcon({ className, width = 14, height = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width={width} height={height} aria-hidden="true">
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8-5.2-4.7 6.9-.7z" />
    </svg>
  );
}
