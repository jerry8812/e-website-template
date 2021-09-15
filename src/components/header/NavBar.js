import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import MyNavLink from '../common/MyNavLink'
import SideBar from './SideBar'

function NavBar() {
  const sideBarRef = React.createRef()
  const [openSideBar, setOpenSideBar] = useState(false)
  const categories = useSelector(state => state.allCategories.categories)
  const subNavgations = categories.map((category, index) => {
    return (
      <li key={index}>
        <MyNavLink to={`/product/${category}`} onClick={()=>handleToggle()}>{category}</MyNavLink>
      </li>
    )
  })
  const handleToggle = () => {
    sideBarRef.current.classList.toggle('open-side-bar')
    setOpenSideBar(!openSideBar)
  }
  return (
    <header>
      <div className="navbar" >
        <div className="webpage-mask"
          style={{ display: openSideBar ? 'block' : 'none' }}
          onClick={() => handleToggle()}
        >
        </div>
        <div className="nav-toggle" onClick={() => handleToggle()}>
          <i>  </i>
        </div>
        <SideBar
          openSideBar={openSideBar}
          handleToggle={handleToggle}
          subNavgations={subNavgations}
          ref={sideBarRef}
        />
        <div className="logo">
          <h1>
            <a href="/" title="E.C.SHOP">E.C.SHOP</a>
          </h1>
        </div>
        <div className="nav">
          <ul className="firstnav" >
            <li className="nav-shop" >
              <MyNavLink to="/product/all" > shop </MyNavLink>
              <ul className="nav-category subnav" >
                {subNavgations}
              </ul>
            </li>
            <li><MyNavLink to="/about">about</MyNavLink></li>
            <li><MyNavLink to="/questions"> faq </MyNavLink></li>
            <li><MyNavLink to="/track"> track your order </MyNavLink></li>
          </ul>
        </div>
        <div className="navbar-icons">
          <div>
            <i>  </i>
            <i>  </i>
            <i className="icon-cart">  <div className="cart-count"> 3 </div></i >
          </div>
        </div>
      </div>
    </header>
  )
}
export default NavBar