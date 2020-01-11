import React from 'react';
import Image from "bg05.jpg";

export default function darkMode() {

  if ((document.body.style.backgroundImage === `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${Image}")`)
    && (document.body.style.color = 'white') )
  {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${Image}")`;
    document.body.style.color = 'black';
    document.getElementsByClassName('mainBody')[0].style.backgroundColor = 'lightgray';
  } else {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${Image}")`;
    document.body.style.color = 'white';
    document.getElementsByClassName('mainBody')[0].style.backgroundColor = 'transparent';
  }
}
