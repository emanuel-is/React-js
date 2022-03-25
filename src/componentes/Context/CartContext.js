
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
      getTotalPrice()
    }
  }

  function isItemInCart(id){
    return itemsCart.some(cadaItem => cadaItem.id===id);
  }

  function countItemsInCart(){
    let totalItems=0;
    itemsCart.forEach(item => totalItems+=item.qty)
    return totalItems;
  }


  function getTotalPrice(){
    let totalPrice= 0;
    itemsCart.forEach( item => totalPrice +=item.qty* item.precio)
    return totalPrice;
  }

  function removeItem (idDelete){  // remuevo un solo item
    setItemsCart(itemsCart.filter ( item=>item.id !==idDelete))
  }

  function removeCart (){
    setItemsCart([])
  }

  return (
    <CartContext.Provider value ={
                                  {itemsCart ,
                                    addItem, 
                                    countItemsInCart,
                                    getTotalPrice,
                                    removeItem,
                                    removeCart
                                  }
    }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext