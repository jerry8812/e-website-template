import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCategories } from '../../redux/actions/categoryActions'
import { setProductType } from '../../redux/actions/productActions'
import MyNavLink from '../common/MyNavLink'
import SideBar from './SideBar'

function NavBar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const sideBarRef = React.createRef()
  const [openSideBar, setOpenSideBar] = useState(false)
  const categories = useSelector(state => state.allCategories.categories)
  const subNavgations = categories.map((category, index) => {
    return (
      <li key={index} onClick={()=>dispatch(setProductType(category))}>
        <MyNavLink to={`/product/${category}`}>{category}</MyNavLink>
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
        <div className="nav-toggle">
          <i onClick={() => handleToggle()}>  </i>
        </div>
        <SideBar
          openSideBar={openSideBar}
          handleToggle={handleToggle}
          categories={categories}
          ref={sideBarRef}
        />
        <div className="logo">
          <h1>
            <MyNavLink to="/home" title="E.C.SHOP">E.C.SHOP</MyNavLink>
          </h1>
        </div>
        <div className="nav">
          <ul className="firstnav" >
            <li className="nav-shop" >
              <MyNavLink to="/product/all" onClick={()=>dispatch(setProductType('all'))}> shop </MyNavLink>
              <ul className="nav-category subnav" >
                {subNavgations}
              </ul>
            </li>
            <li><MyNavLink to="/about">about</MyNavLink></li>
            <li><MyNavLink to="/home"> faq </MyNavLink></li>
            <li><MyNavLink to="/home"> track your order </MyNavLink></li>
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