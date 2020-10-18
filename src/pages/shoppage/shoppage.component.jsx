import React, { useState } from 'react'

import { PRODUCT_LIST } from '../../constants/mockData';

import { ProductPreview } from '../../components/product-preview'

const ShopPage = () => {
  const [products] = useState([...PRODUCT_LIST])
  return (
    <div className='shop-page'>
      {products.map(({id, ...otherProductProps}) => <ProductPreview key={id} {...otherProductProps} />)}
    </div>
  )
}

export default ShopPage
