import React from 'react'
import Item from './Item'



const ItemList = (props) => {
  return (
   < >
   <div className='itemContent'>
        {props.bebidas.map(  (productos) =>{
            return <Item key= {productos.id} 
            id={productos.id}
            prod={productos.product} 
            tipo={productos.tipo}
            marca ={productos.marca}
            descripcion={productos.descripción}
            precio={productos.precio}
            stock={productos.stock}
            img={productos.imagen}
            emvio={productos.envio} />

        })}
   </div>
   
   </>
    
  )
}

export default ItemList