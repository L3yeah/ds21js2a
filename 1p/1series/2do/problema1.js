<script>
//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements
//Solucion sin funciones
//Lilia Trujillo 2A
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