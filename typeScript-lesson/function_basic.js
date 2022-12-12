// name function example
function getProductDetails(productId, prodName) {
    return ("Product Id " + productId + "\n" + " product Name : " + prodName + "\n");
}
var show = getProductDetails(12, "Apple");
console.log("Name Function Example \n");
console.log(show);
//Anonimous function
var showDetails = function (id, names) {
    return "Product Id: " + id + "\n" + " product Name: " + names + "\n";
};
console.log("Anonymous Function Example \n");
console.log(showDetails(5, "Orange"));
//Arrow function
var details = function (name, ids) {
    return "Product Name: " + name + "\n" + " product Id: " + ids + "\n";
};
console.log("Arrow Function Example \n");
console.log(details("Banana", 100));
