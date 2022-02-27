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
              <img src={producto.imagen} alt="Avatar Tailwind CSS Component"></img>                          
            </div>
          </div>
          <div>
            <div class="font-bold">{producto.marca}</div>
            <div class="text-sm opacity-50">{producto.tipo}</div>
          </div>
        </div>
        </td>
          <td>
            <h4 className="text-md font-medium text-blanck-900">{producto.descripcion}</h4>
            <br></br>
            <span class="badge badge-ghost badge-md mr-4 ">{producto.envio}</span>
            <button class="btn btn-ghost bg-gray-500 btn-xs">Eliminar</button>
          </td>
          <td><input class="w-24 text-black" type="number" min="1" /* value={} *//></td>
          <th>
          <h4 className="text-md font-medium text-blanck-900">{producto.precio}</h4>
          </th>
        </tr>
        

    </>
  )
}

export default Items