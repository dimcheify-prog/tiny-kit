// Test component

import css from './Title.module.css';

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className={css.title}>{children}</h1>;
};
