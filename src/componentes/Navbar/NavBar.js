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
        
        <Link to="/category/Vinos">Vinos</Link>
        <Link to="/category/Whiskys">Whiskys</Link>
        <Link to="/category/Cervezas">Cervezas</Link>
        <Link to="/category/Licores">Licores</Link>
        <Link to="/category/Champagne">Champagne</Link>
        <Link to="/category/Gin">Gin</Link>
        <Link to="/Carrito"><ImCart className='cartIcon'/><span className='spanNumber'>2</span></Link>
      </div>   
      
    </nav>

    </>
  )
}

export default navBar