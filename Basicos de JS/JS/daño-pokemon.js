function calculardaño()
{
    var tipo1 =document.getElementById("tipo1").value;
    var tipo2 =document.getElementById("tipo2").value;
    var ataque =document.getElementById("txtataque").value;
    var defensa =document.getElementById("txtdefensa").value;
    var eficacia = 0.5;
    if(tipo1 != tipo2)
    {
        if(tipo2 == ("electrico"))eficacia = 1;
        else if((tipo1 == ("hierba") || tipo1 == ("electricidad")) && (tipo2 == ("agua"))) eficacia=2;
        else if((tipo1 == ("agua")) && (tipo2 == ("fuego"))) eficacia=2;
        else if((tipo1 == ("fuego")) && (tipo2 == ("hierba"))) eficacia=2;
        else eficacia=1;
    }
    var daño= Math.ceil(50*(ataque/defensa)*eficacia);
    document.getElementById("resultado").innerHTML= daño;
    
}