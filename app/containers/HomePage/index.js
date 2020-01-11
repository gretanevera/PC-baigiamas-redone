import React from 'react';
import {openNav} from "../App";

export default function HomePage() {
  return (
    <div className={'mainBody'}>
      <div className={'contentBox'}>
        {' '}
        Main page introductions, and instructions how to use <br />
        <a>Few link to get started</a>
        <br />
        <a>Few link to get started</a>
        <br />
        <a>Few link to get started</a>
        <br />
        <a onClick={openNav}> or choose from main menu </a>
      </div>
    </div>
  );
}
