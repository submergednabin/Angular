function printData<T>(data:T){
    console.log(data)
}

let data = printData<string>("hello generics");
console.log(data)


let data1 = printData<number>(123)
console.log(data1)

let data2= printData<boolean>(true)
console.log(data2)

let data3 = printData<number[]>([2,3,5])
console.log(data3)