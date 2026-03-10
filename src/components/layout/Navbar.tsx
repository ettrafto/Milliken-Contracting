import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] transition-colors"
          >
            Jorgen Construction
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[var(--color-terracotta)]'
                      : 'text-[var(--color-text)] hover:text-[var(--color-terracotta)]'
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
            className="md:hidden p-2 text-[var(--color-charcoal)]"
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
          <ul className="md:hidden py-4 border-t border-[var(--color-border)]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block py-3 text-base font-medium ${
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
