<script>
//Lilia Trujilllo
//Primer problema (object)
var objeto =  {firstName: "pedro",lastName:"lopez", age};

 
function newval(o){
 let num=Math.floor(Math.random()*70);
 o.age = num;
}

newval(objeto);

document.write(objeto);

</script>