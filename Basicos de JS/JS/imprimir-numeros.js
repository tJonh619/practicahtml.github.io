function imprimirrango() {
    let inicio = parseInt(document.getElementById("txtninicio").value);
    let fin = parseInt(document.getElementById("txtnfinal").value);

    for (let i = inicio; i <= fin; i++) {
        document.getElementById("resultado").innerHTML += i + "<br>";
        console.log(i)
    }
}