// Función recursiva 
function torresDeHanoi(n, origen, destino, auxiliar, pasos) {
    if (n === 1) {
        pasos.push(`Mover disco 1 de ${origen} a ${destino}`);
        return;
    }
    torresDeHanoi(n - 1, origen, auxiliar, destino, pasos);
    pasos.push(`Mover disco ${n} de ${origen} a ${destino}`);
    torresDeHanoi(n - 1, auxiliar, destino, origen, pasos);
}


document.getElementById("hanoiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const numDiscos = parseInt(document.getElementById("numDiscos").value);
    const pasos = [];
    torresDeHanoi(numDiscos, "A", "C", "B", pasos);
    let resultadoHTML = "<h2>Pasos para resolver:</h2>";
    pasos.forEach(paso => {
        resultadoHTML += `<p>${paso}</p>`;
    });

    document.getElementById("result").innerHTML = resultadoHTML;
});
