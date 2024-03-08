import 'styled-components'
import { darkTheme } from '../styles/themes/darkTheme'

type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeType {}
}