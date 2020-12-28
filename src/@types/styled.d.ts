import 'styled-components';
import { defaultTheme } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultTheme.colors;
  }
}
