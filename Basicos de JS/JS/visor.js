window.onload=function()
{
    visor1=document.getElementById("visor");
    mititulo=document.getElementById("titulo");
}
function mifoto(num){
    f="/Recursos/Foto"+num+".jpg";
    document.images["fotoVisor"].src=f;
    t=document.images["Foto"+num].alt;
    mititulo.innerHTML=t;
}