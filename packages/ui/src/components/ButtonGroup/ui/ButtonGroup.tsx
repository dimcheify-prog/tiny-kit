import css from './ButtonGroup.module.css';
import { Box, BoxProps } from '@/core';
import { ElementType } from 'react';
import { Button } from '@/components/Button';
import classNames from '@/utils/classNames/classNames';

type Direction = 'horizontal' | 'vertical';

interface BaseButtonGroup {
  className: string;
  direction: Direction;
  children: Array<typeof Button>;
}

type ButtonGroupProps<C extends ElementType> = BoxProps<C, BaseButtonGroup>;

// TODO reuse Button component to create group of button with vertical and horizontal variants
export const ButtonGroup = <C extends ElementType>(
  props: ButtonGroupProps<C>,
) => {
  const { children, className, direction } = props;
  return (
    <Box
      className={classNames(css.buttonGroup, {}, [className, css[direction]])}
    >
      {children}
    </Box>
  );
};
