import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProductService } from '../services'
 
export const ProductPage = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const productService = new ProductService()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
              const newProduct = await productService.getProduct(productId);
              setProduct(newProduct);
            } catch (error) {
              console.error('Failed to fetch product:', error);
            }
          };
          fetchProduct();
    } , [productId])

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2">
              <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-xl text-gray-800 mt-2">${product.price}</p>
              <p className="text-gray-700 mt-4">{product.description}</p>
              <p className="text-sm text-gray-600 mt-4">Category: {product.category}</p>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}
