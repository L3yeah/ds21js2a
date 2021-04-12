<script>
//1. bubble - your implementation 
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
  
  for (i = 0; i < d.length; i++) {
   for(j=0; j < d.length - 1; j++){
    if (d[j] > d[j + 1]) {
      var a = d[j], b = d[j + 1];
      d[j] = b;
      d[j + 1] = a;
     }
   }
  }
document.write('Array ordenado: '+d);
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
  for (i = 0; i < d.length; i++) {
   for(j=0; j < d.length - 1; j++){
    if (d[j] > d[j + 1]) {
      var a = d[j], b = d[j + 1];
      d[j] = b;
      d[j + 1] = a;
     }
   }
  }
  return d;
}
</script>