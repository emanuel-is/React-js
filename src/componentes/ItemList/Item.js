import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <>
        <div >
            <div className='itemCard'>
                    <div className="itemBody">
                        <img className='itemImg' src={props.img} alt="Bebida"/>
                        <div className="body__Card items-center text-center">
                            <strong className="card-title">{props.prod}</strong>
                            <p>{props.descripcion}</p>
                            <div className="card-actions">
                                <Link to="/Carrito" ><button className="btn btn-outline btn-success">${props.precio}</button></Link>
                                <hr/>
                                <Link to={`/item/${props.id}`} ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success">Ver Detalles</button></Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        

    </>
  )
}

export default Item