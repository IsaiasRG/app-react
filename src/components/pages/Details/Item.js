import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import {misProductosId} from "../../../productos";
import {useCart} from "../../../context/CartProvider";
import ItemCount from "../../ItemCount/ItemCount";
import NavBar from "../../NavBar/NavBar";

<NavBar/>

const Item = ({ id, nombre, precio, stock, foto, descripcion }) => {

  const [quantity, setQuantity] = useState(0);
  const [productos, setProductos] = useState(null)
  const { Id } = useParams()
  const { addItem } = useCart();

  const handleAddToCart = (number) => {
    setQuantity(number);
    addItem({ id: id, nombre, precio, stock, foto, descripcion }, number);}

  useEffect(() => {
    misProductosId(Number(Id))
      .then((productos) => {
          setProductos(productos)
      })
      .catch(err => console.log({ err }))
  }, [Id])




      return (
        <section>
         <Link to="/producto" className="flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[120px] py-1 px-2 rounded-full">
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
            <div>
                        { stock === 0 ? 
                            (<p className='text-danger bg-danger-subtle text-center rounded'> Fuera de stock</p>)
                            : quantity > 0 ?
                            (<Link to='/cart' className='btn btn-primary'>Finalizar compra</Link>)
                            : (<ItemCount initial={1} stock={stock || 0} onAdd={handleAddToCart} />)
                        }
                    </div>
        </div>
    </div>
    </section>
      )
}

export default Item;