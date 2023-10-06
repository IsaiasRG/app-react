import CartWidget from '../CartWidget/Cartwidget';
import { Link } from 'react-router-dom';

const router = [
  {
    path:'/',
    title: 'Inicio',
  },

  {
    path:'/producto',
    title: 'Productos',
  },

  {
    path:'/categorias',
    title: 'Categorias'
  }
]


const NavBar = () => {

  return (
        <nav id="naveg">
          <ul className="lista-nav">
           <li>
          <Link to='/'  className="links">Inicio</Link>

           </li>
           <li>
          <Link to='/producto'  className="links">Productos</Link>

           </li>
           
           <li>
          <Link to='/'  className="links">..</Link>

           </li>
           
           
            
          </ul>

          <CartWidget />
         
        </nav>

  )
     
};


export default NavBar;