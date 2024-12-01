let numeros = [7, 8, 5, 9, 5];

function mostrar_notas() {
    let lista = document.getElementById("lista_notas");
    lista.innerHTML = "";

    for (let i = 0; i < numeros.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = numeros[i];
        lista.appendChild(elementoLista);
    }
}

function mostrar_mayor() {
    let res = document.getElementById("resultado");
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    res.textContent = mayor;
}

function mostar_prom(){
    let res = document.getElementById("resultado")
    let suma = 0
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    suma = suma / 5
    res.textContent = suma;
    
}

function deber(){
    let res = document.getElementById("resul")
    let deber = 0
    for (let i = 1; i < numeros.length; i++){
        if([i] < 4){
            deber += 1;
            if(deber >= 1){
                res.textContent = "aplaza"
            }else{
                res.textContent = " no aplaza"

            }
        }
    }
}

