import { useState } from 'react'

const ItemContador = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial)
  
    const incrementar = () => {
      if (cantidad >= stock) return
      setCantidad(prev => prev + 1)
    }
  
    const restar = () => {
      if (cantidad <= 1) return
      setCantidad(prev => prev - 1)
    }
  
    const handleOnAdd = () => {
      onAdd(cantidad)
    }
  
    return (
      <div className='flex items-center'>
        <div>
          <button
            className='w-[28px] h-[28px] flex justify-center items-center'
            onClick={incrementar}
          >
            +
          </button>
          <p>{cantidad}</p>
          <button
            className='w-[28px] h-[28px] flex justify-center items-center'
            onClick={restar}
          >
            -
          </button>
        </div>
        <button className='px-4 h-full max-w-[200px] text-white flex gap-2 items-center justify-center' onClick={handleOnAdd}> Agregar a tu carrito
          
        </button>
      </div>
    )
  }
  
  export default ItemContador;