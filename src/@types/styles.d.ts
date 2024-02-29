import 'styled-components'
import { darkTheme } from '../assets/styles/themes/darkTheme'

type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeType {}
}