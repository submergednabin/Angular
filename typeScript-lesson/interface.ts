interface ExampleInterface {
  getProductDetails(productId: number): string;
  displayProducts(productId: number): string;
}

class Furniture implements ExampleInterface {
  getProductDetails(productId: number): string {
    throw new Error("Method not implemented.");
  }
  displayProducts(productId: number): string {
    throw new Error("Method not implemented.");
  }
}
