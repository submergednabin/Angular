// name function example
function getProductDetails(productId: number, prodName: string): string {
  return (
    "Product Id " + productId + "\n" + " product Name : " + prodName + "\n"
  );
}
const show = getProductDetails(12, "Apple");
console.log("Name Function Example \n");
console.log(show);

//Anonimous function
var showDetails = function (id: number, names: string): string {
  return "Product Id: " + id + "\n" + " product Name: " + names + "\n";
};
console.log("Anonymous Function Example \n");
console.log(showDetails(5, "Orange"));

//Arrow function
const details = (name: string, ids: Number) => {
  return "Product Name: " + name + "\n" + " product Id: " + ids + "\n";
};
console.log("Arrow Function Example \n");
console.log(details("Banana", 100));
