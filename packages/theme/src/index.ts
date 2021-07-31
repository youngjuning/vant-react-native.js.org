import React from 'react';
import { createTheming } from 'theming';
import { default as defaultTheme } from './default';

export const themes = {
  default: defaultTheme,
};
export * from './Theme';

const context = React.createContext(defaultTheme);
const theming = createTheming(context);

export const { ThemeProvider, withTheme, useTheme } = theming;
