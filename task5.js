/*
5. Creen un constructor para un objeto `FriendsList` que almacene una lista de nombres en un array.
    - Su programa debe leer la cantidad de nombres y los nombres desde los argumentos de la línea de comandos.
    - Su programa debe luego imprimir el array directamente en la consola.
    - La salida debería verse así: `[ 'nombre1', 'nombre2' ]`
        */  // ¡Escribe tu código debajo de esta línea!

function FriendsList(nombres){
    this.nombres = nombres;
    this.imprimirLista = function(){
        console.log(this.nombres);
    }
}

let myNewArray = process.argv.slice(4);

const nuevoCorreo = new FriendsList(myNewArray)

nuevoCorreo.imprimirLista();


// ¡Escribe tu código encima de esta línea!