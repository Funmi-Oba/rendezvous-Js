// 

// 

export class Product {
  constructor({ id, title, price, category, description, image }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
  }
}
const url = "https://fakestoreapi.com/products";
export class ProductService {
  #handlePromise = async ({ url, method = "GET", body = null }) => {
    const response = await fetch(`https://fakestoreapi.com/products/${url}`, {
      method,
      body: body ? JSON.stringify(body) : null,
    });
    return await response.json();
  };

  getProducts = async () => {
    const response = await this.#handlePromise({ url: "" });
   // console.log(response);
    return response;
  };
  getProductById = async (id) => {
    const response = await this.#handlePromise({ url: id });
    //console.log(response);
    return response;
  };
  addProduct = async () => {
    const product = {
      title: "new product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await this.#handlePromise({url: '', method: 'POST', body: product});
    ///console.log(response);
    return response;
  };
  deleteProduct = async (id) => {
    const response = await this.#handlePromise({url: id, method: 'DELETE'});
 // console.log(`Product with id ${id} has been deleted`, response);
  return response;
  }
  updateProduct = async (id) => {
    const updatedProduct = {
      title: "updated product",
      price: 15.0,
  }
    const response = await this.#handlePromise({url: id, method: 'PUT', body: updatedProduct});
   // console.log(`Product with id ${id} has been updated`, response);
    return response;
}
}



const eventContainer = document.getElementById ("event-container");
const createProductCard = (product) => {
  const card1 = document.createElement("div");
  card1.addEventListener("click", () => {window.location.href = `event.html?productId=${product.id}`});
  card1.className =
    "rounded-lg shadow-lg border border-1 border-[#E0E0E0] aspect-[3/4] relative overflow-hidden";
  const imageContainer = document.createElement("div");
  imageContainer.className = "h-80";
  const image = document.createElement("img");
  image.src = product.image;
  image.className = "w-full h-full object-contain p-4";
  imageContainer.appendChild(image);
  card1.appendChild(imageContainer);
  eventContainer.appendChild(card1);
  const cardDetails = document.createElement("div");
  cardDetails.className = "bg-white absolute w-full bottom-0 p-4";
  const title = document.createElement("h3");
  title.className = "text-lg text-blue-700 font-bold";
  title.textContent = product.title;
  const price = document.createElement("p");
  price.className = "text-md font-bold text-green-400 pb-4";
  price.textContent = `$${product.price}`;
  const description = document.createElement("p");
  description.className = "text-sm text-gray-600";
  description.textContent = product.description.slice(0, 200) + "...";
  const viewEventLink = document.createElement("a");
  viewEventLink.href = "event.html?productId=" + product.id;
  viewEventLink.className = "no-underline cursor-pointer";
  const viewEventdiv = document.createElement("div");
  viewEventdiv.className = "flex items-center gap-1";
  const viewEventText = document.createElement("p");
  viewEventText.className = "text-[#432361] text-sm py-4 font-semibold";
  viewEventText.textContent = "View Event";
  const span = document.createElement("span");
  const arrowIcon = document.createElement("img");
  arrowIcon.src = "images/icons/Arrow--up-right.svg";
  span.appendChild(arrowIcon);
  viewEventdiv.appendChild(viewEventText);
  viewEventdiv.appendChild(span);
  viewEventLink.appendChild(viewEventdiv);
  cardDetails.appendChild(title);
 cardDetails.appendChild(price);
  cardDetails.appendChild(description);
 cardDetails.appendChild(viewEventLink);
  card1.appendChild(cardDetails);
  eventContainer.appendChild(card1);
};

const productService = new ProductService();
productService.getProducts();
productService.getProductById(6);
// productService.addProduct();
// productService.deleteProduct(20);
// productService.updateProduct(20);

const displayProducts = async () => {
  const products = await productService.getProducts();
 // console.log("Products response:", products);
    eventContainer.innerHTML = "";
  products.slice(0,6).forEach((product) => {
    createProductCard(product)
  });
}
displayProducts();