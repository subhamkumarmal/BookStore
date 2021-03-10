import {AddToCart} from '../contains';

export const AddToCartAction = (data) =>{
      return{
          type:AddToCart,
          actionData : data
      }
}