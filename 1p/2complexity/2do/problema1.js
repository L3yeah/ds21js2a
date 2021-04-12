<script>
//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 
//Lilia Trujillo 2A
//Solucion sin funciones
let a = prompt('Ingresa un numero: ');
let b = prompt('Ingresa un numero: ');
let grande = Math.max(a,b);
let chico = Math.min(a,b);
let div = grande;
  
  while(div % chico !== 0){
    div = div + grande;
  }

document.write('El MCM de '+a+' y '+b+' es: '+div+'.');
  
//Solucion con funciones
let a = prompt('Ingresa un numero: ');
let b = prompt('Ingresa un numero: ');

function LCM(a,b){
let grande = Math.max(a,b);
let chico = Math.min(a,b);
let div = grande;
  
  while(div % chico !== 0){
    div = div + grande;
  }
  return div;
}

document.write('El MCM de '+a+' y '+b+' es: '+LCM(a,b)+'.');
</script>
