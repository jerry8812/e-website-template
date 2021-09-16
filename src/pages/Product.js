import React, {useEffect} from 'react'

import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setAllProducts } from '../redux/actions/productActions'

export default function Product() {
  // const products = useSelector(state => state.allProducts.products)
  const { type } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(console.error())
      dispatch(setAllProducts(response.data))
    }
    getAllProducts()
  }, [dispatch])

  return (
    <div className="main-product">
      <div className="main-product-category">
        <h5>{type}</h5>
      </div>
    </div>
  )
}
