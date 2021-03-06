import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`

/* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    /*font-family: sans-serif;*/
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;//D9E6F6;
  }
  a { color: inherit; } 

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .inConstruction {
    font-size: 0.8em;
    font-style: italic;
    
  }
  .inConstruction a {
    text-decoration: none;
  }

  .regular {
    font-size: 0.8em;
    padding-bottom: 5px;
  }
  .regular a{
    text-decoration: none;
  }
  .description{
    font-size: 0.8em;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .icon{
    display: flex;
  }
  .icon img {
    width: 16px;
    margin-right: 5px;
  }
  .icon a{
    text-decoration: none;
    font-size: 0.8em;
    display: inline-flex;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}