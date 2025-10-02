class Cart {
    constructor() {
        
       
    }

    addItemToCart({item}) {
       
    }
    removeItemFromCart(itemId) {
        
    }
    getTotalItemsInCart() {
        return this.items.length;
    }
}

export default Cart;

export const cartService = () => {
    console.log("CartService initialized");
}
export const calculateTotal = (cart) => {
    console.log("Calculating total for cart:", cart);
    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    console.log("Total amount:", total);
    return total;
}
export const applyDiscount = (cart, discount) => {
    console.log("Applying discount to cart:", cart);
    const total = calculateTotal(cart);
    const discountedTotal = total - (total * discount) / 100;
    console.log(`Total after ${discount}% discount:`, discountedTotal);
    return discountedTotal;
}