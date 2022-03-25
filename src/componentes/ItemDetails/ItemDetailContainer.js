import React from 'react'
import ItemDitail from './ItemDitail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DatosProd = [
  { 
   "id" : "1",
   "product" :"Whisky",
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
   "product" :"Whisky",
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
   "imagen" :"https://www.espaciovino.com.ar/media/default/0001/53/thumb_52840_default_medium.jpeg",
   "stock" : 30,
   "envio" : "Envío con Cargo"
  
 },
 { 
  "id" : "10",
  "product" :"Cerveza",
  "tipo": "Honey 473ml",
  "marca": "Temple",
  "descripción": "Cerveza Temple Honey 473ml X6 Unidades",
  "precio": 1080,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_708087-MLA49179825210_022022-O.jpg",
  "stock" : 100,
  "envio" : "Envío Gratis"
 
},
{ 
  "id" : "11",
  "product" :"Cerveza",
  "tipo": "Amber Lager 410ml",
  "marca": "Patagonia",
  "descripción": "Patagonia Amber Lager 410ml X6 Unidades",
  "precio": 1140,
  "imagen" :"https://beermarket.com.ar/wp-content/uploads/2020/11/Patagonia-Amber-Lager-Sixpack-473ml.png",
  "stock" :70,
  "envio" : "Envío Gratis"
 
},
{ 
  "id" : "12",
  "product" :"Cerveza",
  "tipo": "Lata 269 Ml",
  "marca": "Corona",
  "descripción": "Heladera Conservadora Corona 15 Lts + 10 Corona Lata 269 Ml",
  "precio": 10595,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_605577-MLA49276646760_032022-V.jpg",
  "stock" :6,
  "envio" : "Envío Gratis"
 
},
{ 
  "id" : "13",
  "product" :"Whisky",
  "tipo": "Black Label 750 Ml",
  "marca": "Johnny Walker",
  "descripción": "Whisky Johnny Walker Black Label 750 Ml Con Caja",
  "precio": 3920,
  "imagen" :"https://d2r9epyceweg5n.cloudfront.net/stores/001/685/376/products/20210827_154108-1-011-60a129d5cf29fd105216313108859007-640-0.jpeg",
  "stock" :58,
  "envio" : "Envío con Cargo"
 
},
{ 
  "id" : "14",
  "product" :"Vino",
  "tipo": "Cabernet 750 Ml",
  "marca": "Tumpeter",
  "descripción": "Vino Trumpeter Cabernet 750 Ml Botella Trumpeter",
  "precio": 1100,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_621510-MLA44399115307_122020-O.webp",
  "stock" :300,
  "envio" : "Envío con Cargo"
 
},
{ 
  "id" : "15",
  "product" :"Vino",
  "tipo": "Red Blend Malbec 750 Ml",
  "marca": "Nicasia Vineyards",
  "descripción": "Vino Nicasia Vineyards Red Blend Malbec X2 750ml + Estuche",
  "precio":3360 ,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_850135-MLA49179818607_022022-O.webp",
  "stock" :10,
  "envio" : "Envío con Cargo"
 
},
{ 
  "id" : "16",
  "product" :"Licor",
  "tipo": "Cafe 750 Ml",
  "marca": "Borguetti",
  "descripción": "Licor Borguetti Cafe 750 Ml Caffe Espresso Borguetti",
  "precio":2210 ,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_944393-MLA46398843590_062021-O.webp",
  "stock" :25,
  "envio" : "Envío Gratis"
 
},
{ 
  "id" : "17",
  "product" :"Gin",
  "tipo": "Gin 700 Ml",
  "marca": "Bulldog",
  "descripción": "Pack 3 Unidades Gin Bulldog 700ml Bulldog",
  "precio":11610 ,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_760013-MLA43602713639_092020-O.webp",
  "stock" :32,
  "envio" : "Envío Gratis"
 
},
{ 
  "id" : "18",
  "product" :"Gin",
  "tipo": "Gin 750 Ml",
  "marca": "Heredero",
  "descripción": "Gin Heredero 750 Ml + Copon Con Estuche Regalo",
  "precio":3200 ,
  "imagen" :"https://http2.mlstatic.com/D_NQ_NP_728652-MLA48098898893_112021-O.jpg",
  "stock" :78,
  "envio" : "Envío Gratis"
 
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
    }, 2000);
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
    <>
      
            
      <ItemDitail 
            id={bebida.id}
            prod={bebida.product} 
            tipo={bebida.tipo}
            marca ={bebida.marca}
            descripcion={bebida.descripción}
            precio={bebida.precio}
            stock={bebida.stock}
            img={bebida.imagen}
            envio={bebida.envio}  />
    </>
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