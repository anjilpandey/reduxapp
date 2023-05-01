const initialData = {
    cart_items: []
}

export const cartReducer = (state = initialData, action) => {

    switch(action.type){
        case "ADD TO CART":{
            return { cart_items:[...state.cart_items, action.payload] }
        }
        case "REMOVE FROM CART":
            {
                // return {cart_items:[...state.cart_items.filter(items=>items.product != action.payload)] }
                return {cart_items:[...state.cart_items.filter(items=>items.id != action.payload)] }
            }
        case "EMPTY CART":
            {
                return {cart_items:[]}
            }    
    default : 
    return state
    }

}
