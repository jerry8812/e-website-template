import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setProductType } from '../../redux/actions/productActions'

import { COLORS } from '../../constants'
import MyCheckBox from '../common/MyCheckBox'

import { PRICES, SIZES } from '@/constants'

export default function Filter(props) {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.allCategories.categories)
  const productType = useSelector(state => state.productType.productType)

  // const [selectedColors, setSelectedColors] = useState([])
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

      <div className="product-filter-filters">
        <div>
          <h3>Filters</h3>
        </div>
        <div className="filters-color">
          <p>Color</p>
          <div>
            {COLORS.map(color => {
              return (
                <div
                  style={{ backgroundColor: color }}
                  key={color}
                // onClick={()=>setSelectedColors(color)}
                ></div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Price</p>
          <MyCheckBox checkBoxItems={PRICES} />
        </div>
        <div>
          <p>Size</p>
          <MyCheckBox checkBoxItems={SIZES} />
        </div>
      </div>
    </div>
  )
}
