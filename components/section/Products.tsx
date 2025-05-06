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
    <section className="w-full py-8 sm:py-12 md:py-16">
      <Catalog selectedProduct={selectedProduct} onproductClick={handleProductClick} />
      <Preview />
    </section>
  )
}

export default Products