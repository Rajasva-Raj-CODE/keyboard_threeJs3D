"use client"
import React, { useState } from 'react'
import Catalog, { productType } from './Catalog'
import Preview from './Preview'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(
    {
      id: "1",
      imgSrc: "/assets/keyboard1.png",
      title: "Magic Keyboard",
      price: 79.99,
      modelSrc: "/assets/keyboard.glb",
    }
  )
  const handleProductClick = (product: productType) => {
    setSelectedProduct(product)
  }
  return (
    <div>
      <Catalog selectedProduct={selectedProduct} onproductClick={handleProductClick} />
      <Preview />
    </div>
  )
}

export default Products