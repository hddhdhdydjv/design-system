import React from 'react';
import './Button.css';

export type ButtonHierarchy =
  | 'primary'
  | 'secondary-color'
  | 'secondary-gray'
  | 'tertiary-color'
  | 'tertiary-gray'
  | 'link-color'
  | 'link-gray';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ButtonProps = {
  children?: React.ReactNode;
  hierarchy?: ButtonHierarchy;
  size?: ButtonSize;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  dotLeading?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
};

export function Button({
  children,
  hierarchy = 'primary',
  size = 'md',
  iconLeading,
  iconTrailing,
  dotLeading = false,
  iconOnly = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${size}`,
    `btn--${hierarchy}`,
    iconOnly ? 'btn--icon-only' : '',
    loading ? 'btn--loading' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
    >
      {loading && (
        <span className="btn__spinner" aria-hidden="true" />
      )}
      {!loading && dotLeading && (
        <span className="btn__dot" aria-hidden="true" />
      )}
      {!loading && iconLeading && (
        <span className="btn__icon btn__icon--leading" aria-hidden="true">
          {iconLeading}
        </span>
      )}
      {!iconOnly && <span className="btn__label">{children}</span>}
      {iconOnly && children}
      {!loading && iconTrailing && (
        <span className="btn__icon btn__icon--trailing" aria-hidden="true">
          {iconTrailing}
        </span>
      )}
    </button>
  );
}

export default Button;
