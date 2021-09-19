import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setProductType } from '../../redux/actions/productActions'

import { COLORS } from '../../constants'

export default function Filter(props) {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.allCategories.categories)
  const productType = useSelector(state => state.productType.productType)

  const [selectedColors, setSelectedColors] = useState([])
  return (
    <div className="product-filter header_font">
      <p>Category</p>
      <ul className="subnav">
        {categories.map((category, index) => {
          return (
            <li key={index}
              className={productType === category ? 'active' : ''}
              onClick={() => dispatch(setProductType(category))}
            >{category}</li>
          )
        })}
      </ul>
      <p>Color</p>
      <div className="filter-all-colors">
        {COLORS.map(color => {
          return (
            <div
              style={{ backgroundColor: color }}
              key={color}
            // onClick={}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
