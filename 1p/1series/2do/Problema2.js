<script>
//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n
//Lilia Trujillo 2A
//Solucion sin funciones
let num = prompt('Ingresa un numero:');
let potencias = [], temp;

for(let i = 0; i<= num; i++){
		temp = Math.pow(2,i);
  	potencias.push(temp);
}
document.write('Las potencias de 2^0 hasta 2^'+num+' son: ' +potencias+'.');

//Solucion con funciones
let num = prompt('Ingresa un numero:');
function pot(n){

  let potencias = [], temp;

	for(let i = 0; i<= n; i++){
			temp = Math.pow(2,i);
  		potencias.push(temp);
			}
  			return potencias;
}
document.write('Las potencias de 2^0 hasta 2^'+num+' son: ' +pot(num)+'.');
</script>