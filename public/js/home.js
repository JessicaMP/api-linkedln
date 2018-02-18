
(function dates() {
  $('#name').text(localStorage.name);
  let ruta = localStorage.pictureUrl;
  $('#photo-user').attr('src', ruta);
  $('#lastname').text(localStorage.lastName);
  $('#headline').text(localStorage.headline);
  let url = localStorage.getItem(`url`);
  $('#profile').attr('href', url);
  $('#signOut').on('click', function() {
    IN.User.logout(logout);
    function logout() {
      $signOut.attr('href', '../index.html');
    }
  });
}());




