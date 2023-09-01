import { removeBookFromCart } from "../../store/cart";
import type { CartItem } from "../../types";

function formatCurrency(amount:number) {
  return new Intl.NumberFormat('en-us',{
      style: 'currency',
      currency: 'USD',
      // minimumFractionDigits: 2
  }).format(amount);
}

const CartItems = ({ cart }: { cart: Record<number, CartItem> }) => {
  return (
    <>
      <ul className="items">
        {Object.values(cart).map(entry => {
          if(!entry){
            return;
          }else{
            return (
              <li key={entry.item.id}>
                <span className="quantity">{entry.quantity}x</span>
                <span className="title">{entry.item.title}</span>
                <span className="remove">
                  <button
                    title="Remove Item"
                    onClick={() => removeBookFromCart(entry.item.id)}
                  >
                    &times;
                  </button>
                </span>
                <span className="price">{formatCurrency(entry.item.price)}</span>
              </li>
            )
          }
        })

        }
      </ul>
    </>
  )
}

export default CartItems