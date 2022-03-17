import React from 'react'
import { useState } from 'react';
import { ImPlus, ImMinus } from "react-icons/im";








const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial); 

    function rest() {

        if ( count > props.initial)
        setCount (count -1);
    }
    function add (){
        if(count < props.stock){
            setCount (count +1);
        }
        if(count == props.stock)
        alert(`El stock de este producto es ${props.stock}`)
    }


  return (
    <>
    <div className='qty'>
        <div className='qtyContainer'>
            <div >
                <button onClick={rest} className="btn btn-xs"><ImMinus/></button>
            </div>
            <div>
                <span className='kbd kbd-md'>{count}</span>
            </div>
            <div>
                <button onClick={add} className="btn btn-xs"><ImPlus/></button>
            </div>
            <div className="flex justify-center">
            <button onClick={props.addCarrito}  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">AGREGAR AL CARRITO</button>
            </div>




        </div>

    </div>
    </>
  )
}

export default ItemCount