import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function SideBar() {

  const [isOpenNav, setIsOpenNav] = useState(false)
  const secondnavRef = useRef(null)

  return (
    <div className="sidebar">
      <i></i>
      <ul className="firstnav">
        <li onClick={() => setIsOpenNav(!isOpenNav)} className="sidebar-li">
          <div className="sidebar-shop">
            shop
            <i style={{ display: isOpenNav ? 'none' : 'block' }}></i>
            <i style={{ display: isOpenNav ? 'block' : 'none' }}></i>
          </div>
          <CSSTransition
            in={isOpenNav}
            timeout={600}
            classNames="secondnavani"
            nodeRef={secondnavRef}
          // onEnter={() => setIsOpenNav(false)}
          // onExited={() => setIsOpenNav(true)}
          >
            <ul 
              className="sidebar-secondnav secondnav" 
              ref={secondnavRef}
              style={{ display: isOpenNav ? 'block' : 'none' }}
            >
              <li><a href="/">Electronics</a></li>
              <li><a href="/">Jewelery</a></li>
              <li><a href="/">Men's clothing</a></li>
              <li><a href="/">Women's clothing</a></li>
            </ul>
          </CSSTransition>
        </li>
        <li><a href="/">about us</a></li>
        <li><a href="/">faq</a></li>
        <li><a href="/">track your order</a></li>
      </ul>
    </div>
  )
}