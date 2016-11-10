import React, { Component } from 'react';

class HomeNav extends Component {
  render () {
    return (
      <nav className="home-nav clearfix">
        <ul className="nav-container">
          <li className="home-nav-left">
            <a className="logo" href="#"><img src=""/> LIZARDBOARD</a>
          </li>

          <li className="home-nav-right">
            <ul className="home-nav-menu">
              <li><a href="#">product</a></li>
              <li><a href="#">PRICING</a></li>
              <li><a href="#">BLOG</a></li>
              <li className="nav-dropdown">MORE
                <label className="more-label"> ^
                </label>
                <ul className="sub-nav">
                  <li><a href="#">EXAMPLE 1</a></li>
                  <li><a href="#">EXAMPLE 2</a></li>
                  <li><a href="#">EXAMPLE 3</a></li>
                </ul>
              </li>
              <li><a className="login-nav" href="#">LOGIN</a></li>
              <li><a className="demo-button" href="#">BOOK A DEMO</a></li>
              <li>
                <input className="trial-input" type="text" placeholder="Email address"/>
                <a className="flat-button trial-button" href="#">Free Trial</a>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    );
  }
}

export default HomeNav;
