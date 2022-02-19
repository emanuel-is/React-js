
/* snipet:       rafce --------------- con este comando crea todo lo de abajo */

/* snipet:import React from 'react' */

const Footer = (props) => {
  return (
    
    <div>
        <h2>footer</h2>
         <ul>
             <li style={props.stylesLi}>hola
                 <ol>
                     <li>sub hola</li>
                 </ol>
             </li>
         </ul>
    </div>
   
  )
}

export default Footer