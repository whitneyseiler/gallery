import React from 'react';

function TopNav() {
  return (
    <nav id="top-nav" style={{ height: 'auto', background: 'white' }}>
      <div className="top">
        <div id="logo">
          <img src="http://res.cloudinary.com/madlicorice/image/upload/v1520454562/small_logo.png" alt="" className="logo" />
        </div>
        <div id="search-container">
          <input type="text" className="search-box large" placeholder="Search..." name="search" />
          <input type="text" className="search-box small" placeholder=" " name="search" />
        </div>
      </div>
      <div className="nav-items">
        <div><a href="/">NEW & HOT</a></div>
        <div><a href="/">CITY'S BEST</a></div>
        <div><a href="/">SAN FRANCISCO</a></div>
      </div>
    </nav>
  );
}

export default TopNav;
