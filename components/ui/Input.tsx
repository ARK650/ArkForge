import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const baseInputStyles =
  'w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200';

const labelStyles = 'block text-sm font-medium text-text-primary mb-2';
const errorStyles = 'text-red-400 text-sm mt-1';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="mb-4">
        <label htmlFor={inputId} className={labelStyles}>
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`${baseInputStyles} ${error ? 'border-red-400' : ''} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="mb-4">
        <label htmlFor={selectId} className={labelStyles}>
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`${baseInputStyles} ${error ? 'border-red-400' : ''} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${selectId}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="mb-4">
        <label htmlFor={textareaId} className={labelStyles}>
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={`${baseInputStyles} min-h-[120px] resize-y ${error ? 'border-red-400' : ''} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
