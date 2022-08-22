import React from 'react';
import { ReactDOM } from 'react';
import './nav.style.css';
import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons';
import FaLocationDot from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../public/starbucks-logo-.webp';

const Navigation = () => {
  return (
    <div className="container-nav">
      <div className="logo">{Logo}</div>
      <div className="navigation-container">
        <ul className="nav-list">
          <a className="nav-list" href="/">
            MENU
          </a>
          <a className="nav-list" href="/rewards">
            REWARDS
          </a>
          <a className="nav-list" href="/gift-cards">
            GIFT CARDS
          </a>
        </ul>

        <div className="right-side-nav">
          <div className="location-icon">
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              FaLocationDot={FaLocationDot}
            />
            <p>Find a store</p>
          </div>
          <div className="btn-container">
            <button className="btn-sign-in">Sign In</button>
            <button className="btn-join-now">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
