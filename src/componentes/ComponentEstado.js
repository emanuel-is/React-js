/* import {useEffect, useState} from 'react' */

const ComponentEstado = () => {
    /* const [contador , setContador] = useState(1) *//* el seState setea en cuanto arranca el contador */


/* 
    useEffect ( ()=>{

        Promesa();
        console.log('se ejecuto el efecto');
        return() =>{
            console.log('limpieza al amount');
        }

    } ,[] )

    const Promesa =  ()=>{
        console.log('inicia la promesa');
        
        const miPromesa = new Promesa( (resolve , reject) => {
            if (Math.ramdom() < 0.5){
                reject('la promesa se rechazo')
            }else{
                resolve('la promesa se resolvio');
            }

        } )

        miPromesa.then( (res) =>{
            console.log(res);
        }).catch(e=>{
            console.log(e)
        }).finally( ()=>{
            console.log('Finally')
        })


    }

    const sumarHandler = ()=>{
        setContador(contador + 1)
    }
    const restarHandler = ()=>{
        setContador(contador - 1);
       
    }
 */
    
    
  return (
    <div>ComponentEstado

    {/* Total : {contador}
    <br></br>
    <button onClick={()=> {  {restarHandler(1)}} }>Apretar para restar</button>
    <br></br>
    <button onClick={sumarHandler}>Apretar para sumar</button>
    <br></br> */}
    {/* <button onClick={restarHandler}>Apretar para restar</button> */}

    </div> 
    

   
  )
}

export default ComponentEstado