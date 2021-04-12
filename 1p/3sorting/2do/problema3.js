<script>
//3. bubble - your implementation 
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted
//Lilia Trujillo 2A
//Solucion sin funciones
let o = [];
var temp = '';

for(i = 1; i<7;i++){
  for(j = 0;j<8;j++){
  let rnd = Math.floor(97 + Math.random() * (122 - 97 + 1));
  temp = temp.concat(String.fromCharCode(rnd));
}
  o.push(temp);
  temp = '';
}
document.write('Array sin ordenar: '+o+'<br>');
  
for (i = 0; i < o.length; i++) {
   for(j=0; j < o.length - 1; j++){
    if (o[j] > o[j + 1]) {
      var a = o[j], b = o[j + 1];
      o[j] = b;
      o[j + 1] = a;
     }
   }
  }
document.write('Array ordenado: '+o);
//Solucion con funciones
let o = [];
var temp = '';
document.write('Array sin ordenar: '+fillArray(temp,o)+'<br>');
document.write('Array ordenado: '+sort(o));

function fillArray(temp,o){
  for(i = 1; i<7;i++){
  for(j = 0;j<8;j++){
  let rnd = Math.floor(97 + Math.random() * (122 - 97 + 1));
  temp = temp.concat(String.fromCharCode(rnd));
}
  o.push(temp);
  temp = '';
}
  return o;
}

function sort(o){
for (i = 0; i < o.length; i++) {
   for(j=0; j < o.length - 1; j++){
    if (o[j] > o[j + 1]) {
      var a = o[j], b = o[j + 1];
      o[j] = b;
      o[j + 1] = a;
     }
   }
  }
  return o;
}
</script>
