import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { CustomFormInput } from '../custom-form-input'
import { CustomButton } from '../custom-button'

import './add-product.styles.scss'

const AddProduct = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
    imageUrl: ''
  })

  const dispatch = useDispatch()
  let history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const goToShop = () => history.push('/shop')

  const handleAddProduct = () => {
    const productToAdd = { ...state, id: Math.floor(Math.random() * 100) }
    dispatch({
      type: 'ADD_ITEM',
      payload: productToAdd
    })
    goToShop()
  }
  
  return (
    <div className='add-product-form'>
      <h5>Add New Product</h5>
      <form onSubmit={handleAddProduct}>
        <CustomFormInput
          name='name'
          type='text'
          label='Name'
          value={state.name}
          onChange={handleChange}
          required />
        <CustomFormInput
          name='description'
          type='text'
          label='Description'
          value={state.description}
          onChange={handleChange}
        />
        <CustomFormInput
          name='price'
          type='number'
          label='Price'
          value={state.price}
          onChange={handleChange}
          required />
        <CustomFormInput
          name='imageUrl'
          type='text'
          label='Image'
          value={state.imageUrl}
          onChange={handleChange}
        />
        <CustomFormInput
          name='quantity'
          type='number'
          step="any"
          min="0"
          label='Quantity'
          value={state.quantity}
          onChange={handleChange}
          required />

        <CustomButton>Add To Product List</CustomButton>
      </form>
    </div>
  )
}

export default AddProduct
