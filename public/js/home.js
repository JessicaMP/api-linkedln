
(function dates() {
  $('#name').text(localStorage.name);
  let ruta = localStorage.picture;
  $('#photos').attr('src', ruta);
  $('#lastname').text(localStorage.lastName);
  $('#headline').text(localStorage.headline);
  let url = localStorage.getItem(`url`);
  $('#profile').attr('href', url);
}());




