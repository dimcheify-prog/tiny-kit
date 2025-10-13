import React, {ButtonHTMLAttributes, ReactNode} from "react";
import classNames from "@/utils/classNames/classNames";
import css from "./Button.module.css";

type VariantType = 'primary' | 'contained' | 'outlined';

type ButtonSize = 'large' | 'medium' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  variant?: VariantType
  size?: ButtonSize;
  loading?: boolean;
  loadingProps?: ReactNode;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  className,
  loading,
  loadingProps,
  variant='primary',
  size='medium',
  fullWidth=false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={
        classNames(
          css.button,
          {[css.fullWidthStyle || '']: fullWidth},
        [className, css[variant], css[size]]
        )
      }
      {...rest}
    >
      {
        (loading && loadingProps) ? loadingProps :children
      }
    </button>
  );
}