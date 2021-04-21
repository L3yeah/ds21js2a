<script>
//Lilia Trujillo
//Cuarto problema (array)
let arr = [];
function attach(arr){
 for(let i = 0; i<10; i++){
 let num=Math.floor(Math.random()*30);
 arr.push(num);
 }
}
attach(arr);
document.write('El array con los numeros generados es: '+arr);
</script>