import { ProductService } from "./main.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
 
//console.log(params.get("productId"));

const productService = new ProductService();
const product = await productService.getProductById(params.get("productId"));
//console.log(product);

const productImage = document.getElementById("image");
productImage.src = product.image;
productImage.alt = product.title;

const productTitle = document.getElementById("title")
productTitle.textContent = product.title;

const productPrice = document.getElementById("price")
productPrice.textContent = `$${product.price}`;

const productDescription = document.getElementById("description")
productDescription.textContent = product.description;

const productCategory = document.getElementById("category")
productCategory.textContent = product.category.toUpperCase();

const productRating = document.getElementById("rating")
productRating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

