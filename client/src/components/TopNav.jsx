import React from 'react';

function TopNav() {
  return (
    <div id="top-nav" style={{ height: 110, background: 'white' }}>
      <div id="logo">
        <img src="small_logo.png" alt="" className="logo" />
      </div>
      <div id="nav-buttons">
        <button className="nav-button">NEW & HOT</button>
        <button className="nav-button">CITY'S BEST</button>
        <button className="nav-button">SAN FRANCISCO</button>
      </div>
    </div>
  );
}

export default TopNav;
