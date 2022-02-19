import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import Imagen1 from './Imagenes/Caja_2_Vinos_Rutini.jpg'
import Imagen2 from './Imagenes/Champagne Salentein Brut Nature 750.jpg'
import Imagen3 from './Imagenes/Chivas Regal 18 años Gold Signature.jpg'
import Imagen4 from './Imagenes/Combo Buenos Aires GIN +Vaso +estuche.jpg'
import Imagen5 from './Imagenes/Licor Seridans Coffee.jpg'
import Items from './Items'


const ListaCarrito = (props) => {

    const Productos =[
        { prod :'Whisky', tipo:'Blended Scotch', nombre : "Chivas Regal 18 años" , descripcion:"Whisky Chivas Regal 18 Años 750 Ml Botella + Estuche" , precio: 12300, image: <img src={props.Imagen3}alt="Avatar Tailwind CSS Component"></img>, envio : "Envio Gratis"},
        { },
        {},
        {},
        {},
    ]
  return (
    <>
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label><input type="checkbox" class="checkbox"></input></label>
                        </th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label><input type="checkbox" class="checkbox"></input></label>
                        </th>
                        <td>


                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-24 rounded-xl">
                                        <img src={Imagen1} alt="Avatar Tailwind CSS Component"></img>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Vino Rutini</div>
                                    
                                </div>
                            </div>
                        </td>
                        <td>
                            <h4 className="text-md font-medium text-blanck-900">Vino Rutini Cabernet Malbec 750ml X2 Regalo Caja</h4>
                            <br></br>
                            <span class="badge badge-ghost badge-md mr-4 ">Envio gratis</span>
                            <span class="badge badge-ghost badge-md mr-4 ">Eliminar</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label><input type="checkbox" class="checkbox"></input></label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-24 rounded-xl">
                                        <img src={Imagen2} alt="Avatar Tailwind CSS Component"></img>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Champagne</div>
                                    <div class="text-sm opacity-50">Brut</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h4 className="text-md font-medium text-blanck-900">Champagne Salentein Brut Nature 750 Con Estuche</h4>
                            <br></br>
                            <br></br>
                            <span class="badge badge-ghost badge-md mr-4 ">Eliminar</span>
                            
                        </td>
                        <td>Red</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">Borrar</button>
                        </th>
                    </tr>
                            {/* row 3  */}
                            <Items producto ={Productos[0]}>{Children} </Items>        
                        {/*  row 4 */}
                    <tr>
                        <th>
                            <label><input type="checkbox" class="checkbox"></input></label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-24 rounded-xl">
                                        <img src={Imagen4} alt="Avatar Tailwind CSS Component"></img>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Gin</div>
                                    <div class="text-sm opacity-50">Dry Gin</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h4 className="text-md font-medium text-blanck-900">Gin Buenos Aires Con Estuche 750ml + Estuche Mix 6 Botánicos</h4>
                            <br></br>
                            
                            <span class="badge badge-ghost badge-md mr-4 ">Eliminar</span>
                        </td>
                        <td>Indigo</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                        {/*  row 4 */}
                    <tr>
                        <th>
                            <label><input type="checkbox" class="checkbox"></input></label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-24 rounded-xl">
                                        <img src={Imagen5} alt="Avatar Tailwind CSS Component"></img>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Licor</div>
                                    <div class="text-sm opacity-50">Coffee Layered</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h4 className="text-md font-medium text-blanck-900">Licor Sheridan 750ml Sheridans Irlandes</h4>
                            <br></br>
                            <span class="badge badge-ghost badge-md mr-4 ">Envio gratis</span>
                            <span class="badge badge-ghost badge-md mr-4 ">Eliminar</span>
                            
                        </td>
                        <td>Indigo</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
                       
            </table>
        </div>
    
    </>
  )
}

export default ListaCarrito