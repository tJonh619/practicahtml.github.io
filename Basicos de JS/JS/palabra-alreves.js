function imprimealreves()
{
    let palabra= document.getElementById("txtpalabra").value;
    let palabraVolteada ="";
    for (let i = palabra.length - 1; i >= 0; i--) 
    {
        palabraVolteada += palabra.charAt(i);
    }
    document.getElementById("resultado").innerHTML= palabraVolteada;
}