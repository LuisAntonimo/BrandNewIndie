function init() {
  var usuarioCorrente = {}

  usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    } else {
      window.location.href = 'login.html'
    }
}

init();