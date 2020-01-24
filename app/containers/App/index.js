import React, {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from "../HomePage/Loadable";
import NotFoundPage from '../NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import DoDarkMode , {setDark, dark} from "../../components/DarkMode"
import ContactPage from '../ContactPage/Loadable'
import CategoryPage from '../CategoryPage/Loadable';
import EventPage from "../EventPage/Loadable";
import logo from "../../images/logo.png";
import {config, db} from 'codemash';
import { CalendarPage } from '../CalendarPage';
import DarkFromStorage from '../../components/DarkFromStorage'
import { OpenNav } from '../../components/OpenNav';
import{ CloseNav } from '../../components/CloseNav';
import ReactDOM from "react-dom";

config.init
({
  projectId: 'f3d41878-d3d0-4b4e-9de9-26740ddbbf67',
  secretKey: 'rwMxs3DpujYvq8zpBOJ26eONZnIwPavy'
});


export default function App() {
 let darkMemory=false;
 darkMemory = (sessionStorage.getItem("dark") == 'true');

if (darkMemory === true){
   DarkFromStorage();

   }

  const logoStyle = {
    margin: '2px',
    width: '50px'
  };


  return (
    <div>
      <div className="App">
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={CloseNav}>
            &times;
          </a>
          <Link to={'/'} onClick={CloseNav}>Pagrindinis</Link>
          <Link to={'/categories'} onClick={CloseNav}>Kategorijos</Link>
          <Link to={'/events'} onClick={CloseNav}>Įvykiai</Link>
          <Link to={'/calendar'} onClick={CloseNav}>Kalendorius</Link>
          <Link to={'/contacts'} onClick={CloseNav}>Kontaktai</Link>

          <a className="sliderbox">
            <div> Tamsusis režimas</div>
            <label className="switch">
              <input id="sliderid" type="checkbox" defaultChecked={darkMemory} onChange={DoDarkMode}  />
              <span className="slider round"/>
            </label>
          </a>
        </div>

        <div id="main">
          <div className="top-bar">
            <div className="top-bar-col-1">
              <a className="menuName" onClick={OpenNav}>Meniu</a>
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
        <Route exact path="/calendar" component={CalendarPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <GlobalStyle/>
    </div>
  );
}
