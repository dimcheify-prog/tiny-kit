import {ComponentPropsWithRef, ElementType, PropsWithChildren} from "react";

type PropsWithComponent<C extends ElementType> = {
  component?: C,
};

export type BoxProps<C extends ElementType, P = {}> = PropsWithChildren &
  PropsWithComponent<C> &
  Omit<ComponentPropsWithRef<C>, keyof PropsWithComponent<C> & keyof P> &
  P;

export function Box<C extends ElementType = 'div', P = {}>({
  children, component, ...rest
  }: BoxProps<C, P>) {
  const Component = component || 'div';
  return <Component {...rest}>{children}</Component>
}
