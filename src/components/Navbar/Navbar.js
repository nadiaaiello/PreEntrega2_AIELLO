import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const Navbar=()=>{
    return(
        <nav>
            <h1>Kiosco Techno</h1>
            <div>
                <button>Productos</button>
                <button>Servicios</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;