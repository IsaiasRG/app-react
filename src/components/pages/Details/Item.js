import { useState, useEffect } from "react";
import { useParams } from "react";
import {Link} from "react-router-dom"
import {misProductosId} from "../../../productos";
import NavBar from "../../NavBar/NavBar";

<NavBar/>

const Item = () => {

  const [productos, setProductos] = useState(null)
  const { productoId } = useParams()

  useEffect(() => {
    misProductosId(+productoId)
      .then((productos) => {
          setProductos(productos)
      })
      .catch(err => console.log({ err }))
  }, [productoId])

      return (
        <section>
         <Link to="/products" className="flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[120px] py-1 px-2 rounded-full">
                <button className='btn btn-outside-danger'>
                    Volver
                </button>
                </Link>
        <div className='conteiner'>
        <div className='card'>
            <img src={productos?.foto} height="100%" width= "300px" alt={productos?.nombre}/>
            <div>
                <h1 className="card-title">{productos?.nombre} </h1>
                <p className="card-text">{productos?.precio} $</p>
                <p className="card-text">{productos?.descripcion} </p>
            </div>
        </div>
    </div>
    </section>
      )
}

export default Item;