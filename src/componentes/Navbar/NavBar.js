import React from 'react' 
import Logo from '../Imagenes/Logochiquito.png'
import {ImCart} from "react-icons/im"
import { Link } from 'react-router-dom'



const navBar = () => {
  return (
    <>
    <nav className='navBar'>
      <Link to="/"><img src={Logo} alt="imagen" /></Link>
     
      <div className='aNav'>
        
        <Link to="/category/Vino" className='no-underline hover:underline text-center'>Vinos</Link>
        <Link to="/category/Whisky" className='no-underline hover:underline text-center'>Whiskys</Link>
        <Link to="/category/Cerveza" className='no-underline hover:underline text-center'>Cervezas</Link>
        <Link to="/category/Licor" className='no-underline hover:underline text-center'>Licores</Link>
        <Link to="/category/Champagne" className='no-underline hover:underline text-center'>Champagne</Link>
        <Link to="/category/Gin" className='no-underline hover:underline text-center'>Gin</Link>
        <Link to="/Carrito"><ImCart className='cartIcon'/><span className='spanNumber'>2</span></Link>
      </div>   
      
    </nav>

    </>
  )
}

export default navBar