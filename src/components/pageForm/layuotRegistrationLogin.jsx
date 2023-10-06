import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import styled from 'styled-components';
import LinkRegistrationLogin from './pageForm/LinkRegistrationLogin.jsx'
import O_site from './o_site.jsx'


const SLoyuotApp = styled.div`
grid-area: 1/1/13/13;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background: gold;
`


const LoyuotApp = () => (
  <SLoyuotApp> 
 <Routes>
  <Route path='/' element={<FormaLogin/>}/>
 </Routes> 
 <Outlet/>
 <O_site/>
  </SLoyuotApp>
);

export default LoyuotRegistrationLogin;
