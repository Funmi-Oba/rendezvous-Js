import Product, { mergeProducts, productService } from "./product.js";
import Payment, {
  calculateDiscount,
  paymentService,
  processPayment,
} from "./payment.js";
import Cart, { applyDiscount, calculateTotal, cartService } from "./cart.js";

const products = new Product();
// products.getProducts();
// products.getProductById(1);
// products.addProduct();
// products.deleteProduct(1);
// products.updateProduct(1);

const payments = new Payment();
// payments.totalAmount(100);
// payments.discountedAmount(100, 10);

const carts = new Cart();
// carts.addToCart();
// carts.removeFromCart(1);
// carts.getCartItems();
// carts.getTotalAmount();

const mergeProduct = mergeProducts([
  {
    productList1: [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ],
  },
  {
    productList2: [
      { id: 3, title: "Product 3" },
      { id: 4, title: "Product 4" },
    ],
  },
]);
console.log(mergeProduct);

const discountedAmount = calculateDiscount(100, 10);
console.log(`Discounted Amount: $${discountedAmount}`);

const paymentProcessed = processPayment(90);
console.log(`Payment Processed: ${paymentProcessed}`);
const discount = applyDiscount(
  {
    items: [
      { price: 50, quantity: 1 },
      { price: 30, quantity: 2 },
    ],
  },
  10
);
console.log(`Total after discount: $${discount}`);

const total = calculateTotal({
  items: [
    { price: 50, quantity: 1 },
    { price: 30, quantity: 2 },
  ],
});
console.log(`Total Amount: $${total}`);


