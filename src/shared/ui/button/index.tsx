"use client";

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
  useState
} from 'react'

import { clsx } from 'clsx'

import './button.scss'

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

export type ButtonVariant = 'primary' | 'outlined'

export interface ButtonProps extends DefaultButtonProps {
  fullWidth?: boolean
  /** "primary" | "outlined" */
  variant?: ButtonVariant
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ className, fullWidth, variant = 'primary', ...rest }, ref) => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
      setIsTouchDevice('ontouchstart' in document.documentElement);
    }, []);

    const classNames = {
      root: clsx(
        `yoqi_button_${variant}`,
        isTouchDevice && `yoqi_button_${variant}_touchable`,
        fullWidth && 'fullWidth',
        className
      ),
    }

    return <button className={classNames.root} {...rest} ref={ref} />
  }
)

Button.displayName = 'Button'
