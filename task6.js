// ¡Escribe tu código debajo de esta línea!
/* ¿Pueden crear un constructor para un objeto que describa una lista de compras? ¡Usen esta tarea para experimentar con constructores!
    - ¿Qué tan larga debería ser la lista?
        - No todos los usuarios querrán la misma cantidad de artículos.
    - ¿Cómo manejarían múltiplos del mismo artículo, como 2 botellas de leche o una docena de huevos?
    - ¿Cómo recolectarían estos datos del usuario?
    R//  capturo por comando lo que necesito 
    - ¿Cómo almacenarían estos datos en un objeto?
    R// capturo por comando como constante y luego se lo asigno al valor del la key
    - ¿Cómo se vería la función constructora para este objeto?  */


const desde = process.argv[2]
const hasta = process.argv[3]
let myNewArray = process.argv.slice(4);

const user3 = {
  nombre: desde, //ejemplo de asignacion
  apellido: hasta, //ejemplo de asignacion
  market: myNewArray
};
const user4 = {
  nombre: desde, //ejemplo de asignacion
  apellido: hasta, //ejemplo de asignacion
  market: [
    {
      article: "leche",
      quantity: 3,
      unit_price: 2.86,
    },
    {
      article: "arroz",
      quantity: 5,
      unit_price: 2.86,
    },
  ],
};

let myPersons = [];
//myPersons.push(myObject);
myPersons.push(user3);

myPersons[0].market.push(
  {
      article: "aceite",
      quantity: 2,
      unit_price: 3.0,
}  
)

//Buyer es el objecto que definamos para  el comprador
function MarketPlaceLaEstafa(buyer){

}


// le va  apasar el arreglo de objectos, donde ?? como parametro
//const objetito =  new MarketPlaceLaEstafa(buyerList)
console.log(myPersons[0]);
