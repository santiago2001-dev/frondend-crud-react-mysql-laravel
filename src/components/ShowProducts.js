import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
let info = [];
export const ShowProducts = () => {
  //usaremos use State para capturar el estado de la variable y luego enviarlo
  //la usamremos para guardar los registgros en un arreglo
  const [products, setProducts] = useState([]);


  const getAll = async () => {
    let { data } = await axios.get(`${endpoint}/product`);
    setProducts(data);
    info = data;
  
  };

  const deliteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAll();

  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <Link to="/create" className="btn btn-primary">
        agregar producto
      </Link>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
         
            <th scope="col">nombre</th>
            <th scope="col">precio</th>
            <th scope="col">existencias</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {info.map((info) => (

     
            <tr key={info.id}>

              <td>{info.description}</td>
              <td>{info.price}</td>
              <td>{info.stock}</td>
              <td>
                
                <Link to={`update/${info.id}`} className="btn btn-primary">
                  editar
                </Link>
                <button
                  onClick={() => deliteProduct(info.id)}
                  className="btn btn-danger"
                > eliminar</button>
              </td>
            </tr>
          ))} 
          <tr>

          </tr>
  </tbody>
</table>
 
 </div>
  )
  }          
 export default ShowProducts;