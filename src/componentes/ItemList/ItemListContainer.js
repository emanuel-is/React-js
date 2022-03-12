import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


  
const ItemListContainer = (props) => {
    const {product} =useParams();
    console.log("parametro", useParams())
    const [bebidas, setBebidas]= useState( []);
    
    
  useEffect(() => {
    console.log("useEfect");
      obtenerDatos()
      .then( respuesta=>setBebidas(respuesta));  
  }, [product])
  

    const obtenerDatos = async ()=>{
      const data= await fetch("https://run.mocky.io/v3/3ba036e9-7f24-47a6-88c9-5b3427646b01");
      const dataJson = await data.json();
      
      if(!product){
        console.log(dataJson)
        return(dataJson);
      }
      else{
        const dataFilter = await category(dataJson);
        console.log(dataFilter);
        return(dataFilter);
      }
      
      
        }
    function category (listado){          
      return new Promise(  (resolve, reject)=>{  
       
          const categoryRequest = listado.filter( category=>{
            return category.product===product;
            
          })
          resolve(categoryRequest)
          console.log(categoryRequest)
        
      })
    }

  return (
    <>
    <ItemList bebidas={bebidas}/>
    </>
  )
}

export default ItemListContainer