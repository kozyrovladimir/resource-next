"use client";

import React, { useState, ComponentProps, forwardRef, ReactNode } from 'react';
import { useGetId } from './useGetId';
import { clsx } from 'clsx';
import s from './input.module.scss';

export type InputProps = {
  errorMessage?: string;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  label?: ReactNode;
  onClearClick?: () => void;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  search?: boolean;
  value?: string;
} & ComponentProps<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      iconEnd,
      iconStart,
      id,
      label,
      onClearClick,
      onEnter,
      onKeyDown,
      search,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0;
    const inputId = useGetId(id);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e);
      }
      onKeyDown?.(e);
    };

    const classNames = {
      clearButton: s.clearButton,
      iconEnd: s.iconEnd,
      iconStart: s.iconStart,
      input: clsx(s.input, showError && s.error),
      inputContainer: s.inputContainer,
      root: clsx(s.box, className),
      label: s.label,
      errorBox: s.errorBox,
      error: s.error,
    };

    return (
      <div className={classNames.root}>
          {label && isFocused && (
            <label className={s.label} htmlFor={inputId}>
              {label}
            </label>
          )}
        <div className={classNames.inputContainer}>
          {iconStart && <div className={classNames.iconStart}>{iconStart}</div>}
          <input
            placeholder={label as string}
            className={classNames.input}
            id={inputId}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            ref={(inputElement) => {
              if (typeof ref === 'function') {
                ref(inputElement as HTMLInputElement);
              } else if (ref) {
                ref.current = inputElement as HTMLInputElement;
              }
            }}
            {...rest}
          />
          {iconEnd && <div className={classNames.iconEnd}>{iconEnd}</div>}
        </div>
        <div className={classNames.errorBox}>
          {showError && <div className={classNames.error}>{errorMessage}</div>}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
