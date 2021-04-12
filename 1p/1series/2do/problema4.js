<script>
//2. Powers of 10
//   power10(n)
// -> n integer
// <- the n first elements of 10^nS
//Lilia Trujillo 2A
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
