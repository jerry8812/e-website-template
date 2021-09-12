import React, { Fragment, useEffect } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setCategories } from '../redux/actions/categoryActions'

import NavBar from '../components/header/NavBar'

export default function NavBarContainer() {
  const dispach = useDispatch()
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios
        .get('https://fakestoreapi.com/products/categories')
        .catch(console.error())
      dispach(setCategories(response.data))
    }
    fetchCategories()
  }, [dispach])
  return (
    <Fragment>
      <NavBar/>
    </Fragment>
  )
}