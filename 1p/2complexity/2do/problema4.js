<script>
//4. random name
//   randomName()
// -> 
// <- one random name
// ie nameXYZ
//Lilia Trujillo 2A
//Solucion sin funciones
var name ='';
for(i = 0;i<8;i++){
  let rnd = Math.floor(97 + Math.random() * (122 - 97 + 1));
  name = name.concat(String.fromCharCode(rnd));
}
document.write('El nombre aleatorio generado es: '+name);
//Solucion con funciones
function randomName(){
  var name ='';
  for(i = 0;i<8;i++){
  let rnd = Math.floor(97 + Math.random() * (122 - 97 + 1));
  name = name.concat(String.fromCharCode(rnd));
}
	return name;
}
document.write('El nombre aleatorio generado es: '+randomName());
</script>