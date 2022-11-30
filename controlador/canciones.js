$(document).ready(function(){
  var getSong = function() {

    var song = $("#buscador").val();
    if (song == '') {
      console.log("No se ha buscado nada");
    } else {

      console.log(song);
  /*
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
      });*/
    }
  }
  $("#buscar").click(getSong);
  $("#buscador").keyup(function(event){
    if (event.keyCode == 13) {
      getSong();
    }
  })

});
