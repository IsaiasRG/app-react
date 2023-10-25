import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {misProductos} from "../../../productos"
import './item-container.css';



const Tienda = () => {

  const [losProductos, setProductos] = useState([])
   

  useEffect(() => {
   misProductos()
      .then((losProductos) => setProductos(losProductos))
      .catch(err => console.log({ err }))
  }, [])
 
  return (
    <section>
        {losProductos.map(({
          id,foto,nombre,descripcion,precio
        }) => (
            <article key={id}>
          <div className='conteiner'>
          <div className='card'>
              <img src={foto} height="100%" width= "300px" alt={nombre}/>
              <div>
                  <h1 className="card-title">{nombre} </h1>
                  <p className="card-text">{precio} $</p>
                  <p className="card-text">{descripcion} </p>
                  <Link to = {`/producto/:${id}`} className="link">Ver mas detalles</Link>
              </div>
          </div>
      </div>
            </article>
          ))}
    </section>
  );
}

export default Tienda;
