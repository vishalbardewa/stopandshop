import { ProductActionTypes } from './product.types'
 
 export const addProduct = product => ({
    type: ProductActionTypes.ADD_ITEM,
    payload: product
 })
 