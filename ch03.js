console.log("Minimum");
var min = function(n1, n2){
    return n1 < n2 ? n1 : n2;
}
console.log(min(1,2));
console.log("");

console.log("Recursion");
var isEven = function(number){
    if(number < 0)
        number *= -1;
    
    if(number == 0)
        return true;
    else if(number == 1)
        return false;
    else
        return isEven(number - 2);
}
console.log(isEven(-5));
console.log("");

console.log("Bean Counting");
var countBs = function(word){
    var sum = 0;
    for(var i = 0; i < word.length; i++){
        if(word.charAt(i) == "B")
            sum++;
    }
    return sum; 
}
console.log(countBs("BBC"));

var countChar = function(word, c){
    var sum = 0;
    for(var i = 0; i < word.length; i++){
        if(word.charAt(i) == c)
            sum++
    }
    return sum;
}
console.log(countChar("kksdg", "k"));
