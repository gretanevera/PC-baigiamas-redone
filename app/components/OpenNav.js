import React from 'react';

export  function OpenNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementsByClassName('menuName')[0].style.display = 'none';
  }
  
 