import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, companyInfo } from '../../data';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-3 md:gap-3.5 font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-metallic-blue)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            <img
              src="/images/other/logo.png"
              alt=""
              className="h-9 w-auto md:h-11 object-contain shrink-0"
            />
            <span>{companyInfo.name}</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-[0.9375rem] font-medium tracking-[var(--tracking-wide)] transition-colors ${
                    location.pathname === item.href
                      ? 'text-[var(--color-terracotta)]'
                      : 'text-[var(--color-text)] hover:text-[var(--color-terracotta)] hover:opacity-80'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-[var(--color-metallic-blue)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <ul className="md:hidden py-4 border-t border-[var(--color-border)] space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block py-4 text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-[var(--color-terracotta)]'
                      : 'text-[var(--color-text)]'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
