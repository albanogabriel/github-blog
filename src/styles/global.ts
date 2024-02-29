import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #a5a5a5 ; // 0 eixo x , 0 eixo y , 0 blur , 2px de Spread
  }

  body {
    background-color: ${props => props.theme.baseBackground};
    color: ${props => props.theme.baseTitle};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif; // font-weight: 400  , font-size: 1rem , font-family: 'Nunito', sans-serif
  }


`