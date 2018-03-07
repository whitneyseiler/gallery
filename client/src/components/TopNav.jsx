import React from 'react';

function TopNav() {
  return (
    <div id="top-nav" style={{ height: 110, background: 'white' }}>
      <div id="logo">
        <img src="small_logo.png" alt="" className="logo" />
      </div>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Find a great place" name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div id="nav-buttons">
        <button className="nav-button">SAN FRANCISCO</button>
        <button className="nav-button">CITY'S BEST</button>
        <button className="nav-button">NEW & HOT</button>
      </div>
    </div>
  );
}

export default TopNav;
