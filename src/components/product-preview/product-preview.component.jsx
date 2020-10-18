import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ProductItem } from '../product-item'

import './product-preview.styles.scss'
import { CustomButton } from '../custom-button'

const ProductPreview = ({ title }) => {
  const products = useSelector(state => state.products.products)
  return (
    <div className='product-preview'>
      <div className="title">{title}</div>
      <CustomButton>
        <Link to='/add-product'>Add Product</Link>
      </CustomButton>
      <div className="preview">
        {products
          .map(({ id, ...otherProductItemProps }) =>
            <ProductItem key={id} {...otherProductItemProps} />
          )}
      </div>

    </div>
  )
}

export default ProductPreview
