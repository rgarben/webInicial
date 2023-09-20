let botonAdd = document.getElementById("add");

let botonBorrar = document.getElementById("borrar");

let tabla = document.getElementById("tablaa");
    
let textoValor = document.getElementById("texto");

let columna = document.createElement("td");

botonAdd.addEventListener('click', function(){

    let fila = document.createElement("tr");

    let celda = document.createElement("td");

    celda.textContent = textoValor.value;

    let filas = tabla.getElementsByTagName("td");

    let existe = false;

    for(let i=0; i<filas.length; i++ ){
        if(filas.item(i).textContent==celda.textContent){
            existe=true;
            alert("Ya existe el producto");
        }
    }
    
    if(!existe){
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }

})

botonBorrar.addEventListener('click', function(){
    
     let textoValor = document.getElementById("texto");
     let filas = document.getElementsByTagName("tr");
     let encontrar = false;
     for (let i=0;i<filas.length && !encontrar ;i++){
         let fila = filas[i];
         let columna = fila.getElementsByTagName("td")[0];
         let texto = columna.textContent;

         if(texto==textoValor.value){
             encontrar=true;
             filas[i].remove();
         }

     }

})


