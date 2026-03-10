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
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-terracotta)] tracking-wide';
  const primaryStyles =
    'px-10 py-3.5 bg-[var(--color-terracotta)] text-white hover:bg-[#A88B3A] shadow-md hover:shadow-md';
  const secondaryStyles =
    'px-8 py-3 border-2 border-[var(--color-metallic-blue)] text-[var(--color-metallic-blue)] hover:bg-[var(--color-metallic-blue)] hover:text-white';

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
