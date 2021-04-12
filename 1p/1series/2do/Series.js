// INSTRUCTIONS
//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// make sure they run on a browser printing the result
//
// SERIES

//0. Sample - problem statment, NOTE this is actually NOT a exercise, but an EXAMPLE
//
//   sample(n) //routine calling
//
// -> input, preconditions, arguments
// <- output, postconditions, result


<script>
//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements
//Solucion sin funciones
let num = prompt("Ingresa el numero de elementos de la serie de fibonacci que deseas ver");

let n1 = 0, n2 = 1, nn, fibonacci = [];
  
for(let i = 1; i <= num; i++){
    fibonacci.push(n1);
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
}
document.write('Los primeros '+ num+' numeros de la serie fibonacci son: '+fibonacci+'.');
  
//Solucion con funciones
let num = prompt("Ingresa el numero de elementos de la serie de fibonacci que deseas ver");

  function fib(n){
let n1 = 0, n2 = 1, nn, fibonacci = [];
  
for(let i = 1; i <= n; i++){
    fibonacci.push(n1);
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
}
  return fibonacci;
  }
document.write('Los primeros '+ num+' numeros de la serie fibonacci son: '+fib(num)+'.');
</script>


//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n
<script>
//Solucion sin funciones
let num = prompt('Ingresa un numero:');
let potencias = [], temp;

for(let i = 0; i<= num; i++){
		temp = Math.pow(2,i);
  	potencias.push(temp);
}
document.write('Las potencias de 2^0 hasta 2^'+num+' son: ' +potencias+'.');

//Solucion con funciones
let num = prompt('Ingresa un numero:');
function pot(n){

  let potencias = [], temp;

	for(let i = 0; i<= n; i++){
			temp = Math.pow(2,i);
  		potencias.push(temp);
			}
  			return potencias;
}
document.write('Las potencias de 2^0 hasta 2^'+num+' son: ' +pot(num)+'.');
</script>

//3. Factorial
//   factorial(n)
// -> n integer
// <- the n first factorial elements
<script>
//Solucion sin funciones
let num = prompt('Ingresa un numero:');
let fact=1;

for(let i = num; i>0; i--){
		fact = fact * i;
}
document.write('El factorial de '+num+' es: '+fact+'.');
//Solucion con funciones
let num = prompt('Ingresa un numero:');

function factorial(n){
let fact=1;

for(let i = n; i>0; i--){
		fact = fact * i;
}
  return fact;
  }
document.write('El factorial de '+num+' es: '+factorial(num)+'.');
</script>
//2. Powers of 10
//   power10(n)
// -> n integer
// <- the n first elements of 10^nS
<script>
//Solucion sin funciones
let num = prompt('Ingresa un numero:');
let potencias = [], temp;

for(let i = 0; i<= num; i++){
		temp = Math.pow(10,i);
  	potencias.push(temp);
}
document.write('Las potencias de 10^0 hasta 10^'+num+' son: ' +potencias+'.');

//Solucion con funciones
let num = prompt('Ingresa un numero:');
function pot(n){

  let potencias = [], temp;

	for(let i = 0; i<= n; i++){
			temp = Math.pow(10,i);
  		potencias.push(temp);
			}
  			return potencias;
}
document.write('Las potencias de 10^0 hasta 10^'+num+' son: ' +pot(num)+'.');
</script>
