import classNames from './classNames';
import { expect, test } from 'vitest';

test('Test classes from classNames', () => {
  expect(classNames('class1', {}, [])).toBe('class1');

  expect(classNames('class1', { class2: true, class3: false }, [])).toBe(
    'class1 class2'
  );

  expect(
    classNames('class1', { class2: true, class3: false }, ['class4', 'class5'])
  ).toBe('class1 class2 class4 class5');
});
