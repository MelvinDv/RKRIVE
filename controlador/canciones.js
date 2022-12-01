

$(document).ready(function(){

  /* ----- funcion de optener cancion -----*/
  var getSong = function() {

    var song = $("#buscador").val();

    //validamos que no este basia la busqueda
    if (song == '') {

      $("#anuncio").toggleClass("invisible",false);
      $("#anuncio").html("<h1>No se encontro ningun resultado</h1>")

    } else {

      const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://k-pop.p.rapidapi.com/songs?q=" + song,
        "method": "GET",
        "headers": {
          "X-RapidAPI-Key": "ff15588093mshf2c1a0bf9884472p1741f0jsnd0eebfebaa74",
          "X-RapidAPI-Host": "k-pop.p.rapidapi.com"
        }
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        if (response.count =! 0) {
          
          $("#anuncio").toggleClass("invisible", false);
          $("#anuncio").html("<h1>Esto fue lo que encontramos</h1>")

          $.each(response.data, function(indice, contenido){
            console.log(contenido);
            $(".wrap_result").append('<ul><li><h1>'+contenido["Song Name"]+'</h1><h1>'+contenido["Korean Name"]+'</h1><h2>Artista: '+contenido.Artist+'</h2><p>Director: '+contenido.Director+'</p><small>Fecha: '+contenido.Date+'</small><video src="'+contenido.Video+'" width="100px" height="100px" poster="'+contenido.Video+'" autoplay="true"></video></li></ul>');
          });
        
        }

      


      });

      
    }
  }

  /* ------Gatillos------*/

  //gatillos para buscar 
  $("#buscar").click(getSong);
  $("#buscador").keyup(function(event){
    if (event.keyCode == 13) {
      getSong();
    }
  })





});
