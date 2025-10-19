import React, {ElementType, ReactElement} from "react";
import classNames from "@/utils/classNames/classNames";
import css from "./Button.module.css";
import {Box, BoxProps} from "@/core";

type VariantType = 'primary' | 'contained' | 'outlined';

type ButtonSize = 'large' | 'medium' | 'small';

interface BaseButtonProps {
  className?: string
  variant?: VariantType
  size?: ButtonSize;
  loading?: boolean;
  loadingProps?: ReactElement;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

type ButtonProps<C extends ElementType> = BoxProps<C, BaseButtonProps>

export const Button = <C extends ElementType = 'button'> (props: ButtonProps<C>) => {
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
    component,
    ...rest
  } = props;

  return (
    <Box
      className={
        classNames(
          css.button,
          {[css.fullWidthStyle || '']: fullWidth},
          [className, css[variant], css[size]]
        )
      }
      component={component}
      {...rest as any}
    >
      {
        (loading && loadingProps) ? <div className={css.centerElement}>{loadingProps}</div> : (
        <Box className={css.innerButton}>
          <Box className={css.startElement}>{startIcon}</Box>
          <Box component={'span'} className={css.centerElement}>{children}</Box>
          <Box className={css.endElement}>{endIcon}</Box>
        </Box>
        )
      }
    </Box>
  );
}
