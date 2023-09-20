function Verificar()
{
    let numero=String(document.getElementById("txtnumero").value);
    let numerovolteado="";
    for(let i=numero.length-1; i>=0; i--)
    {
        numerovolteado += numero.charAt(i);
    }

    if(numero==numerovolteado)
    {
        document.getElementById("resultado").innerHTML=("Es palindromo");
    }
    else
    {
        document.getElementById("resultado").innerHTML=("No es palindromo");
    }
}