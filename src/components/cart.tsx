import { useStore } from '@nanostores/react';
import { $cart, removeBookFromCart, total } from '../store/cart';

import Bookstore from '../images/bookstore.png';
import './cart.style.css';
import CartItems from './cart/CartItems';

const EmptyCart = () => {
  return (
    <>
        <p className="icon">
            <span className="" role="">
                <img src={Bookstore} height={75} width={75} alt="books" />
            </span>
        </p>
        <p className="empty">Your cart is empty! Add a book to purchase.</p>
    </>
  )
}

const Cart = () => {

    // $cart is a map that holds all the books as key:value pairs
    const cart = useStore($cart);
    const cartTotal = useStore(total);
  return (
    <div className="cart">
        <h2 className="">Your Cart</h2>
        { Object.values(cart).length > 0 ?  <CartItems cart={cart} />  :  <EmptyCart /> }
        { Object.values(cart).length > 0  &&  <h1>Checkout Notice</h1> }
    </div>
  )
}

export default Cart;