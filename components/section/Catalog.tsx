import React from 'react'
import ProductCard from '../ProductCard';


const products = [
  {
    id: "1",
    imgSrc: "/assets/keyboard1.png",
    title: "Magic Keyboard",
    price: 79.99,
    modelSrc: "/assets/keyboard.glb",
  },
  {
    id: "2",
    imgSrc: "/assets/keyboard2.png",
    title: "Dragon Keyboard",
    price: 89.99,
    modelSrc: "/assets/keyboard2.glb",
  },
  {
    id: "3",
    imgSrc: "/assets/keyboard3.png",
    title: "Gold Keyboard",
    price: 99.99,
    modelSrc: "/assets/keyboard3.glb",
  }
];

export type productType = {
  id: string;
  imgSrc: string;
  title: string;
  price: number;
  modelSrc: string;
}

interface CatalogProps {
  selectedProduct: productType;
  onproductClick: (product: productType) => void;
}

const Catalog = ({ selectedProduct, onproductClick }: CatalogProps) => {
  return (
    <div id='catalog' className='w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            isActive={selectedProduct.id === product.id}
            onClick={() => onproductClick(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default Catalog