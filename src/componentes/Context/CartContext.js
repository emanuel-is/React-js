
import { createContext } from 'react'
import { useState } from 'react';

const CartContext = createContext ();

export function CartContextProvider ({children}) {

  const [itemsCart, setItemsCart] = useState([]);


  function addItem(item ,qty){
    if(isItemInCart(item.id)){  //creo un condicional
      let index = itemsCart.findIndex(i=>i.id===item.id);
      let copiaCart = [...itemsCart];
      copiaCart[index].qty += qty;
      setItemsCart(copiaCart);
    }else{
      
      const ItemToAdd ={...item,qty}
  
      setItemsCart( [...itemsCart,ItemToAdd])
    }
  }

  function isItemInCart(id){
    return itemsCart.some(cadaItem => cadaItem.id===id);
  }

  return (
    <CartContext.Provider value ={
                                  {itemsCart ,
                                    addItem
                                  }
    }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext