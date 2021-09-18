import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setProductType } from '../../redux/actions/productActions'

export default function Filter(props) {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.allCategories.categories)
  const productType = useSelector(state => state.productType.productType)
  return (
    <div className="product-filter header_font">
      <p>Category</p>
      <ul className="subnav">
        {categories.map((category, index) => {
          return (
            <li key={index}
              className={productType === category ? 'active' : ''}
              onClick={()=>dispatch(setProductType(category))}
            >{category}</li>
          )
        })}
      </ul>
    </div>
  )
}
