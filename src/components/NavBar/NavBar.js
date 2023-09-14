import CartWidget from '../CartWidget/Cartwidget';
import { Link, NavLink} from 'react-router-dom';

const router = [
  {
    path:'/',
    title: 'Inicio',
  },

  {
    path:'/productos',
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
            {router.map((route))}
          </ul>

          <CartWidget />
         
        </nav>

  )
     
};

export default NavBar;