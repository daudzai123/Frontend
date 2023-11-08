import { Theme } from '@/common/interfaces';
import { cookies } from 'next/headers';

export const getThemeCookie = (): Theme => {
  const theme = cookies()
    .getAll()
    .find(cookie => cookie.name === 'theme');

  return theme?.value as Theme;
};
