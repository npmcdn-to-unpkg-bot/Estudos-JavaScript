// Exercício 1
var triangulo = "";

for(var i = 0; i < 7; i++){
    triangulo += "#";
    console.log(triangulo);
}

// Exercício 2
for(var num = 1; num < 101; num++){
    if(num % 3 === 0 && num % 5 === 0)
        console.log("FizzBuzz");
    else if(num % 3 === 0)
        console.log("Fizz");
    else if(num % 5 === 0)
        console.log("Buzz");
    else 
        console.log(num);
}

// Exercício 3
var linha1 = "# # # # ";
var linha2 = " # # # #";

for (var num = 0; num < 8; num++){
    if(num % 2 === 0)
        console.log(linha1);
    else
        console.log(linha2);
}
//
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

// Exercício 4
function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

console.log(min(0, 10));
console.log(min(0, -10));

// Exercício 5
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Exercício 6
function countBs(frase) {
    
    var qtdeB = 0;
    for (var index = 0; index < frase.length - 1; index++) {
        if (frase[index] === "B")
            qtdeB++;
    }

    return qtdeB;
}

function countChar(frase, caractere) {
    
    var qtdeChar = 0;
    for (var index = 0; index < frase.length - 1; index++) {
        if (frase[index] === caractere)
            qtdeChar++;
    }

    return qtdeChar;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak","k"));