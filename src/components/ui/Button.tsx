import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-terracotta)]';
  const primaryStyles =
    'bg-[var(--color-terracotta)] text-white hover:bg-[#b06a4d] shadow-md hover:shadow-lg';
  const secondaryStyles =
    'border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white';

  const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  if (href) {
    return (
      <Link to={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
