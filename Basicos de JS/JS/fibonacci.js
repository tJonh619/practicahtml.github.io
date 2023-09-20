function fibo()
{
    let numTerms = parseInt(document.getElementById("txtnumTerms").value);
    let fibonacciSeq = [0, 1]; // Inicializamos la secuencia con los primeros dos términos

    for (var i = 2; i < numTerms; i++) {
        fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i - 2]); // Generamos los siguientes términos sumando los dos anteriores
    }

    let result = "Secuencia de Fibonacci: " + fibonacciSeq.join(", ");
    document.getElementById("resultado").innerHTML = result;
}