'use client';

import { Button, useTheme } from '@dimcheify/tiny-kit';

export const TestComponent = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <Button variant={'contained'} onClick={setTheme}>
        Toggle theme
      </Button>
      <Button component={'a'} variant={'outlined'}>
        MyButton
      </Button>
    </>
  );
};
