import { addBookToCart } from "../store/cart"
import type { Book } from "../types"

const AddToCart = ({ item } : { item: Book }) => {
  return (
    <button 
        className="button-link"
        onClick={() => addBookToCart(item)}
    >
        Add to Cart
    </button>
  )
}

export default AddToCart