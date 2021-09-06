import React from 'react';
import SideBar from './SideBar';

export default function NavBar() {
  return (
    <div className="navbar">
      <SideBar/>
      <div className="nav-toggle">
        <i></i>
      </div>
      <div className="logo">
        <h1>
          <a href="/" title="E.C.SHOP">E.C.SHOP</a>
        </h1>
      </div>
      <div className="nav">
        <ul className="firstnav">
          <li className="nav-shop">
            <a href="/">shop</a>
            <ul className="nav-category secondnav">
              <li><a href="/">Electronics</a></li>
              <li><a href="/">Jewelery</a></li>
              <li><a href="/">Men's clothing</a></li>
              <li><a href="/">Women's clothing</a></li>
            </ul>
          </li>
          <li><a href="/">about us</a></li>
          <li><a href="/">faq</a></li>
          <li><a href="/">track your order</a></li>
        </ul>
      </div>
      <div className="navbar-icons">
        <div>
          <i></i>
          <i></i>
          <i className="icon-cart"><div className="cart-count">3</div></i>
        </div>
      </div>
    </div>
  )
}