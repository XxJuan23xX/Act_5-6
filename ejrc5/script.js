// Función recursiva
function calcularCambio(cantidad, denominaciones, resultado = {}, index = 0) {
    if (cantidad === 0) {
        return resultado;
    }
    if (index >= denominaciones.length) {
        return resultado;
    }
    const denominacion = denominaciones[index];
    const numMonedas = Math.floor(cantidad / denominacion);
    if (numMonedas > 0) {
        resultado[denominacion] = numMonedas;
    }
    return calcularCambio(cantidad % denominacion, denominaciones, resultado, index + 1);
}


document.getElementById("changeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const amountPaid = parseFloat(document.getElementById("amountPaid").value);
    const totalCost = parseFloat(document.getElementById("totalCost").value);
    let change = amountPaid - totalCost;
    if (change < 0) {
        document.getElementById("result").innerHTML = "La cantidad pagada es menor que el costo.";
        return;
    }

    const denominaciones = [10000, 5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1]; 
    const changeInCents = Math.round(change * 100);
    const resultado = calcularCambio(changeInCents, denominaciones);
    let resultadoHTML = "<h2>Cambio devuelto:</h2>";
    for (const [moneda, cantidad] of Object.entries(resultado)) {
        if (moneda >= 100) {
            resultadoHTML += `<p>${cantidad} moneda(s) de ${moneda / 100} pesos</p>`;
        } else {
            resultadoHTML += `<p>${cantidad} moneda(s) de ${moneda} centavos</p>`;
        }
    }
    resultadoHTML += `<h3>Cambio Total: ${change.toFixed(2)} pesos</h3>`;

    document.getElementById("result").innerHTML = resultadoHTML;
});
