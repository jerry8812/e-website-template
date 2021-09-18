import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setProductType } from '../../redux/actions/productActions'
import MyNavLink from '../common/MyNavLink';

const SideBar = React.forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const [isOpenNav, setIsOpenNav] = useState(false)
  const subnavRef = useRef()
  const handleClick = (category) => {
    props.handleToggle()
    dispatch(setProductType(category))
  }
  const subNavgations = props.categories.map((category, index) => {
    return (
      <li key={index}>
        <MyNavLink to={`/product/${category}`} onClick={()=>handleClick(category)}>{category}</MyNavLink>
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
        <li><MyNavLink to="/home">about us</MyNavLink></li>
        <li><MyNavLink to="/home">faq</MyNavLink></li>
        <li><MyNavLink to="/home">track your order</MyNavLink></li>
      </ul>
    </div>
  )
})

export default SideBar