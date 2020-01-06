/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {openNav} from "../App";

export default function HomePage() {
  return (
    <div className={'mainBody'}>
      <div>
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
