import React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import styled from 'styled-components';



const SBlockRegistration = styled.div`
grid-area: 1/1/13/13;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background : #eaf0f2cb ;
border:solid 1px black ;
border-radius:5px;
`
const SFormaRegistration = styled.form`
grid-area: 2/2/10/12;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);

& h4{
  grid-area: 1/1/2/13;
  text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
}
`
const InputNik = styled.input`
 grid-area: 2/1/4/13;
 border:solid 2px black ;
 border-radius: 5px;
 & :hover {
  background : #ef00ff;
} 
`
const InputPassword = styled.input`
 grid-area: 5/1/7/13;
 border:solid 2px black ;
 border-radius: 5px;
`
const InputPasswordConfirm = styled.input`
 grid-area: 8/1/10/13;
 border:solid 2px black ;
 border-radius: 5px;
`

const SButton = styled.button`
grid-area: 11/2/13/12;
width:150px;
height:30px;
border-radius:5px;
color: black ;
background:#6cd76d;
text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
`

const SNavLinkFormaLogin = styled(NavLink)`
grid-area: 11/2/12/12;
text-decoration: none ;
margin-top: 20px;
font-size: 12px;
color: black ;

text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
`


const BlockRegistration = () => {
  return (
  <SBlockRegistration> 
  
<SFormaRegistration>
<h4>Создать пользователя</h4>
   <InputNik type='text' placeholder="ведите ник"/>
   <InputPassword type='password' placeholder="ведите пароль"/>
      <InputPasswordConfirm type='password' placeholder="повторите пароль"/>
    <SButton type='submit' >
     Зарегистрироваться
    </SButton>
</SFormaRegistration>

<SNavLinkFormaLogin to={'../'}>
Войти 
</SNavLinkFormaLogin>

</SBlockRegistration> 
)};

export default BlockRegistration;
