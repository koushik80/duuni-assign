import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../assets/images/working-hours.svg';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-content">
        <Link to="/">
          <img src="https://duunitori.imgix.net/static/web/images/logo-duunitori-rgb-horisontal-inverse.svg?auto=format" alt="" />
        </Link>
        <Link to="/">
        </Link>
      </div>
    </div>
  );
}
