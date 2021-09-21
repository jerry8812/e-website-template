import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { DROPDOWN_LIST } from '../constants';
import ProductListing from '../components/product/ProductListing';
import Filter from '../components/product/Filter';
import MyDropDown from '../components/common/MyDropDown';
import { fetchProducts } from '../redux/actions/productActions'

export default function Product() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.allProducts.products)
  const productType = useSelector(state => state.productType.productType)

  const sortByItemChanged = data => data

  useEffect(() => {
    const url = productType === 'all' ? '/products' : `/products/category/${productType}`
    dispatch(fetchProducts(url))
  }, [dispatch, productType])

  return (
    <div className="main-product">
      <div className="product-category">
        <h5>{productType}</h5>
      </div>
      <div className="products-sort-by">
        <p>{products.length} items found</p>
        <MyDropDown
          onChange={sortByItemChanged}
          dropDownList={DROPDOWN_LIST}
        />
      </div>
      <div className="product-filter-products">
        <Filter category={productType} />
        <ProductListing products={products} />
      </div>
    </div>
  )
}
