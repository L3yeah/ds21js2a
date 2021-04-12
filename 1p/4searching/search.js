<script>
// search(d,k)
// -> d an array of random names
// -> k value to find
// <- the position of k if found
// <- -1 if not found
let o = ['juan','pedro','jose','maria','susana'];
let pal = prompt('Introduce el nombre a buscar:');
document.write(search(o,pal));
function search(arr,word){
    return arr.indexOf(word);
}
//Lilia Trujillo 2A
</script>
