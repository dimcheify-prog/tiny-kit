// Test component

import css from "./Title.module.css";
import classNames from '@/utils/classNames/classNames';

interface TitleProps {
  children: string;
  className?: string;
}

export const Title = ({ children, className}: TitleProps) => {
  return <h1 className={classNames(css.title, {}, [className])}>{children}</h1>;
};
