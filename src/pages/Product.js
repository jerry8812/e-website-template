import React from 'react'

import { useSelector } from 'react-redux'

export default function Product(props) {
  const products = useSelector(state => state.allProducts.products)
  const { type } = props

  console.log(type);
  console.log(products);
  return (
    <div>
      productListing
    </div>
  )
}
