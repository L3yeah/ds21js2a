<script>
//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements
//Lilia Trujillo 2A
//Solucion sin funciones
let n = prompt('Ingresa un numero:');

let todos = [];
for(i=2;i<n;i++){
	todos.push(i);
}
//borramos pares
for(let i=1;i<todos.length;i++){
	if(todos[i]%2 == 0)
    todos.splice(i,1);
}
//borramos multiplos de 3
for(let i=1;i<todos.length;i++){
  if(todos[i] !== 3 && todos[i]%3 == 0)
    todos.splice(i,1);
}
//borramos multiplos de 5
for(let i=1;i<todos.length;i++){
  if(todos[i] !== 5 && todos[i]%5 == 0)
    todos.splice(i,1);
}
document.write('Los numeros correspondientes a la criba de Eratóstenes menores a '+n+' son: '+todos+'.');
//Solucion con funciones
let n = prompt('Ingresa un numero:');
function eratosthenes(n){
let todos = [];
for(i=2;i<n;i++){
	todos.push(i);
}
//borramos pares
for(let i=1;i<todos.length;i++){
	if(todos[i]%2 == 0)
    todos.splice(i,1);
}
//borramos multiplos de 3
for(let i=1;i<todos.length;i++){
  if(todos[i] !== 3 && todos[i]%3 == 0)
    todos.splice(i,1);
}
//borramos multiplos de 5
for(let i=1;i<todos.length;i++){
  if(todos[i] !== 5 && todos[i]%5 == 0)
    todos.splice(i,1);
}
  return todos;
}
document.write('Los numeros correspondientes a la criba de Eratóstenes menores a '+n+' son: '+eratosthenes(n)+'.');
</script>
