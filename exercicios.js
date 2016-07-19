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