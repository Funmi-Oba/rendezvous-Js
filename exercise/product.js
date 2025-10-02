 class Product {
  constructor() {
    
  }

  getProducts = () => {

  };
  getProductById = (id) => {

  };
  addProduct = (product) => {

  };
  deleteProduct = (id) => {

  };
  updateProduct = (id, updatedProduct) => {

  };
}
export default Product;

export const productService = () => {
    console.log("ProductService initialized");
}
export const mergeProducts = ([{productList1}, {productList2}]) => {
    console.log("Merging product lists");
    console.log("Product List 1:", productList1[2]);
    console.log("Product List 2:", productList2[3]);
    console.log("Product Merged")
    return [...productList1, ...productList2];

}

