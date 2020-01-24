import React from 'react';
import Image from '../images/bg05.jpg';



export default function DarkFromStorage() {
//padaryti kad perkrovus liktų darkmode

let darkFmemory = (sessionStorage.getItem("dark") == 'true');
// console.log('darko from storage initiate', darkFmemory);

if (darkFmemory === true){
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${Image}")`;
    document.body.style.color = 'white';
    // document.getElementsByClassName('mainBody').style.backgroundColor = 'transparent'
    // window.sessionStorage.setItem("dark",dark)
}


}
