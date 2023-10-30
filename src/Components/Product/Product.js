import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import Trending from '../Pages/SubPages/Trending'

const Product = () => {
    const {search} = useContext(ShopContext);
    const {productId} = useParams();
    const product = search.find((e)=>e.id === Number(productId))
  return (
    <div>
      {product ? ( // Adding a check if 'product' exists
                <ProductDisplay product={product} />
            ) : (
                <p>Product not found</p>
      )}
      <Trending heading={"Related Products"}/>
    </div>
  )
}

export default Product
