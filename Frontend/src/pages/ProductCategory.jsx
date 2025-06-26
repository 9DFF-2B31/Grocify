import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'

const ProductCategory = () => {

    const {products}=useAppContext()
    const{category}=useParams()

    const searcCategory=categories.find((item)=>item.path.toLowerCase()===category)

    const filteredProduct=products.filter((product)=>product.category.toLowerCase()===category)
  return (
    <div>
      {searchCategory && (
        <div className='flex flex-col items-end w-max'>
            <p className='text-2x1 font-medium'>{searcCategory.text.toUpperCase}</p>
        </div>
      )}
    </div>
  )
}

export default ProductCategory
