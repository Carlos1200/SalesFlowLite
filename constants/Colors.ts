/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'; // Acqua blue
const tintColorDark = '#4fd1c5';  // Soft teal

export const Colors = {
  light: {
    text: '#22223b', // Deep blue-gray
    textSecondary: '#4a5568', // Muted gray
    background: '#f7fafc', // Very light gray
    backgroundSecondary: '#e2e8f0', // Soft gray for cards
    tint: tintColorLight,
    accent: '#ffb703', // Warm accent (yellow/orange)
    icon: '#687076',
    tabIconDefault: '#a0aec0',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#f8f8f2', // Light for dark mode
    textSecondary: '#a0aec0', // Muted gray
    background: '#232946', // Deep blue
    backgroundSecondary: '#393e46', // Slightly lighter for cards
    tint: tintColorDark,
    accent: '#ffb703', // Same accent for consistency
    icon: '#a0aec0',
    tabIconDefault: '#a0aec0',
    tabIconSelected: tintColorDark,
  },
};