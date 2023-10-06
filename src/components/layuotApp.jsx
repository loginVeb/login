import React from "react";
import { Routes, Route, Outlet, Navigate} from "react-router-dom";
import styled from 'styled-components';
import BlockRegistrationLogin from  './pageForm/blockRegistrationLogin.jsx'; 
import O_site from './o_site.jsx'


const SLoyuotApp = styled.div`
grid-area: 1/1/13/13;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background: gold;
`


const LoyuotApp = () =>{
 return (
  <SLoyuotApp> 
  <Routes>
  <Route index element={<Navigate to="../blockLogin/log" />} /> 
  </Routes>
  <O_site/>
 <BlockRegistrationLogin/>
  </SLoyuotApp>
)};

export default LoyuotApp;
