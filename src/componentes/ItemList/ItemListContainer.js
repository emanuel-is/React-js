import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


/* const ProductosContainer =[
    { prod :'Whisky', tipo:'Blended Scotch',marca: "Chivas Regal 18 años" , descripcion:"Whisky Chivas Regal 18 Años 750 Ml Botella + Estuche" , precio: 12300, imagen:Imagen3 ,stock: 8 ,envio : "Envio Gratis"},
    { prod :'Vino', tipo:'Cabernet/Malbec', marca: "Rutini" , descripcion:"Vino Rutini Cabernet Malbec 750ml X2 Regalo Caja" , precio: 4569.60, imagen:Imagen1 ,stock: 10, envio : "Envio Gratis"},
    {prod :'Champagne', tipo:'Brut Nature', marca: "Salentein" , descripcion:"Champagne Salentein Brut Nature 750 + Estuche" , precio: 1100, imagen:Imagen2 ,stock: 20, envio : "Envio con Cargo"},
    {prod :'Gin', tipo:'Dry Gin', marca: "Buenos Aires" , descripcion:"Gin Buenos Aires Con Estuche 750ml + Estuche Mix 6 Botánicos" , precio: 6545, imagen:Imagen4 ,stock: 5, envio : "Envio con Cargo"},
    {prod :'Licor', tipo:'Coffee Irlandes', marca: "Sheridan" , descripcion:"Licor Sheridan 750ml Sheridans Irlandes" , precio: 4160, imagen:Imagen5 ,stock: 4, envio : "Envio con Cargo"},
] */

  
    



const ItemListContainer = (props) => {
    const {product} =useParams();
    console.log("parametro", useParams())
    const [bebidas, setBebidas]= useState( []);
    
    
  useEffect(() => {
    console.log("useEfect");
      obtenerDatos();
      category()
  
  }, [])
  

    const obtenerDatos = async ()=>{
      const data= await fetch("https://run.mocky.io/v3/3ba036e9-7f24-47a6-88c9-5b3427646b01");
      const bebidas = await data.json();
      
      category()
      console.log(bebidas)
      setBebidas(bebidas)
      
        }
    function category (){           /* estoy tratando de manejar el tema de la categoria por fuera del fetch */
      return new Promise(  (resolve, reject)=>{  /* con una promesa, pero la verdad es que no me esta saliendo. */
        let error = false;
        if (product ===undefined){
          reject(new Error("error obteniendo CATEGORIAS"));
        }else{
           const categoryRequest = bebidas.filter( category=>{
            return category.product===product;
            
          })
          resolve(categoryRequest)
          console.log(categoryRequest)
        }
      })
    }

  return (
    <>
    <ItemList bebidas={bebidas}/>

    
    </>
  )
}

export default ItemListContainer