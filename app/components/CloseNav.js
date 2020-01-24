import React from 'react';

export  function CloseNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementsByClassName('menuName')[0].style.display = 'block';
  
  }