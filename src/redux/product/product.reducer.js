import { ProductActionTypes } from './product.types'

import { PRODUCT_LIST } from '../../constants/mockData'

const INITIAL_STATE = {
  products: PRODUCT_LIST[0].items
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.ADD_ITEM:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state;
  }
}

export default productReducer
