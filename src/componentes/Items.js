import React from 'react'






function Items({producto}) {
  return (
    <>
     <tr>
        <th>
          <label><input type="checkbox" class="checkbox"></input></label>
        </th>
        <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="w-24 rounded-xl">
              <img src={producto.imag} alt="Avatar Tailwind CSS Component"></img>                          
            </div>
          </div>
          <div>
            <div class="font-bold">{producto.nombre}</div>
            <div class="text-sm opacity-50">{producto.tipo}</div>
          </div>
        </div>
        </td>
          <td>
            <h4 className="text-md font-medium text-blanck-900">{producto.descripcion}</h4>
            <br></br>
            <span class="badge badge-ghost badge-md mr-4 ">Envio gratis</span>
            <button class="btn btn-ghost btn-xs">Eliminar</button>
          </td>
          <td>Purple</td>
          <th>
          <h4 className="text-md font-medium text-blanck-900">{producto.precio}</h4>
          </th>
        </tr>
        

    </>
  )
}

export default Items