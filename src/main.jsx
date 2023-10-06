import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx';
import  StyledProvider from './styledTheme.jsx'
import {BrowserRouter} from "react-router-dom";
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  
  <StyledProvider>
  <App/>
  </StyledProvider>
  
  </BrowserRouter>
  </React.StrictMode>,
)
