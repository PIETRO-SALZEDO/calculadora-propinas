var platos = parseInt(prompt("ingresa el numero de platos que consumio"))
var propina = prompt(" va a pagar propina?")
var valorplato;
var cuenta = 0;

for (i = 1; i<= platos; i++){
    valorplato = parseInt( prompt("ingresa el valor del plato" + i))
    cuenta = cuenta + valorplato;
}

if (propina =="si"){
    console.log("usted va a pagar el 10% de su cuenta como propina")
    console.log(` su cuenta da un total de $${cuenta} y la propina es de $${ cuenta *0,10}`)
} else{
    console.log(`su cuenta da un total de $${cuenta}`)
}