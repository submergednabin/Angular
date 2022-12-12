abstract class Product{
    getFeatures():void{
        console.log("Hi")
    }

    abstract getProductName();
}

class Gadget extends Product {
    getProductName() {
        return "product id"
    }
}