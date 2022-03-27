import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getAllBebidas, getAllBebidasFrom} from '../Firebase/Firebase'


  
const ItemListContainer = (props) => {
    const {product} =useParams();
    
    const [bebidas, setBebidas]= useState( []);
    
    
  useEffect(() => {
    const result= product? getAllBebidasFrom(product) : getAllBebidas();
      
      result.then( respuesta=>setBebidas(respuesta));  
  }, [product])
  

   
    
  return (
    <>
     
        <ItemList bebidas={bebidas}/>
      
    
    </>
  )
}

export default ItemListContainer