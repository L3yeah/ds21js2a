<script>
//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
//Lilia Trujillo 2A
//Solucion sin funciones
let n = prompt('Ingresa un numero');

let rnd = Math.floor(1 + (Math.random()) *(n));
document.write('Numero aleatorio entre 1 y '+n+' es:'+rnd+'.');
//Solucion con funciones
let n = prompt('Ingresa un numero');
  
function aleatorio(n){
  let rnd = Math.floor(1 + (Math.random()) *(n));
  return rnd;
}
document.write('Numero aleatorio entre 1 y '+n+' es:'+aleatorio(n)+'.');
</script>