import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BannerSlide from '../components/common/BannerSlide'
import { setProductType } from '../redux/actions/productActions'

import womenCloth from '../assets/images/pictures/women.jpg'
import electronics from '../assets/images/pictures/electronics.jpg'
import menCloth from '../assets/images/pictures/men-clothing.jpg'
import jewellery from '../assets/images/pictures/jewellery.jpg'

export default function Home(props) {
  const dispatch = useDispatch()
  const productImage = [electronics, jewellery, menCloth, womenCloth]
  const categories = useSelector(state => state.allCategories.categories)
  const navigateTo = (category) => {
    dispatch(setProductType(category))
    props.history.push(`/product/${category}`)
  }
  const products = categories.map((category, index) => {
    return <div key={index} className="home-product" onClick={()=> navigateTo(category)}>
      <img src={productImage[index]} alt={category}></img>
      <div className="text-on-product">
        <p>Shop {category}</p>
      </div>
    </div>
  })
  return (
    <div className="main-home">
      <BannerSlide></BannerSlide>
      <div className="home-contactus">
        <h1>CONTACT US</h1>
        <p>+64 021 085 04922 - Monday to Saturday - 10 a.m to 7 p.m(GMT+12)</p>
        <p>Or by Email: <a href="mailto:jerry8812@hotmail.com?subject=contact us">contact@ecshop.co.nz</a></p>
      </div>
      <div className="home-all-products">
        {products}
      </div>
    </div>
  )
}