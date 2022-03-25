import React from 'react'
import {ImCart} from "react-icons/im"
import { Link } from 'react-router-dom'
import CartContext from '../Context/CartContext';
import {useContext} from 'react';

const CartWidget = () => {
    const {countItemsInCart} = useContext(CartContext);
  return (
    <>
    <Link to="/Carrito">
         <ImCart className='cartIcon'/> 
            {countItemsInCart() > 0 && <span className='spanNumber'>{countItemsInCart()}</span>}
    </Link>
    </>
  )
}

export default CartWidget