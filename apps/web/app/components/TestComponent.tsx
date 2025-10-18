'use client';

import {Button} from "@dimcheify/tiny-kit";
import {useEffect, useRef} from "react";

export const TestComponent = () => {
  const r = useRef(null);

  useEffect(() => {
    if (r?.current) {
      console.log(r);
    }
  }, [r]);
  return (
    // пример использования: мы имеем возмодность прокинуть параметры компонента, поменять сам компонент и прокинуть атрибуты, соответствующие выбранному компоненту
    <Button ref={r} component={'a'} variant={'outlined'} >MyButton</Button>
  );
};
