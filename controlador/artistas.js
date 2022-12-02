$(document).ready(function(){

    /* ----- funcion de optener cancion -----*/
    var getInfo = function() {
  
      var inputValue = $("#buscador").val();
  
      //validamos que no este vacia la busqueda
      if (inputValue == '') {
  
        $("#anuncio").html("<h1>No se encontró ningún resultado</h1>")
  
      } else {
  
        if($(".wrap_result").html("")) {
  
        } else {
          $(".wrap_result").html("");
        }
  
        const settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://k-pop.p.rapidapi.com/idols?q=" + inputValue,
          "method": "GET",
          "headers": {
            "X-RapidAPI-Key": "ff15588093mshf2c1a0bf9884472p1741f0jsnd0eebfebaa74",
            "X-RapidAPI-Host": "k-pop.p.rapidapi.com"
          }
        };
        $.ajax(settings).done(function (response) {
          console.log(response);
          $("#buscador").val("");
          if (response.count =! 0) {
            
            $("#anuncio").html("<h1></h1>");   
  
            $.each(response.data, function(indice, contenido){
              console.log(contenido);
              $(".wrap_result").append('<ul><li><h1>'+contenido["Full Name"]+'</h1><h2>'+contenido["Stage Name"]+'</h2><h3>Group: '+contenido.Group+'</h3><p>Localidad: '+contenido.Country+'</p> <p>Fecha de nacimiento: '+contenido["Date of Birth"]+'</p></li></ul>');
            });
          
          } else {
            $("#anuncio").html("<h1>No se encontró ningún resultado</h1>");
          }
   
        });
  
      }
    }
  
    /* ------Gatillos------*/
  
    //gatillos para buscar 
    $("#buscar").click(getInfo);
    $("#buscador").keyup(function(event){
      if (event.keyCode == 13) {
        getInfo();
      }
    })
  
  });
  