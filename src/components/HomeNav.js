import React, { Component } from 'react'
import '../styles/home_nav.css'


class HomeNav extends Component {
  render () {
    return (
      <nav className="home-nav clearfix">
        <ul className="nav-container">
          <li className="home-nav-left">
            <a className="logo" href="#"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSAzNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0YmI3NTI7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5VbnRpdGxlZC0xPC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTksNS41NGg1LjMyYTE0LjUyLDE0LjUyLDAsMCwxLDUuODYsMS4wNiwxMS4zMiwxMS4zMiwwLDAsMSwzLjkxLDIuNzJBMTAuMjUsMTAuMjUsMCwwLDEsMjYuMjMsMTNhMTMuMTMsMTMuMTMsMCwwLDEsLjY3LDQuMDhBMTEuMzYsMTEuMzYsMCwwLDEsMjYsMjEuOGExMC43NSwxMC43NSwwLDAsMS02LjE1LDUuODEsMTIuNDIsMTIuNDIsMCwwLDEtNC40Mi43OEg5Wm02LjIxLDIwLjc4YTEwLjc0LDEwLjc0LDAsMCwwLDMuNzMtLjY0LDksOSwwLDAsMCwzLTEuODQsOC40NSw4LjQ1LDAsMCwwLDItMi45M0E5Ljg4LDkuODgsMCwwLDAsMjQuNzMsMTcsOS44Myw5LjgzLDAsMCwwLDI0LDEzLjNhOC41Myw4LjUzLDAsMCwwLTItMyw5LjMzLDkuMzMsMCwwLDAtMy4wNy0yLDEwLjc0LDEwLjc0LDAsMCwwLTQtLjcySDExLjE4VjI2LjMyWiIvPjwvc3ZnPg==" role="presentation"/> LIZARDBOARD</a>
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
    )
  }
}

export default HomeNav
