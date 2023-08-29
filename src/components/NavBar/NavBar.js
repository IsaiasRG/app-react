import CartWidget from '../CartWidget/Cartwidget';


const NavBar = () => {

  return (
        <nav id="naveg">
          <ul className="lista-nav">
            <li><a href="./index.html" className="links active">Inicio</a></li>
            <li><a href="./pages/tienda.html" className="links">Tienda</a></li>
          </ul>

          <CartWidget />
         
        </nav>

  )
     
};

export default NavBar;