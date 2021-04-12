<script>
//3. Factorial
//   factorial(n)
// -> n integer
// <- the n first factorial elements
//Lilia Trujillo 2A
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