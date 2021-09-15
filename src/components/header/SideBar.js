import React, { useState, useRef } from 'react';

const SideBar = React.forwardRef((props, ref) => {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const subnavRef = useRef()

  const openSubNav = () => {
    subnavRef.current.classList.toggle('open-sidebar-subnav')
    setIsOpenNav(!isOpenNav)
  }
  return (
    <div className="sidebar" ref={ref}>
      <i onClick={() => props.handleToggle()}></i>
      <ul className="firstnav">
        <li onClick={() => openSubNav()}>
          <div className="sidebar-shop">
            shop
            <i style={{ display: isOpenNav ? 'none' : 'block' }}></i>
            <i style={{ display: isOpenNav ? 'block' : 'none' }}></i>
          </div>
          <ul className="sidebar-subnav subnav" ref={subnavRef}>
            {props.subNavgations}
          </ul>
        </li>
        <li><a href="/">about us</a></li>
        <li><a href="/">faq</a></li>
        <li><a href="/">track your order</a></li>
      </ul>
    </div>
  )
})

export default SideBar