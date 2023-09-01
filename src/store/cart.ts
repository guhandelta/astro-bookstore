import { computed, map } from 'nanostores'
import type { Book, CartItem } from '../types'

// Adding $ in the beginning of a state var is similar to the Svelte's store contract, where $ is added before store variable to get store’s value and subscribe for store’s changes.
// Each Record in the maps will hold key - value pairs, where the key is a number and the value is of Book type
export const $cart = map<Record<number, CartItem>>({});

// This cart can be accessed by any components from other frameworks like React, SOlid...etc, and perform certain actions, along with that.

export function addBookToCart(book: Book){
    /* By .get(), we are trying to access the Map, to fetch a Record, by the id/key, which in this case is a number || This is also to subtly check if the book that we are trying to add it to the cart, already exists in the cart */
    const cartItem = $cart.get()[book.id];

    const quantity = cartItem ? cartItem.quantity : 0;

    $cart.setKey(book.id, { item: book, quantity: quantity+1 });
}

export function removeBookFromCart(itemId: number){
    // @ts-ignore
    // the tsignore was for the error on undefined
    $cart.setKey(itemId, undefined);
}

export const total = computed($cart, entries => {
    let total = 0;
      Object.values(entries).forEach((entry) => {
        if(!entry) return;

        total += entry.quantity + entry.item.price;
    });

    return total;
});