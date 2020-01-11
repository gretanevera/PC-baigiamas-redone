import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from "../HomePage/Loadable";
import NotFoundPage from '../NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import darkMode from "../../components/DarkMode";
import ContactPage from '../ContactPage/Loadable'
import CategoryPage from '../CategoryPage/Loadable';
import EventPage from "../EventPage/Loadable";
import logo from "../../images/logo.png";
import {config, db} from 'codemash';


config.init({
  projectId: 'f3d41878-d3d0-4b4e-9de9-26740ddbbf67',
  secretKey: 'rwMxs3DpujYvq8zpBOJ26eONZnIwPavy'
});


export function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.getElementsByClassName('menuName')[0].style.display = 'none';
}

export function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.getElementsByClassName('menuName')[0].style.display = 'block';

}

export default function App() {
  const logoStyle = {
    margin: '2px',
    width: '50px'
  };
  return (
    <div>
      <div className="App">
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to={'/'} onClick={closeNav}>Pagrindinis</Link>
          <Link to={'/categories'} onClick={closeNav}>Kategorijos</Link>
          <Link to={'/events'} onClick={closeNav}>Įvykiai</Link>
          <Link to={'/calendar'} onClick={closeNav}>Kalendorius</Link>
          <Link to={'/contacts'} onClick={closeNav}>Kontaktai</Link>

          <a className="sliderbox">
            <div> Tamsusis režimas</div>
            <label className="switch">
              <input id="sliderid" type="checkbox" onChange={darkMode}/>
              <span className="slider round"/>
            </label>
          </a>
        </div>

        <div id="main">
          <div className="top-bar">
            <div className="top-bar-col-1">
              <a className="menuName" onClick={openNav}>Meniu</a>
            </div>
            <div className="top-bar-col-2">INFOBAZĖ</div>
            <div className="top-bar-col-3">
              <img src={logo} alt={'Logo'} style={logoStyle}/>

            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={CategoryPage}/>
        <Route exact path="/contacts" component={ContactPage}/>
        <Route exact path="/events" component={EventPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <GlobalStyle/>
    </div>
  );
}
