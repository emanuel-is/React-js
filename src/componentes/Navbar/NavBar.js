import React from 'react' 
import Logo from '../Imagenes/Logochiquito.png'
import {ImCart} from "react-icons/im"



const navBar = () => {
  return (
    <>
    <nav className='navBar'>
      <a href=""><img src={Logo} alt="imagen" /></a>
      <div className='aNav'>
        <a href="">Vinos</a>
        <a href="">Whiskys</a>
        <a href="">Cervezas</a>
        <a href="">Licores</a>
        <a href="">Champagne</a>
        <a href="">Gin</a>
        <a href=""><ImCart className='cartIcon'/><span className='spanNumber'>2</span></a>
      </div>   
      
    </nav>

    </>
  )
}

export default navBar