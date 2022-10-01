import { themes } from '@src/global-constants';
import { getLightThemeStyles } from '@src/themes/lightTheme';
import { getDarkThemeStyles } from '@src/themes/darkTheme';

export const getTheme = (name) => {
  switch (name) {
    case themes.dark:
      return getDarkThemeStyles();
    case themes.light:
      return getLightThemeStyles();
    default:
      return getDarkThemeStyles();
  }
};