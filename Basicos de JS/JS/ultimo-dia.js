function obtenerfecha()
{
    let año = parseInt(document.getElementById("txtaño").value);
    let mes = parseInt(document.getElementById("txtmes").value);

    let date = new Date(año,mes,0).getDate();
    
    document.getElementById("txtprimerdia").innerHTML="1";
    document.getElementById("txtultimodia").innerHTML= date;
}