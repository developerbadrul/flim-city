import Logo from './../../assets/logo.svg'
import Ring from './../../assets/ring.svg'
// import Sun from './../../assets/icons/sun.svg'
import Moon from './../../assets/icons/moon.svg'
import Cart from './../../assets/icons/checkout.svg'
import { useContext, useState } from 'react'
import CartDetails from '../Cart/CartDetails'
import { MovieContext } from '../../context'

const Header = () => {
    const [showCart, setShowCart] = useState(false)
    const { state } = useContext(MovieContext)

    const handleShowCart = () => {
        setShowCart(true)
    }

    const handleCloseCart = () => {
        setShowCart(false)
    }

    return (
        <header>
            {showCart &&
                (<CartDetails
                    onClose={handleCloseCart}
                />)}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Ring} width="24" height="24" alt="ring" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Moon} width="24" height="24" alt="Moon" />
                        </a>
                    </li>
                    <li className="relative">
                        <a
                            className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                            onClick={handleShowCart}
                        >
                            <img src={Cart} width="24" height="24" alt="cart" />
                        </a>

                        {state.cartData.length > 0 && (
                            <span className="rounded-full absolute -top-2 -right-2 bg-primary text-white text-center text-xs font-semibold w-5 h-5 flex items-center justify-center">
                                {state.cartData.length}
                            </span>
                        )}
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;