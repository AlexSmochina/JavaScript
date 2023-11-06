function insertarFila() {
    let table = document.getElementById("Taula");
    let trs = table.getElementsByTagName("tr").length;
    let tr = table.insertRow(-1)
    table.rows[trs].insertCell(-1);
    table.rows[trs].insertCell(-1);
    tr.cells[0].innerHTML = `fila ${trs + 1} cel·la 2`;
    tr.cells[1].innerHTML = `fila ${trs + 1} cel·la 2`;
}

function insertarFila_a() {
    let table = document.getElementById("Taula");
    let trs = table.getElementsByTagName("tr").length;
    table.insertRow(0)
    table.rows[0].insertCell(0);
    table.rows[0].insertCell(0);
    for (i = 0; i < (trs + 1); i++) {
        table.rows[i].cells[0].innerHTML = `fila ${i} cel·la 1`
        table.rows[i].cells[1].innerHTML = `fila ${i} cel·la 2`
    }
}

window.onload = function insertarFila_6_a() {
    let table = document.getElementById("Taula_6");
    table.rows[1].cells[1].innerHTML = "Cambio value"

}