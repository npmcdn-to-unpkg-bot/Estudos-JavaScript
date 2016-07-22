// <-------------- Exercício 1 -------------->
var triangulo = "";

for(var i = 0; i < 7; i++){
    triangulo += "#";
    console.log(triangulo);
}

// <-------------- Exercício 2 -------------->
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

// <-------------- Exercício 3 -------------->
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

// <-------------- Exercício 4 -------------->
function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

console.log(min(0, 10));
console.log(min(0, -10));

// <-------------- Exercício 5 -------------->
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

// <-------------- Exercício 6 -------------->
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

// <-------------- Exercício 7 -------------->
function range(start, end) {
    var array = [];
    
    for (var index = start; index <= end; index++) {
        array.push(index);
    }

    return array;
}

function sum(array) {
    var soma = 0;
    
    for (var index = 0; index < array.length; index++) {
        soma += array[index];
    }

    return soma;
}

var total = sum(range(1,10));

console.log(total);

// <-------------- Exercício 8 -------------->
function reverseArray(array) {
    var retorno = [];

    for (var index = 0; index < array.length; index++) {
        retorno.unshift(array[index]);
    }

    return retorno;
}

function reverseArrayInPlace(array) {
    var auxiliar;

    for (var index = 0; index < Math.floor(array.length / 2); index++) {
        auxiliar = array[index];
        array[index] = array[array.length - 1 - index];
        array[array.length - 1 - index] = auxiliar;        
    }

    return array;
}

var array = [1,2,3];
console.log(reverseArray(array));
array = [1,2,3,4,5];
console.log(reverseArrayInPlace(array));

// <-------------- Exercício 9 -------------->
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));

// <-------------- Exercício 10 -------------->
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

