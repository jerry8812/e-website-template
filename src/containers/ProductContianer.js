import React, { useEffect, Fragment } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { setAllProducts } from '@/redux/actions/productActions'
import Product from '../pages/Product'

export default function ProductContainer(props) {
  const type = props.match.params.type
  const dispatch = useDispatch()
  useEffect(() => {
    const getAllProducts = async() => {
      const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch(console.error())
      dispatch(setAllProducts(response.data))
    }
    getAllProducts()
  }, [dispatch])
  
  return (
    <Fragment>
      <Product type={type}/>
    </Fragment>
  )
}
