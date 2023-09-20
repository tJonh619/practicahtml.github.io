function contenido(x)
{
    var element = document.getElementById(x).id;
    var div = document.getElementById("container");

// Utiliza fetch para obtener el contenido del documento HTML
fetch("/Html/"+element+".html")
  .then(function(response) {
    return response.text();
  })
  .then(function(html) {
    // Inserta el contenido del documento HTML en el div
    div.innerHTML = html;
  })
  .catch(function(error) {
    console.log('Error: ' + error);
  });
}