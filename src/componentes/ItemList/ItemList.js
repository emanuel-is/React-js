import React from 'react'



const ItemList = (props) => {
  return (
   <>
   <div className='cardFlex'>
        <div class="card w-96 bg-base-100  glass  ">
            <img src={props.img} alt="Bebida"/>
            <div class="card-body">
                <h2 class="card-title">{props.prod}</h2>
                <p>{props.descripcion}</p>
                <div class="justify-end card-actions">
                    <button class="btn btn-outline btn-success">${props.precio}</button>
                </div>
            </div>
        </div>
   </div>
   
   
   </>
    
  )
}

export default ItemList