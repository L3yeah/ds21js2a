<script>
//Lilia Trujillo
//Tercer problema (map)
const map = new Map();
map.set('first name','pedro');
map.set('last name','lopez');
map.set('age');
  
function newval(mapa){
 let num=Math.floor(Math.random()*70);
 mapa.set('age',num);
}
newval(map);
document.write('La edad de ' + map.get('first name') + ' ' + map.get('last name') + ' es: ' + map.get('age'));
</script>