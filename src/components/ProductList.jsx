import React from 'react'
import { ProductService } from '../services'
import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'


export const ProductList = () => {

    const [products, setProducts] = useState([])
    const productService = new ProductService()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
              const newItems = await productService.getProducts();
              setProducts(newItems);
            } catch (error) {
              console.error('Failed to fetch products:', error);
            }
          };
          fetchProducts();
    }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}