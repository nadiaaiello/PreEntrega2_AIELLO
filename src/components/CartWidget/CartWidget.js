import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget=()=>{
    return(
        <div>
            <img src={cart} alt="cart-widget"/>
            <h3>0</h3>
        </div>
    )
}

export default CartWidget