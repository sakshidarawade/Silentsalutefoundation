import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
}

/** Compatibility link used by the migrated Next.js components. */
export default function Link({ href, children, ...props }: LinkProps) {
  return <RouterLink to={href} {...props}>{children}</RouterLink>;
}
