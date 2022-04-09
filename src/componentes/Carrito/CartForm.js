import React from 'react'
import { useState } from 'react';





const CartForm = ({handleSubmit}) => {

  const [buyer, setBuyer]=useState({
    buyer:{
        name:"",
        phone:"",
        email:"",
        dir : "",
        city: "",
    },
  });


  function andleInput(event){
    
    const target = event.target;
    const value = target.value;
    const nameInput = target.name;

    setBuyer({
        ...buyer,
        [nameInput]: value
    })  
  }

    function handleForm(evt){
      evt.preventDefault();
      handleSubmit(buyer)
    }
 


  return (
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Formulario</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Por favor, complete el formulario para poder seguir con la Compra</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
        <input onChange={evt=> andleInput(evt)} value={buyer.name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input onChange={evt=> andleInput(evt)} value={buyer.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Telefono</label>
        <input onChange={evt=> andleInput(evt)} value={buyer.phone} type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="dir" className="leading-7 text-sm text-gray-600">Direccion</label>
        <input onChange={evt=> andleInput(evt)} value={buyer.dir} type="text" id="dir" name="dir" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">Ciudad</label>
        <input onChange={evt=> andleInput(evt)} value={buyer.city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea onChange={evt=> andleInput(evt)} value={buyer.message} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button  onClick={handleForm} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Finalizar Compra</button>
      <p className="text-xs text-gray-500 mt-3">Al finalizar la compra se le enviara un email a la direccion agregada con la informacion de su compra</p>
    </div>
  )
}

export default CartForm