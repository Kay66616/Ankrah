// constants/theme.ts
import { Appearance } from 'react-native';

const isDark = Appearance.getColorScheme() === 'dark';

const lightColors = {
  background: '#ffffff',
  surface: '#f4f4f4',
  primary: '#3366ff',
  text: '#222',
  border: '#ddd',
  bubbleOwn: '#dcf8c6',
  bubbleOther: '#e4e6eb',
};

const darkColors = {
  background: '#121212',
  surface: '#1e1e1e',
  primary: '#4f9fff',
  text: '#eee',
  border: '#333',
  bubbleOwn: '#2e8b57',
  bubbleOther: '#2d2d2d',
};

export const colors = isDark ? darkColors : lightColors;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};

export const fonts = {
  size: {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 26,
  },
  weight: {
    normal: '400', // ✅ keep as string
    bold: '700',
  },
};

export const theme = {
  colors,
  spacing,
  fonts,
  isDark,
};
