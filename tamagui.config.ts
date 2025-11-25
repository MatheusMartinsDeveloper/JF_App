import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui, createFont } from 'tamagui';

const interFont = createFont({
  family: 'Inter',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32 
  },
  weight: {
    1: '400',
    2: '500',
    3: '600',
    4: '700'
  },
  letterSpacing: {
    1: 0,
    2: 0.25,
    3: 0.5
  },
  face: {
    400: { normal: 'Inter' },
    500: { normal: 'InterMedium' },
    600: { normal: 'InterSemiBold' }
  }
});

const poppinsFont = createFont({
  family: 'Poppins',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 44
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32 
  },
  weight: {
    1: '400',
    2: '500',
    3: '600',
    4: '700'
  },
  letterSpacing: {
    1: 0,
    2: 0.25,
    3: 0.5
  },
  face: {
    400: { normal: 'Poppins' },
    500: { normal: 'PoppinsMedium' },
    600: { normal: 'PoppinsSemiBold' }
  }
});

export const tokens = {
  color: {
    // Primary
    primary: '#F15143',
    primaryLight: '#FF7B6B',
    primaryDark: '#B5362D',
    backgroundOpacity: "rgba(239, 239, 239, 0.50)",
    backgroundOpacitySuccess: 'rgba(62, 185, 128, 0.30)',

    // Secondary
    secondary: '#4CAEF0',
    secondaryLight: '#79C9FF',
    secondaryDark: '#1F7FBD',

    // Neutrals
    gray50: '#F8F8F8',
    gray100: '#efefefff',
    gray200: '#DFDFDF',
    gray300: '#C8C8C8',
    gray400: '#A4A4A4',
    gray500: '#7A7A7A',
    gray600: '#555555',
    gray700: '#3A3A3A',
    gray800: '#222222',
    gray900: '#111111',

    // Feedback
    success: '#3EB97F',
    warning: '#F8C045',
    error: '#E63946',
    info: '#3A86FF',

    // Required
    background: '#FFFFFF',
    backgroundSoft: '#F8F8F8',
    text: '#222222',
    textSoft: '#555555',
    border: '#E0E0E0',
  },

  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    true: 16
  },

  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    round: 9999,
    true: 8
  },

  size: {
    0: 0,
    1: 24,
    2: 32,
    3: 40,
    4: 48,
    5: 56,
    6: 64,
    true: 40
  },

  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    max: 999,
  },
};

export const themes = {
  light: {
    background: '$background',
    backgroundStrong: '$gray50',
    backgroundHover: '$gray100',

    color: '$text',
    colorSoft: '$textSoft',

    borderColor: '$border',

    // Primary mappings
    primary: '$primary',
    primaryHover: '$primaryLight',
    primaryPress: '$primaryDark',

    // Secondary
    secondary: '$secondary',
    secondaryHover: '$secondaryLight',
    secondaryPress: '$secondaryDark',

    // Feedback
    success: '$success',
    warning: '$warning',
    error: '$error',
    info: '$info',
  },
};

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    ...tokens
  },
  fonts: {
    ...defaultConfig.fonts,
    body: interFont,
    heading: poppinsFont
  },
  themes: {
    ...defaultConfig.themes,
    ...themes
  },
});

export default tamaguiConfig

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}