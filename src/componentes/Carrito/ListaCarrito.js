import React from 'react'
import CartContext from '../Context/CartContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom'



const ListaCarrito = (props) => {
    const {itemsCart, removeItem, removeCart, getTotalPrice } = useContext(CartContext);
    

    if(itemsCart ==0){
        return(
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">UPS!</h1>
                        <p class="py-6">Olvidaste! Agregar productos a tu carrito. Asegurate de agregar algunos y volver a intentar</p>
                         <Link to="/"><button class="btn btn-primary">VOLVER A LA GALERIA</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label><input type="checkbox" className="checkbox"></input></label>
                            </th>
                            <th>Producto</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                       {itemsCart.map ( item =>{
                          
                          return <tr key ={item.id}>
                                        <th>
                                            <label><input type="checkbox" className="checkbox"></input></label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="w-24 rounded-xl">
                                                        <img src={item.img} alt="Avatar Tailwind CSS Component"></img>                          
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.marca}</div>
                                                    <div className="text-sm opacity-50">{item.tipo}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h4 className="text-md font-medium text-blanck-900">{item.descripcion}</h4>
                                            <br></br>
                                            <span className="badge badge-ghost badge-md mr-4 ">{item.envio}</span>
                                            <button onClick={ ()=>removeItem(item.id)} className="btn btn-ghost bg-gray-500 btn-xs">Eliminar</button>
                                        </td>
                                        <td>{item.qty}</td>
                                        <th>
                                            <h4 className="text-md font-medium text-blanck-900">${item.precio}</h4>
                                        </th>
                                </tr>
                            })}
                    </tbody>
                               
                </table>

                <div>
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-300">Total : ${getTotalPrice(


                    )}</h1>
                    <div>
                    <button class="btn btn-outline btn-primary">Finalizar Compra</button>
                    <button onClick={ ()=>{removeCart()}} class="btn btn-outline btn-warning">Borrar Carrito</button>
                    </div>

                </div>
            </div>
    
        )
    }
}

export default ListaCarrito