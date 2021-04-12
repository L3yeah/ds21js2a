<script>
//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random names sorted
// verify is sorted
//Lilia Trujillo 2A
//Solucion sin funciones
let d = [];

for(i = 1; i<7;i++){
  let rnd = Math.floor(1 + (Math.random()) *(100));
  d.push(rnd);
}

document.write('Array sin ordenar: '+d+'<br>');
document.write('Array ordenado: '+d.sort());
//Solucion con funciones
let d = [];
  
document.write('Array sin ordenar: '+fillarray(d)+'<br>');
document.write('Array ordenado: '+sort(d));
               
function fillarray(d){
  for(i = 1; i<7;i++){
  let rnd = Math.floor(1 + (Math.random()) *(100));
  d.push(rnd);
}
  return d;
}
function sort(d){
	d.sort();
  return d;
}
</script>
