import React from 'react'
import styled from 'styled-components';
import GlobalFonts from './fonts/Fonts.js';
import { device } from './@media';
import { Routes, Route, Outlet} from "react-router-dom";
import LayuotApp from './components/layuotApp.jsx';




const SApp = styled.div`
display: grid;
background: gold;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 75px);
font-family: 'TopSecretWoff2' ; 
@media ${device.mobileM} { 
  grid-template-rows:repeat(12, 75px);
font-family: 'TopSecretWoff2' ;
border:solid 1px black ;
}
`

function App() {
  return (
    <SApp >
      <GlobalFonts />
      <Routes>
        {['blockRegistration/*', 'blockLogin/*', '/'].map((path, index) => {
          return (
            <Route path={path} key={index} element={<LayuotApp />} />
          )
        })}
      </Routes>
      <Outlet />
    </SApp>
  )
}
export default App