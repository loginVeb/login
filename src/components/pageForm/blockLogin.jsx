import React from "react";
import { Routes, Route, Outlet, NavLink, Link} from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const SBlockLogin = styled.div`
grid-area: 1/1/13/13;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background : #eaf0f2cb ;
border:solid 2px black ;
border-radius: 5px;
`
const SFormaLogin = styled.form`
grid-area: 2/2/10/12;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);

& h2{
  grid-area: 1/1/2/13;
  text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
}
`
const InputNik = styled.input`
 grid-area: 3/1/5/13;
 border:solid 2px black ;
 border-radius: 5px;
`
const InputPassword = styled.input`
 grid-area: 6/1/8/13;
 border:solid 2px black ;
 border-radius: 5px;
`
const SLink = styled(Link)`
grid-area: 10/4/12/9;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
`
const SButton = styled.button`
grid-area: 1/5/13/9;
width:100px;
height:30px;
border-radius:5px;
color: black ;
background:#6cd76d;
text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
 
`

const SNavLinkFormaRegistration = styled(NavLink)`
grid-area: 11/2/12/12;
text-decoration: none ;
margin-top: 20px;
font-size: 12px;
color: black ;
text-wrap:balance;
  max-inline-size:100ch;
  text-align:center;
  margin: 0 auto;
 &.active {
    color: red;
  }
`

const BlockLogin= () => {
  let [state , setState] = React.useState([]);
  
  let [textName, setTextName] = React.useState('');
let [textPass, setTextPass] = React.useState('');

  

React.useEffect(()=>{
 const port =  'https://server-delta-beige.vercel.app/' ;
  let data =  axios.get(port, {withcredentials:true });
  data.then((res) => {
   alert(res.data);
    if( res.data === '' || res.data === null || res.data === undefined){
      setState([
        {name:'x',password:1},
        {name:'xx',password:2}
      ])
    }else{
    setState(res.data);
    }
  });
 // console.log(state[0].name);
}, []);


//let indexName;

let CurrentTextName = (e)=>{
  setTextName(e.target.value)
 };
let CurrentTextPass = (e)=>{
  setTextPass(e.target.value)
 };



const isDan = ()=>{
  let index = state.findIndex(x => x.name === textName );
  
  let auth;
  if(!-1){
    auth =  state[index].password == textPass;
  }else{
    auth = 'неправильно';
  }
   
 
  
if (auth) {
  console.log(`с возращением ${index} `);
  alert(`с возращением ${auth}`);
} else {
  console.log(`таких нет ${index}  `);
  alert(`таких нет ${index} ` );
}
};

  return (
 <SBlockLogin> 
   <SFormaLogin>
   <h2>вход на сайт</h2>

   <InputNik type='text' 
   placeholder="ведите ник" 
   name='name'
   value={textName} 
   onChange={CurrentTextName}
   autoComplete="off"/>

   <InputPassword type='text' placeholder="ведите пароль" autoComplete="off"
   onChange={CurrentTextPass}
   name='password' 
   value={textPass} />
   
   <SLink>
    <SButton type='submit' onClick={
      isDan
    } >
     Войти 
    </SButton>
    </SLink>
   </SFormaLogin>
   
   <SNavLinkFormaRegistration to={"../../blockRegistration/reg"}>
   регистрация 
  </SNavLinkFormaRegistration>
  
</SBlockLogin>
)};

export default BlockLogin;


// npm run x
// git add ./
// git commit -am '
//  git push
// git log
// git stash
// git push -f origin HEAD^:main 
// npm run build
// Удолить локально коммит 
// git reset HEAD~ 