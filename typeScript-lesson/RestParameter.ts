function displayScores(name:string, ...scores:number[]){
    return "Name is "+ name + "Score is " + scores;
}
console.log(displayScores("John", 10,20,30,40,50))