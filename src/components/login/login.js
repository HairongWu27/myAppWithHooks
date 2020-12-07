import React from 'react';
import Login2 from './login2';

function Login(props) {
  //matchAll
    // const string = "Email: john@gmail.com mary@gmail.com";
    // //const regex = /\b([a-z0-9]*)@([a-z0-9\.]*)\b/gi;
    // const regex = /\b(?<name>[a-z0-9]*)@(?<domain>[a-z0-9\.]*)\b/gi;
    // for(const matchAll of string.matchAll(regex)){
    //   console.log(matchAll);
    // }

  //dynamic import
  // const x = Number.MAX_SAFE_INTEGER + 1;
  // const y = Number.MAX_SAFE_INTEGER + 2;
  // console.log(1n +1n);
  // console.log(2n +2n);
  const promise1 = Promise.resolve("first resolve");
  const promise2 = Promise.reject("rejected");
  const promise3 = Promise.resolve("solve again");
  Promise.allSettled([promise1, promise2, promise3]).then( a => console.log(a));
    return (<h1>please login {props.match.params.username}!</h1>);
  }
// async Login => (props) => {
//   //const moduleLogin2 = './login2.js';
//   const module = await import('./login2.js');
//   return module.Login2();
// };

export default Login;