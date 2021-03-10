import {AddToCart} from '../contains';

const cardItems ={
    Items : []
}

export default function AddToCartFunction(state=[],action){

    switch(action.type)
    {
        case AddToCart:{
            return[
                ...state,
                {Items : action.actionData}
            ]
        }
        default:
            return state
    }

}