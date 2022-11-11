import React, { useEffect, useState } from "react";
import Link from "react-router-dom";
//importar paquete api graphql
import Producto from './Producto';



const Productos = () => {
 // component state 
 const [products, setProductos] = useState ([]);

 const renderProductos = () => (
    <tbody>
        {products.map((producto, index) =>(
            <Producto
            key={index}
            index={index}
            id={producto._id}
            name={producto.name}
            price={producto.price}
            image={producto.image}
            onDelete={handleDeleteProduct}







            />
        ))}
    </tbody>
 );

 const handleDeleteProduct = (id) => {

 };

 //llamada a la api 

 const getProductos = () => {
    //llamar api, con ruta 
    .then(res => {
        //actualizacion el state
        console.log(res.data);


        setProductos(res.data);

    });


 };

 //useEffect para la carga de productos 

 useEffect(() => {
    //llamar a la api por medio de la funcion
    getProductos();



 });
  

    return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Producto </th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th> 
                    <Link to="/producto/nuevo"
                    className="btn btn-info mr-1"
                    role="button"
                    aria-pressed="true"
                    >
                        Nuevo Producto
                    </Link>


                    
                </th>

            </tr>
        </thead>
        {renderProductos()}
    </table>
    );
};

export default Productos;
