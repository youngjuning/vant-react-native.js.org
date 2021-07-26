import { StyleSheet } from 'react-native';
// Color Palette
// 色彩, NOTE: must use `#000000` instead of `#000`
// https://facebook.github.io/react-native/docs/colors.html
// 8-digit-hex to 4-digit hex https://css-tricks.com/8-digit-hex-codes/
// https://www.chromestatus.com/feature/5685348285808640 chrome will support `#RGBA`s

/**
 * Base Colors
 */
const colors = {
  black: '#000000',
  white: '#ffffff',
  'gray-1': '#f7f8fa',
  'gray-2': '#f2f3f5',
  'gray-3': '#ebedf0',
  'gray-4': '#dcdee0',
  'gray-5': '#c8c9cc',
  'gray-6': '#969799',
  'gray-7': '#646566',
  'gray-8': '#323233',
  red: '#ee0a24',
  blue: '#1989fa',
  orange: '#ff976a',
  'orange-dark': '#ed6a0c',
  'orange-light': '#fffbe8',
  green: '#07c160',
};

/**
 * TODO: Gradient Colors
 */
const gradientColors = {
  'gradient-red': '',
  'gradient-orange': '',
};

/**
 * Component Colors
 */
const componentColors = {
  'primary-color': colors.blue,
  'success-color': colors.green,
  'danger-color': colors.red,
  'warning-color': colors.orange,
  'text-color': colors['gray-8'],
  'active-color': colors['gray-2'],
  'active-opacity': 0.7,
  'disabled-opacity': 0.5,
  'background-color': colors['gray-1'],
  'background-color-light': '#fafafa',
  'text-link-color': '#576b95',
};

const paddingBase = 4;
/**
 * Padding
 */
const padding = {
  'padding-base': paddingBase,
  'padding-xs': paddingBase * 2,
  'padding-sm': paddingBase * 3,
  'padding-md': paddingBase * 4,
  'padding-lg': paddingBase * 6,
  'padding-xl': paddingBase * 8,
};

/**
 * Font
 */
const font = {
  'font-size-xs': 10,
  'font-size-sm': 12,
  'font-size-md': 14,
  'font-size-lg': 16,
  'font-weight-bold': 500,
  'line-height-xs': 14,
  'line-height-sm': 18,
  'ine-height-md': 20,
  'line-height-lg': 22,
};

/**
 * Animation
 */
export const animation = {
  'animation-duration-base': '0.3s',
  'animation-duration-fast': '0.2s',
  'animation-timing-function-enter': 'ease-out',
  'animation-timing-function-leave': 'ease-in',
};

export const border = {
  'border-color': colors['gray-3'],
  'border-width-base': 1,
  'border-width-hairline': StyleSheet.hairlineWidth,
  'border-radius-sm': 2,
  'border-radius-md': 4,
  'border-radius-lg': 8,
  'border-radius-max': 999,
};

// vant 定制主题
// https://youzan.github.io/vant/#/zh-CN/theme
export default {
  ...colors,
  ...gradientColors,
  ...componentColors,
  ...padding,
  ...font,
  ...animation,
  ...border,
};
