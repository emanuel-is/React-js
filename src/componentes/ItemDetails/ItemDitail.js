import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDitail = (props) => {

  const [inCart, setInCart] = useState(false);

  function addCarrito(){
    alert(`Agregaste ${props.descripcion} a tu Carrito`);
    setInCart(true);
  } 

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">{props.descripcion}
              <br className="hidden lg:inline-block"/> <span className='text-indigo-300'>${props.precio}</span> 
            </h1>
            <p className="text-xl font-serif text-yellow-200">{props.prod}</p>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
            </div>
            <div className="flex justify-center">
              {inCart? (
                <Link to="/Carrito" ><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">FINALIZAR COMPRA</button></Link>
              )
              : (
                <ItemCount
                  initial ={1}
                  stock={props.stock}
                  addCarrito={addCarrito}
                />
              )
              }
              
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="Imagen" src={props.img}/>
          </div>
        </div>
      </section>
  
    </>
  )
}

export default ItemDitail