import React from 'react'
import styled, {createGlobalStyle,ThemeProvider} from 'styled-components';
import GlobalFonts from './fonts/Fonts.js';


const GlobalStyled = createGlobalStyle `
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box ;
}
`
const theme = {
 objColors:{
  Beige: '#F5F5DC',
  Bisque: '#FFE4C4',
  Black: '#000000',
  BlanchedAlmond: '#FFEBCD',
  Blue: '#0000FF',
  BlueViolet: '#8A2BE2',
  Brown: '#A52A2A',
  BurlyWood: '#DEB887',
  CadetBlue: '#5F9EA0',
  Chartreuse: '#7FFF00',
  Chocolate: '#D2691E',
  Coral: '#FF7F50',
  CornflowerBlue: '#6495ED',
}, 
}

const StyledProvider =({children})=>{
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyled/>
     {children} 
    </ThemeProvider>
    )
}

export default StyledProvider;