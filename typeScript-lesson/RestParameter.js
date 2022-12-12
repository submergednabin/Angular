function displayScores(name) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    return "Name is " + name + "Score is " + scores;
}
console.log(displayScores("John", 10, 20, 30, 40, 50));
