import React from "react";
//import { Routes, Route, Outlet} from "react-router-dom";
import styled from 'styled-components';


const SO_site= styled.div`
grid-area: 1/1/5/13;
/*display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);*/
background: gold;
& h1{
  text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
  font-family: 'tucsononewoff2';
}
& p{
  text-wrap:balance;
}
`


const O_site = () => (
  <SO_site> 
  <h1> react pwa</h1>
<p>О сайте.... 
</p>
  </SO_site>
);

export default O_site;
