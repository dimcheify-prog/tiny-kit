'use client';

import {Button} from "@dimcheify/tiny-kit";

export const TestComponent = () => {
  return (
    // пример использования: мы имеем возмодность прокинуть параметры компонента, поменять сам компонент и прокинуть атрибуты, соответствующие выбранному компоненту
    <Button component={'a'} variant={'outlined'} >MyButton</Button>
  );
};
