import React from 'react'
import Imagen1 from '../Imagenes/Caja_2_Vinos_Rutini.jpg'
import Imagen2 from '../Imagenes/Champagne Salentein Brut Nature 750.jpg'
import Imagen3 from '../Imagenes/Chivas Regal 18 años Gold Signature.jpg'
import Imagen4 from '../Imagenes/Combo Buenos Aires GIN +Vaso +estuche.jpg'
import Imagen5 from '../Imagenes/Licor Seridans Coffee.jpg'
import Items from './ItemsCar'


const ListaCarrito = (props) => {

    const Productos =[
        { prod :'Whisky', tipo:'Blended Scotch',marca: "Chivas Regal 18 años" , descripcion:"Whisky Chivas Regal 18 Años 750 Ml Botella + Estuche" , precio: 12300, imagen:Imagen3 , envio : "Envio Gratis"},
        { prod :'Vino', tipo:'Cabernet/Malbec', marca: "Rutini" , descripcion:"Vino Rutini Cabernet Malbec 750ml X2 Regalo Caja" , precio: 4569.60, imagen:Imagen1 , envio : "Envio Gratis"},
        {prod :'Champagne', tipo:'Brut Nature', marca: "Salentein" , descripcion:"Champagne Salentein Brut Nature 750 + Estuche" , precio: 1100, imagen:Imagen2 , envio : "Envio con Cargo"},
        {prod :'Gin', tipo:'Dry Gin', marca: "Buenos Aires" , descripcion:"Gin Buenos Aires Con Estuche 750ml + Estuche Mix 6 Botánicos" , precio: 6545, imagen:Imagen4 , envio : "Envio con Cargo"},
        {prod :'Licor', tipo:'Coffee Irlandes', marca: "Sheridan" , descripcion:"Licor Sheridan 750ml Sheridans Irlandes" , precio: 4160, imagen:Imagen5 , envio : "Envio con Cargo"},
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
                    <Items producto={Productos[1]}></Items>    
                    {/* row 2 */}
                   <Items producto={Productos[2]}></Items>
                    {/* row 3  */}
                    <Items producto ={Productos[0]}></Items>        
                    {/*  row 4 */}
                    <Items producto ={Productos[3]}></Items>
                        {/*  row 4 */}
                    <Items producto ={Productos[4]}></Items>
                </tbody>
                       
            </table>
        </div>
    
    </>
  )
}

export default ListaCarrito