/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles.js';
import darkMode from "../../components/DarkMode";

export function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

export function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

export default function App() {
  return (
    <div>
      <div className="App">
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a onClick={closeNav}> Pagrindinis </a>
          <a onClick={closeNav}>Kategorijos</a>
          <a onClick={closeNav}>Ivykiai</a>
          <a onClick={closeNav}>Kalendorius</a>
          <a onClick={closeNav}>Kontaktynas</a>
          <a className="sliderbox">
            <div> Tamsusis režimas</div>
            <label className="switch">
              <input id="sliderid" type="checkbox" onChange={darkMode} />
              <span className="slider round"/>
            </label>
          </a>
        </div>

        <div id="main">
          <div className="top-bar">
            <div className="top-bar-col-1">
              <a onClick={openNav}>Meniu</a>
            </div>
            <div className="top-bar-col-2"/>
            <div className="top-bar-col-3">
              {/*<div className="dropdown">*/}
              {/*  <a className="dropbtn">Prisijungti</a>*/}
              {/*  /!*<div className="dropdown-content">*!/*/}
              {/*  /!*  <form>*!/*/}
              {/*  /!*    <input id="login-email" placeholder="El. pašto adresas" type="email"/>*!/*/}
              {/*  /!*    <input id="password" placeholder="Slaptažodis" type="password"/>*!/*/}
              {/*  /!*    /!*<button type={onsubmit}>Prisijungti</button>*!/*!/*/}
              {/*  /!*  </form>*!/*/}
              {/*  /!*</div>*!/*/}
              {/*</div>*/}
            </div>
          </div>

          <div className="footer">
            {/* <p> 2019 INFONIMAS. Visos teisės saugomos.</p> */}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        {/* <Route exact path="/categories" component={} /> */}
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route component={NotFoundPage}/>
      </Switch>
      <GlobalStyle/>
    </div>
  );
}
