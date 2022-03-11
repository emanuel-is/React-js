import React from 'react'
import ItemDitail from './ItemDitail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DatosProd = [
  { 
   "id" : "1",
   "product" :"whisky",
   "tipo": "Blended Scotch",
   "marca": "Chivas Regal 18 años",
   "descripción": "Whisky Chivas Regal 18 Años 750 Ml Botella + Estuche",
   "precio": 12300,
   "imagen" :"https://http2.mlstatic.com/D_NQ_NP_734538-MLA49179820502_022022-O.webp",
   "stock" : 30,
   "envio" : "Envío Gratis"
  
 },
 {
   "id" : "2",
   "product" :"Vino",
   "tipo": "Tinto Cabernet/ Malbec",
   "marca": "Rutini",
   "descripción": "Vino Rutini Cabernet Malbec 750ml X2 Regalo Caja",
   "precio": 4569.60,
   "stock" : 30,
   "imagen" :"https://http2.mlstatic.com/D_NQ_NP_750068-MLA49179819332_022022-O.webp",
   "envio" : "Envío Gratis"
  
 },
 {
   "id" : "3",
   "product" :"Vino",
   "tipo": " Tinto Malbec",
   "marca": "Zuccardi",
   "descripción": "Vino Serie A Malbec Zuccardi + 1 Copa + Estuche Regalo",
   "precio": 4725,
   "imagen" :"https://http2.mlstatic.com/D_NQ_NP_773180-MLA49179819202_022022-O.webp",
   "stock" : 30,
   "envio" : "Envío con Cargo"
  
 },
 {
 "id":"4",
  "product" :"Champagne",
  "tipo":"Brut Nature",
  "marca": "Salentein",
  "descripción" :"Champagne Salentein Brut Nature 750 + Estuche" ,
  "precio" : 1100,
  "imagen":"https://http2.mlstatic.com/D_NQ_NP_966205-MLA48039480134_102021-O.jpg",
  "stock" : 30,
  "envio" : "Envió con Cargo"
  
 },
 {
 "id":"5",
  "product" :"Champagne",
  "tipo": "Extra Brut",
  "marca": "Baron B",
  "descripción" :"Champagne Baron B Brut Nature 750ml Original" ,
  "precio" : 3315,
  "imagen": "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52838_default_medium.jpeg ",
  "stock" : 30,
  "envio" : "Envió con Cargo"
 
 },
 { 
   "id" : "6",
   "product" :"whisky",
   "tipo": "Red Label",
   "marca": "Johnnie Walker",
   "descripción": "Whisky Johnny Walker Red Label Importado 750 Ml",
   "precio": 2590,
   "imagen" :"https://d2r9epyceweg5n.cloudfront.net/stores/001/166/410/products/whisky-johnnie-walker-red-label-750ml-importado-venta-online-x-unidad1-dbe6c04bc40d722ff215916643236546-1024-1024.png",
   "stock" : 30,
   "envio" : "Envío Gratis"
   
 },
 { 
   "id" : "7",
   "product" :"Gin",
   "tipo": "Dry Gin",
   "marca": "Buenos Aires",
   "descripción": "Gin Buenos Aires Con Estuche 750ml + Estuche Mix 6 Botánicos",
   "precio": 6680,
   "imagen" :"https://http2.mlstatic.com/D_NQ_NP_819490-MLA44280943075_122020-O.jpg",
   "stock" : 30,
   "envio" : "Envío con Cargo"
   
 },
 { 
   "id" : "8",
   "product" :"Licor",
   "tipo": "Coffee Irlandes",
   "marca": "Sheridans",
   "descripción": "Licor Sheridan 750ml Sheridans Irlandes",
   "precio": 4160,
   "imagen" :"https://http2.mlstatic.com/D_NQ_NP_954639-MLA46194096496_052021-O.jpg",
   "stock" : 30,
   "envio" : "Envío con Cargo"
   
 },
 { 
   "id" : "9",
   "product" :"Licor",
   "tipo": "Licor Amarula",
   "marca": "Amarula",
   "descripción": "Licor Amarula 750ml Oferta",
   "precio": 2800,
   "imagen" :"https://http2.mlstatic.com/D_NQ_NP_954639-MLA46194096496_052021-O.jpg",
   "stock" : 30,
   "envio" : "Envío con Cargo"
  
 }
 ]
     
      




const ItemDetailContainer = () => {
  const{id} = useParams();
  console.log("Params", useParams());

  let obtenerDatos = new Promise( (resolve,reject)=>{
    setTimeout(() => {
      const bebidaEncontrada = DatosProd.find( bebida=>{
      
        return bebida.id===(id);
      })
      resolve(bebidaEncontrada)
    }, 1000);
  })



  const [bebida, setBebida]= useState( []);

  useEffect(() => {
    obtenerDatos

    
    .then( (datosResolve)=>{
      setBebida(datosResolve);
    })
    .catch( (errorReject)=>{
      console.log(errorReject);
    })
    .finally( ()=>{
      console.log("La promesa termino")
    })
  }, [id])
  



  return (
    <div>
      { <ItemDitail 
            id={bebida.id}
            prod={bebida.product} 
            tipo={bebida.tipo}
            marca ={bebida.marca}
            descripcion={bebida.descripción}
            precio={bebida.precio}
            stock={bebida.stock}
            img={bebida.imagen}
            emvio={bebida.envio}  />
      }
    </div>
  )
}

export default ItemDetailContainer



































/* const ItemDetailContainer = () => {
  const [bebida, setBebida]= useState( []);

  const {id} =useParams();

  setTimeout(() => {
      console.log(bebida)
  }, 5000);
  
  useEffect(() => {
    fetch("https://run.mocky.io/v3/3ba036e9-7f24-47a6-88c9-5b3427646b01")
    .then((response) => {          
      return response.json();
    })   
    .then((response) => {
      setBebida(response);
  })
    
  }, [])

     

  return (
    <div className='itemContent'>
            
     {bebida.find(  () =>{
      return <ItemDitail key= {bebida.id} 
      id={bebida.id}
      prod={bebida.product} 
      tipo={bebida.tipo}
      marca ={bebida.marca}
      descripcion={bebida.descripción}
      precio={bebida.precio}
      stock={bebida.stock}
      img={bebida.imagen}
      emvio={bebida.envio} />

    })}
   </div>
     )
}

export default ItemDetailContainer */