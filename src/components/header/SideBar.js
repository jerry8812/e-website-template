import React, { useState, useRef } from 'react';
import MyNavLink from '../common/MyNavLink';

const SideBar = React.forwardRef((props, ref) => {
  const [isOpenNav, setIsOpenNav] = useState(false)
  const subnavRef = useRef()
  const subNavgations = props.categories.map((category, index) => {
    return (
      <li key={index}>
        <MyNavLink to={`/product/${category}`} onClick={()=>props.handleToggle()}>{category}</MyNavLink>
      </li>
    )
  })
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
            {subNavgations}
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