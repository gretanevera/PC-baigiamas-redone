import React, {useState} from 'react';
import Image from '../images/bg05.jpg';
// import { useState } from 'react';

export default function DoDarkMode(e) {
//padaryti kad perkrovus liktų darkmode
//console.log('darko initiate', e.target.checked);

let dark = e.target.checked;
if (dark === true) {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${Image}")`;
  document.body.style.color = 'white';
  document.getElementsByClassName('mainBody').style.display = 'none';
  window.sessionStorage.setItem("dark", dark);
}
else {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${Image}")`;
    document.body.style.color = 'black';
    document.getElementsByClassName('mainBody')[0].style.backgroundColor = 'lightgray';
    window.sessionStorage.setItem("dark",dark)
    //console.log('exported false', dark)
}

}
