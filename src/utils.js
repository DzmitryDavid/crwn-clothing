export const addItemToCart =  (cartItems, addItemToCart) => {
  const existingItem = cartItems.find((item) => (
    item.id === addItemToCart.id
  ))

  if(existingItem) {
    return cartItems.map((cartItem) => 
      (cartItem.id === addItemToCart.id) ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }
  return [...cartItems, {...addItemToCart, quantity: 1}]
}