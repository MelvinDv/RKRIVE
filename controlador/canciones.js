var input = document.forms["formulario"]["buscador"].value;
validateForm();

function validateForm() {
  if (input == "") {
    console.log("No se ha buscado nada");
  } else {
    var song = "dynamite";

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
    });
  }
}
