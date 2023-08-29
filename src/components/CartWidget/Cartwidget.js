import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDog} from '@fortawesome/free-solid-svg-icons';
import "../style/style-widget.css"

const CartWidget = () => {
    return (
      <div className="cart-widget">
      <FontAwesomeIcon icon={faDog} className='icon'/>
      <div className="texto-carrito">0</div>
      </div>
    );
  };
  
  export default CartWidget;