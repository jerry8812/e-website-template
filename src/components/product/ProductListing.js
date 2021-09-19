import React from 'react'

export default function ProductListing(props) {
  if (props.products.length === 0) return <div><h5>Loading Products ...</h5></div>

  const productList = props.products.map(product => {
    return (
      <div key={product.id} className="singe-product">
        <div className="single-product-image"><img src={product.image} alt="single product"></img></div>
        <div className="single-product-info">
          <div><h5>{product.title}</h5></div>
          {/* <p>{product.description}</p> */}
          <div><h6>${product.price}</h6></div>
          <div><p>{product.category}</p></div>
        </div>
      </div>
    )
  })
  return (
    <div className="product-productlisting">
      {productList}
    </div>
  )
}
