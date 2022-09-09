import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        <img src={product.image.url} />
        <h3>{product.price.formatted_with_symbol}</h3>
        <h5>{product.name}</h5>

    </div>
  )
}

export default Product