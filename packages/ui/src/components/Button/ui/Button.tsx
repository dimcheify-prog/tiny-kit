import React, {ButtonHTMLAttributes, ReactElement, RefObject} from "react";
import classNames from "@/utils/classNames/classNames";
import css from "./Button.module.css";

type VariantType = 'primary' | 'contained' | 'outlined';

type ButtonSize = 'large' | 'medium' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: VariantType
  size?: ButtonSize;
  loading?: boolean;
  loadingProps?: ReactElement;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

export const Button = (props: ButtonProps, ref: RefObject<HTMLButtonElement>) => {
  const {
    children,
    className,
    loading,
    loadingProps,
    startIcon,
    endIcon,
    variant='primary',
    size='medium',
    fullWidth=false,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
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
        (loading && loadingProps) ? <div className={css.centerElement}>{loadingProps}</div> : (
        <div className={css.innerButton}>
          <div className={css.startElement}>{startIcon}</div>
          <span className={css.centerElement}>{children}</span>
          <div className={css.endElement}>{endIcon}</div>
        </div>
        )
      }
    </button>
  );
}