import React from 'react';
import {Link } from 'react-router-dom';

const Producto = ({index, id, name, price, image, onDelete}) => (
 <tr>
    <th scope="row">{index +1}</th>
    <td>
        {image && <img src={'http://localhost:5000/${image}'} alt={name}
    </td>
    <td>${name}</td>
    <td>${price}</td>
    <td>
    <Link to={'/productos/${id}/editar'}
       className="btn btn-success mr-1"
       role="button"
       aria-pressed="true"
    >
        editar
    </Link>
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => { onDelete(id);}}
      >
        Eliminar
      </button>

    
    </td>
 </tr>

);

export default Producto;