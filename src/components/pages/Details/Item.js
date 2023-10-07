import ItemContador from "../../ItemContador/ItemContador";
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import {misProductosId} from "../../../productos";
import NavBar from "../../NavBar/NavBar";

<NavBar/>

const Item = ({item}) => {
    const [CantidadTotal, setCantidadTotal] = useState(0)
    const handleAddToCard = (number) => {
        setCantidadTotal(number)
      }

  const [productos, setProductos] = useState(null)
  const { Id } = useParams()

  useEffect(() => {
    misProductosId(Number(Id))
      .then((productos) => {
          setProductos(productos)
      })
      .catch(err => console.log({ err }))
  }, [Id])

  if (!item) {
    return (
      <h1>El producto no fue encontrado</h1>
    )
  }
            let [stock] = item;
      return (
        <section>
         <Link to="/productos" className="flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[120px] py-1 px-2 rounded-full">
                <button className='btn btn-danger'>
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
            <div className='flex justify-end w-full'>
          {CantidadTotal > 0
            ? (
              <Link to='/cart'>
                Checkout       
              </Link>
              )
            : <ItemContador stock={stock || 0} initial={1} onAdd={handleAddToCard} />}
        </div>
        </div>
    </div>
    </section>
      )
}

export default Item;