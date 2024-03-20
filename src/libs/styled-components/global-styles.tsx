import { createGlobalStyle } from 'styled-components'
import '../../assets/font/index.css'
import { COLOR, FONT_SIZE, FONT_WEIGHT } from './token'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
      }
    
    background-color: transparent;
    color: ${COLOR.grayScale[0]};

    font-family: 'SCDream';
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.light};
  }

  html {
    font-size: 50%;
    background-color: ${COLOR.grayScale[1500]};
  }

  ul, li {
    list-style: none;
  }

  h1 {
    font-size: ${FONT_SIZE.hg};
    font-weight: ${FONT_WEIGHT.bold};
  }

  h2 {
    font-size: ${FONT_SIZE.hg};
    font-weight: ${FONT_WEIGHT.bold};
  }

  h2 {
    font-size: ${FONT_SIZE.hg};
    font-weight: ${FONT_WEIGHT.bold};
  }

  h3 {
    font-size: ${FONT_SIZE.hg};
    font-weight: ${FONT_WEIGHT.bold};
  }

  h4 {
    font-size: ${FONT_SIZE.hg};
    font-weight: ${FONT_WEIGHT.bold};
  }

  button {
    border: none;
  }

  input {
    outline: none;
  }

  p, span, textarea {
    font-size: ${FONT_SIZE.sm};
  }
`
