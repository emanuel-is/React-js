import React from 'react'
import CartContext from '../Context/CartContext';
import {useContext} from 'react';
import { Link } from 'react-router-dom'
import CartForm from './CartForm';
import { sendOrder } from '../Firebase/Firebase';
import { Timestamp } from 'firebase/firestore/lite';



const ListaCarrito = (props) => {
    const {itemsCart, removeItem, removeCart, getTotalPrice } = useContext(CartContext);

    
    function handleSubmit(buyer){
        
        let itemsForOrder = itemsCart.map(  (item)=>{
            return{
                id:item.id,
                producto:item.product,
                qty:item.qty,
                price:item.price,
                Timestamp: Timestamp.fromDate( new Date())
            }
        })
        
        const order = {
            buyer:buyer,
            items:[...itemsForOrder],
            total:getTotalPrice()
        }
        sendOrder(order);
    }

    

    if(itemsCart ==0){
        return(
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">UPS!</h1>
                        <p className="py-6">Olvidaste! Agregar productos a tu carrito. Asegurate de agregar algunos y volver a intentar</p>
                         <Link to="/"><button className="btn btn-primary">VOLVER A LA GALERIA</button></Link>
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
                            <th>Producto</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                       {itemsCart.map ( item =>{
                          
                          return <tr key ={item.id}>
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
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-300">Total : ${getTotalPrice()}</h1>
                    <div>
                        <button className="btn btn-outline btn-primary">Finalizar Compra</button>
                        <button onClick={ ()=>{removeCart()}} className="btn btn-outline btn-warning">Borrar Carrito</button>
                    </div>
                </div>
                <CartForm handleSubmit={handleSubmit}/>
            </div>
            
        )
    }
}

export default ListaCarrito