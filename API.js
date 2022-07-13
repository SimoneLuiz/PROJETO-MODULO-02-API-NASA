const apodUrlToken =
  "https://api.nasa.gov/planetary/apod? api_key=TqXPpWLtm32Mt32t6Yv3Hw50efG2v7q1TmiNSXz2";

var minDate = "1995-06-20";

var atualDate = new Date();
var fotoDate = `${atualDate.getFullYear()}-${
  atualDate.getMonth() + 1
}-${atualDate.getDate()}`;
var inputDate = document.getElementById("date");
inputDate.value = fotoDate;
inputDate.setAttribute("min", minDate);
inputDate.setAttribute("max", fotoDate);
var fotoDoDia = document.getElementById("fotoDoDia");
var fotoTitulo = document.getElementById("title");
var fotoExplicacao = document.getElementById("explanation");
var fotoCredito = document.getElementById("copyright");

const putData = (data) => {
  fotoDoDia.src = data.url;
  fotoTitulo.innerText = data.title;
  fotoExplicacao.innerText = data.explanation;
  fotoCredito.innerText = data.copyright || "NASA";
};

$(document).ready(function () {
  $("button").click(function () {
    if (
      new Date(inputDate.value) < atualDate &&
      new Date(inputDate.value) > new Date(minDate)
    ) {
      $.get(apodUrlToken, { date: inputDate.value }, function (data) {
        putData(data);
      });
    } else {
      alert(
        `Data inválida!\nA data precisa ser entre: ${minDate} e ${fotoDate}`
      );
    }
  });
});

$(document).ready(function () {
  $.get(apodUrlToken, { date: fotoDate }, function (data) {
    putData(data);
  });
});
