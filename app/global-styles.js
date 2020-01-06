import { createGlobalStyle } from 'styled-components';
import Image from './bg05.jpg'

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Montserrat", sans-serif;
  width: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${Image}") ;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: black;
}
body a {
  cursor: pointer;
}
body .sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}
body .sidenav .sliderbox {
  position: absolute;
  bottom: 100px;
  font-size: 80%;
  /* The switch - the box around the slider */
  /* Hide default HTML checkbox */
  /* The slider */
  /* Rounded sliders */
}
body .sidenav .sliderbox .switch {
  justify-content: flex-end;
  position: relative;
  display: flex;
  width: 30px;
  height: 17px;
}
body .sidenav .sliderbox .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
body .sidenav .sliderbox .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
body .sidenav .sliderbox .slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
body .sidenav .sliderbox input:checked + .slider {
  background-color: #2196F3;
}
body .sidenav .sliderbox input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
body .sidenav .sliderbox input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}
body .sidenav .sliderbox .slider.round {
  border-radius: 34px;
}
body .sidenav .sliderbox .slider.round:before {
  border-radius: 50%;
}
body .sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  white-space: nowrap;
}
body .sidenav a:hover {
  color: #f1f1f1;
}
body .sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
body #main {
  transition: margin-left 0.5s;
  width: auto;
}
@media screen and (max-height: 450px) {
  body .sidenav {
    padding-top: 15px;
  }
  body .sidenav a {
    font-size: 18px;
  }
}
body .top-bar {
  background-color: #2e2e2e;
  color: white;
  display: flex;
  margin-bottom: 10px;
}
body .top-bar .top-bar-col-1 {
  width: 20%;
}
body .top-bar a {
  margin-left: 20px;
}
body .top-bar .top-bar-col-2 {
  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
}
body .top-bar .top-bar-col-3 {
  width: 20%;
  /* The container <div> - needed to position the dropdown content */
  /* Dropdown Content (Hidden by Default) */
  /* Links inside the dropdown */
  /* Change color of dropdown links on hover */
  /* Show the dropdown menu on hover */
  /* Change the background color of the dropdown button when the dropdown content is shown */
}
body .top-bar .top-bar-col-3 dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
body .top-bar .top-bar-col-3 .dropdown {
  position: relative;
  display: inline-block;
}
body .top-bar .top-bar-col-3 .dropdown-content {
  padding: 5px;
  display: none;
  position: absolute;
  background-color: #2e2e2e;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
body .top-bar .top-bar-col-3 .dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
body .top-bar .top-bar-col-3 .dropdown-content a:hover {
  background-color: #ddd;
}
body .top-bar .top-bar-col-3 .dropdown:hover .dropdown-content {
  display: block;
}
body .top-bar .top-bar-col-3 .dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
body .top-bar a {
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: white;
  margin-right: 10px;
}
body .mainBody {
padding: 20px;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  background-color: lightgray;
  opacity: 80%;}

`;

export default GlobalStyle;
